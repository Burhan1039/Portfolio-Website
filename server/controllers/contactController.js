import { createContact } from '../models/contactModel.js';
import { sendContactEmail } from '../mailer.js';

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContact(request, response) {
  const { name, email, message } = request.body;

  const sanitized = {
    name: typeof name === 'string' ? name.trim() : '',
    email: typeof email === 'string' ? email.trim().toLowerCase() : '',
    message: typeof message === 'string' ? message.trim() : '',
  };

  if (!sanitized.name || sanitized.name.length < 2) {
    return response.status(400).json({ success: false, message: 'Please provide a valid name.' });
  }

  if (!sanitized.email || !isValidEmail(sanitized.email)) {
    return response.status(400).json({ success: false, message: 'Please provide a valid email address.' });
  }

  if (!sanitized.message || sanitized.message.length < 10) {
    return response.status(400).json({ success: false, message: 'Message should be at least 10 characters long.' });
  }

  try {
    await createContact(sanitized);
    await sendContactEmail(sanitized);

    return response.status(201).json({
      success: true,
      message: 'Message sent successfully.',
    });
  } catch (error) {
    console.error('Failed to store contact message:', error);

    return response.status(500).json({
      success: false,
      message: 'Unable to send your message right now. Please check your Gmail SMTP setup and try again.',
    });
  }
}
