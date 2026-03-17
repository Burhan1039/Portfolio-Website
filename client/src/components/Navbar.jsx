import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#05181b]">
      <div className="shell py-4">
        <div className="panel grid grid-cols-[auto_auto] items-center justify-between gap-4 px-4 py-3 md:grid-cols-[auto_1fr_auto] md:justify-normal">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-sm font-bold text-slate-950 shadow-glow">
              BN
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight">BurhanNaeem.dev</span>
          </a>

          <nav className="hidden items-center justify-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-brand-200">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn-primary hidden md:inline-flex">
            Get started
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => (prev ? false : true))}
            className="inline-flex h-10 w-10 items-center justify-center self-center rounded-full border border-white/20 bg-white/5 text-slate-100 md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            <span className="relative flex h-4 w-5 flex-col justify-between">
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`h-0.5 w-5 rounded-full bg-current transition ${isOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/10 bg-[#05181b] md:hidden"
          >
            <div className="shell flex flex-col gap-3 py-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="card-soft px-4 py-3 text-sm font-medium text-slate-200"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsOpen(false)} className="btn-primary">
                Get started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
