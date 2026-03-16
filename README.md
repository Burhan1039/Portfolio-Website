# Developer Portfolio

A modern portfolio for Burhan Naeem built with React, Vite, TailwindCSS, Framer Motion, Node.js, Express, and PostgreSQL.

## Stack

- Frontend: React, React Router, TailwindCSS, Framer Motion, Vite
- Backend: Node.js, Express.js, PostgreSQL

## Project Structure

```text
client/
  src/
    components/
    data/
    hooks/
    pages/
server/
  controllers/
  db/
  models/
  routes/
```

## Run Locally

### 1. Install dependencies

```bash
npm install
npm --prefix client install
npm --prefix server install
```

### 2. Set up PostgreSQL

Create a database, then run:

```bash
psql "$DATABASE_URL" -f server/db/schema.sql
```

Copy the example env file and update it:

```bash
cp server/.env.example server/.env
```

For Gmail SMTP email delivery, also set these in `server/.env`:

```bash
GMAIL_USER=yourgmail@gmail.com
GMAIL_APP_PASSWORD=your-16-character-app-password
CONTACT_TO_EMAIL=burhannaeem09@gmail.com
```

### 3. Start the apps

In one terminal:

```bash
npm run dev:server
```

In another terminal:

```bash
npm run dev:client
```

Frontend: [http://localhost:5173](http://localhost:5173)

Backend: [http://localhost:5001](http://localhost:5001)
Backend default port: `5001`

## API

### `POST /api/contact`

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I would like to discuss a project."
}
```

Successful response:

```json
{
  "success": true,
  "message": "Message sent successfully."
}
```

## Notes

- Update social links and any remaining placeholder GitHub URLs with your own details.
- Contact submissions will send to your Gmail inbox when Gmail SMTP is configured. Without Gmail SMTP env vars, the API will return an email setup error.
- Replace the generated preview SVGs inside `client/src/assets/` with your real screenshots whenever you are ready.

## Website Link
https://portfolio-website-client-indol.vercel.app/
