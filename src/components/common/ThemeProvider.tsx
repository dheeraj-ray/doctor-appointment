import { useEffect } from 'react';
import { useAppStore } from '@/store/appStore';
import type { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { initializeTheme, resolvedTheme } = useAppStore();

  useEffect(() => {
    initializeTheme();
  }, [initializeTheme]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', resolvedTheme === 'dark');
  }, [resolvedTheme]);

  return <>{children}</>;
}