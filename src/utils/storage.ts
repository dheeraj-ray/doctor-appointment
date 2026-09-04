const STORAGE_PREFIX = 'da:';
const STORAGE_VERSION = '1';

function getKey(key: string): string {
  return `${STORAGE_PREFIX}v${STORAGE_VERSION}:${key}`;
}

function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}

export const storage = {
  get<T>(key: string, defaultValue?: T): T | undefined {
    if (!isStorageAvailable()) {
      return defaultValue;
    }
    try {
      const item = localStorage.getItem(getKey(key));
      if (item === null) {
        return defaultValue;
      }
      return JSON.parse(item) as T;
    } catch {
      return defaultValue;
    }
  },

  set<T>(key: string, value: T): boolean {
    if (!isStorageAvailable()) {
      return false;
    }
    try {
      localStorage.setItem(getKey(key), JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove(key: string): boolean {
    if (!isStorageAvailable()) {
      return false;
    }
    try {
      localStorage.removeItem(getKey(key));
      return true;
    } catch {
      return false;
    }
  },

  clear(): boolean {
    if (!isStorageAvailable()) {
      return false;
    }
    try {
      const keys = Object.keys(localStorage).filter(k => k.startsWith(`${STORAGE_PREFIX}v${STORAGE_VERSION}:`));
      keys.forEach(key => localStorage.removeItem(key));
      return true;
    } catch {
      return false;
    }
  },

  has(key: string): boolean {
    if (!isStorageAvailable()) {
      return false;
    }
    return localStorage.getItem(getKey(key)) !== null;
  },

  getAllKeys(): string[] {
    if (!isStorageAvailable()) {
      return [];
    }
    return Object.keys(localStorage)
      .filter(k => k.startsWith(`${STORAGE_PREFIX}v${STORAGE_VERSION}:`))
      .map(k => k.replace(`${STORAGE_PREFIX}v${STORAGE_VERSION}:`, ''));
  },
};

export const storageKeys = {
  auth: {
    user: 'auth:user',
    tokens: 'auth:tokens',
    refreshToken: 'auth:refreshToken',
  },
  theme: 'app:theme',
  sidebar: {
    patient: 'sidebar:patient',
    doctor: 'sidebar:doctor',
    admin: 'sidebar:admin',
  },
  appointments: 'data:appointments',
  notifications: 'data:notifications',
  doctorAvailability: 'data:doctorAvailability',
} as const;