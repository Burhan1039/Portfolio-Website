function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="shell">
        <div className="panel flex flex-col gap-5 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <address className="flex max-w-2xl flex-col gap-2 text-slate-300 not-italic sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5">
            <span>30 N GOULD ST STE N SHERIDAN, WY 82801</span>
            <a href="tel:+13074492754" className="transition hover:text-brand-200">
              +13074492754
            </a>
            <a href="mailto:burhan@nobleliving.co" className="transition hover:text-brand-200">
              burhan@nobleliving.co
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
