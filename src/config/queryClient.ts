import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 0,
    },
  },
});

export const queryKeys = {
  auth: {
    user: ['auth', 'user'] as const,
    session: ['auth', 'session'] as const,
  },
  doctors: {
    all: ['doctors'] as const,
    list: (filters?: Record<string, unknown>) => ['doctors', 'list', filters] as const,
    detail: (id: string) => ['doctors', 'detail', id] as const,
    availability: (doctorId: string, date: string) => ['doctors', 'availability', doctorId, date] as const,
  },
  appointments: {
    all: ['appointments'] as const,
    list: (filters?: Record<string, unknown>) => ['appointments', 'list', filters] as const,
    detail: (id: string) => ['appointments', 'detail', id] as const,
    upcoming: (userId: string) => ['appointments', 'upcoming', userId] as const,
  },
  patients: {
    all: ['patients'] as const,
    list: (filters?: Record<string, unknown>) => ['patients', 'list', filters] as const,
    detail: (id: string) => ['patients', 'detail', id] as const,
  },
  notifications: {
    all: ['notifications'] as const,
    list: (userId: string, filters?: Record<string, unknown>) => ['notifications', 'list', userId, filters] as const,
    unreadCount: (userId: string) => ['notifications', 'unread', userId] as const,
  },
  medicalRecords: {
    all: ['medical-records'] as const,
    list: (patientId: string, filters?: Record<string, unknown>) => ['medical-records', 'list', patientId, filters] as const,
  },
  prescriptions: {
    all: ['prescriptions'] as const,
    list: (patientId: string, filters?: Record<string, unknown>) => ['prescriptions', 'list', patientId, filters] as const,
    detail: (id: string) => ['prescriptions', 'detail', id] as const,
  },
  reviews: {
    all: ['reviews'] as const,
    list: (doctorId: string, filters?: Record<string, unknown>) => ['reviews', 'list', doctorId, filters] as const,
  },
  payments: {
    all: ['payments'] as const,
    list: (filters?: Record<string, unknown>) => ['payments', 'list', filters] as const,
    detail: (id: string) => ['payments', 'detail', id] as const,
  },
  dashboard: {
    patient: (userId: string) => ['dashboard', 'patient', userId] as const,
    doctor: (userId: string) => ['dashboard', 'doctor', userId] as const,
    admin: ['dashboard', 'admin'] as const,
  },
  specializations: {
    all: ['specializations'] as const,
  },
  clinics: {
    all: ['clinics'] as const,
    detail: (id: string) => ['clinics', 'detail', id] as const,
  },
} as const;