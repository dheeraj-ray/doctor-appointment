import { randomDelay } from '@/utils/delay';
import { storage, storageKeys } from '@/utils/storage';
import type { User, UserRole } from '@/types';

interface MockDatabase {
  users: User[];
}

const SEED_USERS: User[] = [
  {
    id: 'user-patient-1',
    email: 'patient@example.com',
    firstName: 'Rahul',
    lastName: 'Sharma',
    phone: '+91 98765 43210',
    dateOfBirth: '1990-05-15',
    gender: 'MALE',
    role: 'PATIENT',
    avatarUrl: undefined,
    isVerified: true,
    isActive: true,
    createdAt: '2025-01-15T10:30:00Z',
    updatedAt: '2025-01-15T10:30:00Z',
  },
  {
    id: 'user-doctor-1',
    email: 'doctor@example.com',
    firstName: 'Priya',
    lastName: 'Mehta',
    phone: '+91 98765 43211',
    dateOfBirth: '1985-03-22',
    gender: 'FEMALE',
    role: 'DOCTOR',
    avatarUrl: undefined,
    isVerified: true,
    isActive: true,
    createdAt: '2025-01-10T09:00:00Z',
    updatedAt: '2025-01-10T09:00:00Z',
  },
  {
    id: 'user-admin-1',
    email: 'admin@example.com',
    firstName: 'Admin',
    lastName: 'User',
    phone: '+91 98765 43212',
    role: 'ADMIN',
    avatarUrl: undefined,
    isVerified: true,
    isActive: true,
    createdAt: '2025-01-01T08:00:00Z',
    updatedAt: '2025-01-01T08:00:00Z',
  },
];

const DB_STORAGE_KEY = 'mock:database';

function loadDatabase(): MockDatabase {
  const stored = storage.get<MockDatabase>(DB_STORAGE_KEY);
  if (stored) {
    return stored;
  }
  const initialDb: MockDatabase = {
    users: [...SEED_USERS],
  };
  storage.set(DB_STORAGE_KEY, initialDb);
  return initialDb;
}

function saveDatabase(db: MockDatabase): void {
  storage.set(DB_STORAGE_KEY, db);
}

let dbCache: MockDatabase | null = null;

function getDb(): MockDatabase {
  if (!dbCache) {
    dbCache = loadDatabase();
  }
  return dbCache;
}

function invalidateCache(): void {
  dbCache = null;
}

export const mockDatabase = {
  get users(): User[] {
    return getDb().users;
  },

  async findUserByEmail(email: string): Promise<User | undefined> {
    await randomDelay(100, 300);
    return getDb().users.find(u => u.email.toLowerCase() === email.toLowerCase());
  },

  async findUserById(id: string): Promise<User | undefined> {
    await randomDelay(100, 300);
    return getDb().users.find(u => u.id === id);
  },

  async createUser(user: User): Promise<User> {
    await randomDelay(300, 600);
    const db = getDb();
    db.users.push(user);
    saveDatabase(db);
    invalidateCache();
    return user;
  },

  async updateUser(id: string, updates: Partial<User>): Promise<User | undefined> {
    await randomDelay(300, 600);
    const db = getDb();
    const index = db.users.findIndex(u => u.id === id);
    if (index === -1) return undefined;
    db.users[index] = { ...db.users[index], ...updates, updatedAt: new Date().toISOString() };
    saveDatabase(db);
    invalidateCache();
    return db.users[index];
  },

  async deleteUser(id: string): Promise<boolean> {
    await randomDelay(300, 600);
    const db = getDb();
    const initialLength = db.users.length;
    db.users = db.users.filter(u => u.id !== id);
    saveDatabase(db);
    invalidateCache();
    return db.users.length < initialLength;
  },

  async getUsersByRole(role: UserRole): Promise<User[]> {
    await randomDelay(100, 300);
    return getDb().users.filter(u => u.role === role);
  },

  reset(): void {
    const initialDb: MockDatabase = { users: [...SEED_USERS] };
    saveDatabase(initialDb);
    invalidateCache();
  },
};