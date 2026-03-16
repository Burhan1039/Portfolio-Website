import tls from 'tls';
import { Buffer } from 'buffer';

function encodeBase64(value) {
  return Buffer.from(value, 'utf8').toString('base64');
}

function readSmtpResponse(socket) {
  return new Promise((resolve, reject) => {
    let data = '';

    const onData = (chunk) => {
      data += chunk.toString('utf8');
      const lines = data.split('\r\n').filter(Boolean);
      const lastLine = lines[lines.length - 1];

      if (lastLine && /^\d{3} /.test(lastLine)) {
        cleanup();
        resolve(data);
      }
    };

    const onError = (error) => {
      cleanup();
      reject(error);
    };

    const onClose = () => {
      cleanup();
      reject(new Error('SMTP connection closed unexpectedly.'));
    };

    const cleanup = () => {
      socket.off('data', onData);
      socket.off('error', onError);
      socket.off('close', onClose);
    };

    socket.on('data', onData);
    socket.on('error', onError);
    socket.on('close', onClose);
  });
}

async function sendCommand(socket, command, expectedCode) {
  socket.write(`${command}\r\n`);
  const response = await readSmtpResponse(socket);

  if (!response.startsWith(String(expectedCode))) {
    throw new Error(`SMTP command failed for "${command}": ${response.trim()}`);
  }

  return response;
}

export async function sendContactEmail({ name, email, message }) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const contactToEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword || !contactToEmail) {
    throw new Error('Gmail SMTP environment variables are not configured.');
  }

  const subject = `New portfolio inquiry from ${name}`;
  const body = [
    `You received a new portfolio contact submission.`,
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    '',
    'Message:',
    message,
  ].join('\n');

  const emailPayload = [
    `From: ${gmailUser}`,
    `To: ${contactToEmail}`,
    `Reply-To: ${email}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    '',
    body,
  ].join('\r\n');

  const socket = tls.connect({
    host: 'smtp.gmail.com',
    port: 465,
    servername: 'smtp.gmail.com',
  });

  await new Promise((resolve, reject) => {
    socket.once('secureConnect', resolve);
    socket.once('error', reject);
  });

  try {
    const greeting = await readSmtpResponse(socket);
    if (!greeting.startsWith('220')) {
      throw new Error(`Unexpected SMTP greeting: ${greeting.trim()}`);
    }

    await sendCommand(socket, 'EHLO localhost', 250);
    await sendCommand(socket, 'AUTH LOGIN', 334);
    await sendCommand(socket, encodeBase64(gmailUser), 334);
    await sendCommand(socket, encodeBase64(gmailAppPassword), 235);
    await sendCommand(socket, `MAIL FROM:<${gmailUser}>`, 250);
    await sendCommand(socket, `RCPT TO:<${contactToEmail}>`, 250);
    await sendCommand(socket, 'DATA', 354);
    await sendCommand(socket, `${emailPayload}\r\n.`, 250);
    await sendCommand(socket, 'QUIT', 221);
  } finally {
    socket.end();
  }
}
