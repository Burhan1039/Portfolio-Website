import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-300">404</p>
      <h1 className="mt-4 font-display text-5xl font-bold">Page not found</h1>
      <p className="mt-4 max-w-xl text-slate-300">The page you were looking for doesn’t exist. Let’s get you back to the portfolio.</p>
      <Link
        to="/"
        className="btn-primary mt-8"
      >
        Return Home
      </Link>
    </div>
  );
}

export default NotFoundPage;
