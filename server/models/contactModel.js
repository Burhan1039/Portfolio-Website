import { readFile, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../db/pool.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const fallbackStoragePath = path.resolve(__dirname, '../storage/contacts.json');

async function createContactFallback({ name, email, message }) {
  const existing = await readFile(fallbackStoragePath, 'utf8').catch(() => '[]');
  const contacts = JSON.parse(existing);

  const record = {
    id: Date.now(),
    name,
    email,
    message,
    created_at: new Date().toISOString(),
  };

  contacts.push(record);
  await writeFile(fallbackStoragePath, JSON.stringify(contacts, null, 2));
  return record;
}

export async function createContact({ name, email, message }) {
  const query = `
    INSERT INTO contacts (name, email, message)
    VALUES ($1, $2, $3)
    RETURNING id, name, email, message, created_at;
  `;

  const values = [name, email, message];

  try {
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    console.warn('Falling back to local contact storage:', error.message);
    return createContactFallback({ name, email, message });
  }
}
