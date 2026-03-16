import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import contactRoutes from './routes/contactRoutes.js';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 5001;
const allowedOrigins = [
  process.env.CLIENT_ORIGIN || 'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:4173',
  'http://127.0.0.1:4173',
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(new Error('Not allowed by CORS'));
    },
  }),
);
app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({ success: true, message: 'API is healthy.' });
});

app.use('/api/contact', contactRoutes);

app.use((error, _request, response, _next) => {
  console.error(error);
  response.status(500).json({ success: false, message: 'Unexpected server error.' });
});

const server = app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

server.on('error', (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Update PORT in server/.env or stop the conflicting process.`);
    return;
  }

  console.error('Failed to start server:', error);
});
