function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-400/50 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-200"
      aria-label="Toggle dark mode"
    >
      <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
      <span className="inline-flex h-6 w-11 items-center rounded-full bg-slate-200 p-1 dark:bg-slate-800">
        <span
          className={`h-4 w-4 rounded-full bg-brand-500 transition-transform ${theme === 'dark' ? 'translate-x-5' : 'translate-x-0'}`}
        />
      </span>
    </button>
  );
}

export default ThemeToggle;
