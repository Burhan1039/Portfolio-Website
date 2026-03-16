import { useState } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
    >
      <div className="shell flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-3 font-display text-lg font-bold tracking-tight text-slate-950 dark:text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-sm font-bold text-white shadow-glow">
            BN
          </span>
          <span>BurhanNaeem.dev</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 text-slate-900 transition hover:border-brand-400 hover:text-brand-600 dark:border-white/10 dark:text-white dark:hover:border-brand-500/50 dark:hover:text-brand-300 md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-5 origin-center rounded-full bg-current transition duration-300 ${
                isOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-5 rounded-full bg-current transition duration-300 ${
                isOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-5 origin-center rounded-full bg-current transition duration-300 ${
                isOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-slate-200 bg-slate-50/95 dark:border-white/10 dark:bg-slate-950/95 md:hidden">
          <div className="shell flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-slate-700 transition hover:text-brand-500 dark:text-slate-300 dark:hover:text-brand-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
