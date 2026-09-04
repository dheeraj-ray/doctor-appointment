import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage, storageKeys } from '@/utils/storage';

export type ThemeMode = 'light' | 'dark' | 'system';

interface AppState {
  theme: ThemeMode;
  resolvedTheme: 'light' | 'dark';
  sidebarOpen: Record<string, boolean>;
  mobileMenuOpen: boolean;
  isOnline: boolean;
}

interface AppActions {
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  initializeTheme: () => void;
  setSidebarOpen: (key: string, open: boolean) => void;
  toggleSidebar: (key: string) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setOnlineStatus: (online: boolean) => void;
}

const customStorage = {
  getItem: (name: string): string | null => {
    const value = storage.get<string>(name);
    return value ?? null;
  },
  setItem: (name: string, value: string): void => {
    storage.set(name, value);
  },
  removeItem: (name: string): void => {
    storage.remove(name);
  },
};

const THEME_STORAGE_KEY = storageKeys.theme;

function getSystemTheme(): 'light' | 'dark' {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
}

function resolveTheme(theme: ThemeMode): 'light' | 'dark' {
  if (theme === 'system') {
    return getSystemTheme();
  }
  return theme;
}

function applyTheme(theme: 'light' | 'dark'): void {
  if (typeof document !== 'undefined') {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set, get) => ({
      theme: 'system',
      resolvedTheme: 'light',
      sidebarOpen: {
        patient: true,
        doctor: true,
        admin: true,
      },
      mobileMenuOpen: false,
      isOnline: true,

      setTheme: (theme: ThemeMode) => {
        const resolved = resolveTheme(theme);
        applyTheme(resolved);
        set({ theme, resolvedTheme: resolved });
      },

      toggleTheme: () => {
        const { theme } = get();
        const nextTheme: ThemeMode = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
        get().setTheme(nextTheme);
      },

      initializeTheme: () => {
        const { theme } = get();
        const resolved = resolveTheme(theme);
        applyTheme(resolved);
        set({ resolvedTheme: resolved });

        if (typeof window !== 'undefined') {
          const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
          mediaQuery.addEventListener('change', (e) => {
            const { theme: currentTheme } = get();
            if (currentTheme === 'system') {
              const resolved = e.matches ? 'dark' : 'light';
              applyTheme(resolved);
              set({ resolvedTheme: resolved });
            }
          });
        }
      },

      setSidebarOpen: (key: string, open: boolean) => {
        set((state) => ({
          sidebarOpen: { ...state.sidebarOpen, [key]: open },
        }));
      },

      toggleSidebar: (key: string) => {
        set((state) => ({
          sidebarOpen: { ...state.sidebarOpen, [key]: !state.sidebarOpen[key] },
        }));
      },

      setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),

      setOnlineStatus: (online: boolean) => set({ isOnline: online }),
    }),
    {
      name: THEME_STORAGE_KEY,
      storage: createJSONStorage(() => customStorage),
      partialize: (state) => ({
        theme: state.theme,
        sidebarOpen: state.sidebarOpen,
      }),
    }
  )
);