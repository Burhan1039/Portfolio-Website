import { useEffect, useState } from 'react';

const STORAGE_KEY = 'portfolio-theme';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark';
    }

    return localStorage.getItem(STORAGE_KEY) || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const body = window.document.body;

    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('light', theme === 'light');
    body.classList.toggle('light', theme === 'light');
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === 'dark' ? 'light' : 'dark')),
  };
}
