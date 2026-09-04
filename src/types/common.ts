export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: Record<string, unknown>;
  };
  meta?: {
    timestamp: string;
    requestId: string;
  };
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNext: boolean;
    hasPrev: boolean;
  };
}

export interface PaginationParams {
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface FilterParams extends PaginationParams {
  search?: string;
  [key: string]: unknown;
}

export interface SelectOption<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export type LoadingState = 'idle' | 'loading' | 'success' | 'error';

export interface BaseEntity {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type WithoutId<T> = Omit<T, 'id'>;
export type WithoutTimestamps<T> = Omit<T, 'createdAt' | 'updatedAt'>;
export type CreateDTO<T> = WithoutId<WithoutTimestamps<T>>;
export type UpdateDTO<T> = Partial<WithoutId<T>>;