'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check stored theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // If no stored theme, fall back to system preference
    if (!savedTheme) {
      const theme = prefersDark ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } else {
      // Apply stored theme
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    
    setMounted(true);
  }, []);

  // Avoid rendering until theme initialization finishes
  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return <>{children}</>;
} 
