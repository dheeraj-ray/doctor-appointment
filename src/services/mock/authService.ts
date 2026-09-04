import { randomDelay } from '@/utils/delay';
import { mockDatabase } from './mockDatabase';
import type { User, UserRole, LoginCredentials, RegisterData, AuthTokens, ApiResponse } from '@/types';

function generateTokens(user: User): AuthTokens {
  const accessToken = `mock_access_${user.id}_${Date.now()}`;
  const refreshToken = `mock_refresh_${user.id}_${Date.now()}`;
  return {
    accessToken,
    refreshToken,
    expiresIn: 3600,
  };
}

function createApiResponse<T>(data: T): ApiResponse<T> {
  return {
    success: true,
    data,
    meta: {
      timestamp: new Date().toISOString(),
      requestId: `req_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    },
  };
}

function createApiError(code: string, message: string): ApiResponse<never> {
  return {
    success: false,
    error: { code, message },
    meta: {
      timestamp: new Date().toISOString(),
      requestId: `req_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
    },
  };
}

export const mockAuthService = {
  async login(credentials: LoginCredentials): Promise<ApiResponse<{ user: User; tokens: AuthTokens }>> {
    await randomDelay(500, 1000);

    const user = await mockDatabase.findUserByEmail(credentials.email);
    if (!user) {
      return createApiError('INVALID_CREDENTIALS', 'Invalid email or password');
    }

    if (!user.isActive) {
      return createApiError('ACCOUNT_DISABLED', 'This account has been disabled');
    }

    const expectedPassword = '123456';
    if (credentials.password !== expectedPassword) {
      return createApiError('INVALID_CREDENTIALS', 'Invalid email or password');
    }

    const tokens = generateTokens(user);
    const { password: _, ...userWithoutPassword } = user as User & { password?: string };

    return createApiResponse({ user: userWithoutPassword, tokens });
  },

  async register(data: RegisterData): Promise<ApiResponse<{ user: User; tokens: AuthTokens }>> {
    await randomDelay(800, 1500);

    const existingUser = await mockDatabase.findUserByEmail(data.email);
    if (existingUser) {
      return createApiError('EMAIL_EXISTS', 'An account with this email already exists');
    }

    const role: UserRole = data.role || 'PATIENT';
    const newUser: User = {
      id: `user-${role.toLowerCase()}-${Date.now()}`,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      phone: data.phone,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      role,
      avatarUrl: undefined,
      isVerified: false,
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await mockDatabase.createUser(newUser);
    const tokens = generateTokens(newUser);
    const { password: _, ...userWithoutPassword } = newUser as User & { password?: string };

    return createApiResponse({ user: userWithoutPassword, tokens });
  },

  async logout(): Promise<ApiResponse<void>> {
    await randomDelay(200, 400);
    return createApiResponse(undefined);
  },

  async refreshToken(refreshToken: string): Promise<ApiResponse<AuthTokens>> {
    await randomDelay(300, 600);

    if (!refreshToken.startsWith('mock_refresh_')) {
      return createApiError('INVALID_TOKEN', 'Invalid refresh token');
    }

    const userId = refreshToken.split('_')[2];
    const user = await mockDatabase.findUserById(userId);
    if (!user) {
      return createApiError('INVALID_TOKEN', 'Invalid refresh token');
    }

    const tokens = generateTokens(user);
    return createApiResponse(tokens);
  },

  async getCurrentUser(): Promise<ApiResponse<User>> {
    await randomDelay(300, 600);
    return createApiError('NOT_AUTHENTICATED', 'No active session');
  },

  async updateProfile(userId: string, updates: Partial<User>): Promise<ApiResponse<User>> {
    await randomDelay(500, 1000);
    const updated = await mockDatabase.updateUser(userId, updates);
    if (!updated) {
      return createApiError('USER_NOT_FOUND', 'User not found');
    }
    const { password: _, ...userWithoutPassword } = updated as User & { password?: string };
    return createApiResponse(userWithoutPassword);
  },

  async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<ApiResponse<void>> {
    await randomDelay(500, 1000);
    if (currentPassword !== '123456') {
      return createApiError('INVALID_PASSWORD', 'Current password is incorrect');
    }
    return createApiResponse(undefined);
  },

  async requestPasswordReset(email: string): Promise<ApiResponse<void>> {
    await randomDelay(500, 1000);
    const user = await mockDatabase.findUserByEmail(email);
    if (!user) {
      return createApiResponse(undefined);
    }
    return createApiResponse(undefined);
  },

  async resetPassword(token: string, newPassword: string): Promise<ApiResponse<void>> {
    await randomDelay(500, 1000);
    if (!token.startsWith('reset_')) {
      return createApiError('INVALID_TOKEN', 'Invalid or expired reset token');
    }
    return createApiResponse(undefined);
  },
};