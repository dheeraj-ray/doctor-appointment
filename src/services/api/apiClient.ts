import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type InternalAxiosRequestConfig } from 'axios';
import { env } from '@/config/env';
import { storage, storageKeys } from '@/utils/storage';
import type { ApiResponse } from '@/types';

class ApiClient {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: env.apiBaseUrl,
      timeout: 30000,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const tokens = storage.get<{ accessToken: string }>(storageKeys.auth.tokens);
        if (tokens?.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${tokens.accessToken}`;
        }
        return config;
      },
      error => Promise.reject(error)
    );

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async error => {
        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const tokens = storage.get<{ accessToken: string; refreshToken: string }>(storageKeys.auth.tokens);
            if (tokens?.refreshToken) {
              const response = await axios.post<ApiResponse<{ accessToken: string; refreshToken: string }>>(
                `${env.apiBaseUrl}/auth/refresh`,
                { refreshToken: tokens.refreshToken }
              );

              if (response.data.success && response.data.data) {
                storage.set(storageKeys.auth.tokens, response.data.data);
                originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
                return this.client(originalRequest);
              }
            }
          } catch {
            storage.remove(storageKeys.auth.user);
            storage.remove(storageKeys.auth.tokens);
            window.location.href = '/login';
          }
        }

        return Promise.reject(error);
      }
    );
  }

  async get<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.get<ApiResponse<T>>(url, config);
    return response.data;
  }

  async post<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.post<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async put<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.put<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async patch<T>(url: string, data?: unknown, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.patch<ApiResponse<T>>(url, data, config);
    return response.data;
  }

  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
    const response = await this.client.delete<ApiResponse<T>>(url, config);
    return response.data;
  }

  getInstance(): AxiosInstance {
    return this.client;
  }
}

export const apiClient = new ApiClient();