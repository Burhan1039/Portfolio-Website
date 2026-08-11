function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="shell">
        <div className="panel flex flex-col gap-5 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-2xl">
            <p>
              © {new Date().getFullYear()} Burhan Naeem. Premium no-code and low-code product builds for startups and SMBs.
            </p>
            <address className="mt-2 text-slate-300 not-italic">
              30 N GOULD ST STE N SHERIDAN, WY 82801
            </address>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://github.com/Burhan1039" target="_blank" rel="noreferrer" className="chip">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/burhanb72/" target="_blank" rel="noreferrer" className="chip">
              LinkedIn
            </a>
            <a href="mailto:burhannaeem09@gmail.com" className="chip">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
