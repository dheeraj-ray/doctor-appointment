export type ApiMode = 'mock' | 'real';

export interface EnvConfig {
  apiMode: ApiMode;
  apiBaseUrl: string;
  appName: string;
  appVersion: string;
}

function getEnvConfig(): EnvConfig {
  const mode = (import.meta.env.VITE_API_MODE as ApiMode) || 'mock';
  const baseUrl = import.meta.env.VITE_API_BASE_URL || '/api';

  return {
    apiMode: mode,
    apiBaseUrl: baseUrl,
    appName: import.meta.env.VITE_APP_NAME || 'Doctor Appointment',
    appVersion: import.meta.env.VITE_APP_VERSION || '1.0.0',
  };
}

export const env = getEnvConfig();

export function isMockMode(): boolean {
  return env.apiMode === 'mock';
}

export function isRealApiMode(): boolean {
  return env.apiMode === 'real';
}