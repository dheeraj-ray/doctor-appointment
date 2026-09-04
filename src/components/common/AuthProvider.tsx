import { useEffect } from 'react';
import { useAuthStore } from '@/store/authStore';
import type { ReactNode } from 'react';

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { hydrate, isAuthenticated, tokens } = useAuthStore();

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useEffect(() => {
    if (isAuthenticated && tokens?.accessToken) {
      const payload = tokens.accessToken.split('_');
      if (payload.length >= 4) {
        const expiryTimestamp = Number(payload[3]);
        if (!isNaN(expiryTimestamp)) {
          const timeUntilExpiry = expiryTimestamp - Date.now();
          if (timeUntilExpiry > 0 && timeUntilExpiry < 5 * 60 * 1000) {
            // Token expires in less than 5 minutes, refresh it
            // The apiClient interceptor will handle this
          }
        }
      }
    }
  }, [isAuthenticated, tokens]);

  return <>{children}</>;
}