'use client';

import { useEffect, useState } from 'react';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Verificar el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Si no hay tema guardado, usar la preferencia del sistema
    if (!savedTheme) {
      const theme = prefersDark ? 'dark' : 'light';
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    } else {
      // Aplicar el tema guardado
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }
    
    setMounted(true);
  }, []);

  // Evitar renderizado hasta que el tema esté inicializado
  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return <>{children}</>;
} 