'use client';

import { useState, useEffect } from 'react';
import { MoonStar, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

type ThemeMode = 'light' | 'dark';

export function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('theme') as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const resolvedTheme: ThemeMode = stored ?? (prefersDark ? 'dark' : 'light');

    setTheme(resolvedTheme);
    document.documentElement.classList.toggle('dark', resolvedTheme === 'dark');
  }, []);

  useEffect(() => {
    if (!theme) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        const nextTheme: ThemeMode = event.matches ? 'dark' : 'light';
        setTheme(nextTheme);
        document.documentElement.classList.toggle('dark', nextTheme === 'dark');
      }
    };

    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  if (!theme) {
    return null;
  }

  const isDark = theme === 'dark';

  const handleToggle = () => {
    const nextTheme: ThemeMode = isDark ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.classList.toggle('dark', nextTheme === 'dark');
  };

  const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      aria-pressed={isDark}
      className={cn(
        'fixed bottom-6 left-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border shadow-lg transition-colors duration-200',
        'backdrop-blur supports-[backdrop-filter]:bg-background/80',
        isDark
          ? 'border-primary/50 bg-background/90 text-primary hover:border-primary hover:bg-background'
          : 'border-primary/40 bg-primary text-primary-foreground hover:bg-primary/90 hover:border-primary/60'
      )}
    >
      {isDark ? <MoonStar className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
