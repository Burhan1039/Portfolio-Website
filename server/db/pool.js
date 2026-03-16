import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pg;

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  // The app can still boot for UI development, but contact submissions will fail until DATABASE_URL is configured.
  console.warn('DATABASE_URL is not set. Contact form submissions will not be persisted.');
}

const pool = new Pool({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

export default pool;
