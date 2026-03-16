function Footer() {
  return (
    <footer className="py-10">
      <div className="shell rounded-[1.5rem] border border-slate-200 bg-white p-6 text-sm text-slate-500 shadow-sm dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-400 sm:flex sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Burhan Naeem. Designed to help startups move from concept to launch with clarity and speed.</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/Burhan1039" target="_blank" rel="noreferrer" className="transition hover:text-slate-950 dark:hover:text-white">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/burhanb72/" target="_blank" rel="noreferrer" className="transition hover:text-slate-950 dark:hover:text-white">
            LinkedIn
          </a>
          <a href="mailto:burhannaeem09@gmail.com" className="transition hover:text-slate-950 dark:hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
