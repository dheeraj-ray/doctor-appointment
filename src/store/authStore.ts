import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { storage, storageKeys } from '@/utils/storage';
import type { User, UserRole, AuthTokens } from '@/types';
import { mockAuthService } from '@/services/mock/authService';

interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (email: string, password: string, rememberMe?: boolean) => Promise<void>;
  register: (data: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    confirmPassword: string;
    dateOfBirth: string;
    gender: 'MALE' | 'FEMALE' | 'OTHER';
    role?: UserRole;
  }) => Promise<void>;
  logout: () => Promise<void>;
  refreshSession: () => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  clearError: () => void;
  setLoading: (loading: boolean) => void;
  hydrate: () => Promise<void>;
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

export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set, get) => ({
      user: null,
      tokens: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      login: async (email: string, password: string, rememberMe?: boolean) => {
        set({ isLoading: true, error: null });
        try {
          const response = await mockAuthService.login({ email, password, rememberMe });
          if (response.success && response.data) {
            set({
              user: response.data.user,
              tokens: response.data.tokens,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              error: response.error?.message || 'Login failed',
              isLoading: false,
            });
            throw new Error(response.error?.message || 'Login failed');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      register: async (data) => {
        set({ isLoading: true, error: null });
        try {
          const response = await mockAuthService.register(data);
          if (response.success && response.data) {
            set({
              user: response.data.user,
              tokens: response.data.tokens,
              isAuthenticated: true,
              isLoading: false,
            });
          } else {
            set({
              error: response.error?.message || 'Registration failed',
              isLoading: false,
            });
            throw new Error(response.error?.message || 'Registration failed');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          await mockAuthService.logout();
        } catch {
        } finally {
          set({
            user: null,
            tokens: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },

      refreshSession: async () => {
        const { tokens } = get();
        if (!tokens?.refreshToken) {
          return;
        }
        try {
          const response = await mockAuthService.refreshToken(tokens.refreshToken);
          if (response.success && response.data) {
            set({ tokens: response.data });
          } else {
            get().logout();
          }
        } catch {
          get().logout();
        }
      },

      updateProfile: async (updates) => {
        const { user } = get();
        if (!user) return;
        set({ isLoading: true });
        try {
          const response = await mockAuthService.updateProfile(user.id, updates);
          if (response.success && response.data) {
            set({ user: response.data, isLoading: false });
          } else {
            set({ error: response.error?.message || 'Update failed', isLoading: false });
            throw new Error(response.error?.message || 'Update failed');
          }
        } catch (error) {
          set({ isLoading: false });
          throw error;
        }
      },

      clearError: () => set({ error: null }),

      setLoading: (loading: boolean) => set({ isLoading: loading }),

      hydrate: async () => {
        const { tokens } = get();
        if (tokens?.accessToken) {
          try {
            await get().refreshSession();
          } catch {
            get().logout();
          }
        }
      },
    }),
    {
      name: storageKeys.auth.tokens,
      storage: createJSONStorage(() => customStorage),
      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
        isAuthenticated: state.isAuthenticated,
      }),
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hydrate();
        }
      },
    }
  )
);