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

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 dark:bg-white dark:text-slate-950"
          >
            Get started
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-3 text-slate-900 dark:border-white/10 dark:text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          <span className="block h-0.5 w-5 bg-current" />
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
            <a href="#contact" className="inline-flex w-fit items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-950">
              Get started
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}

export default Navbar;
