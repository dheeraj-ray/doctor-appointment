export type UserRole = 'PATIENT' | 'DOCTOR' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  dateOfBirth?: string;
  gender?: 'MALE' | 'FEMALE' | 'OTHER';
  role: UserRole;
  avatarUrl?: string;
  isVerified: boolean;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface PatientProfile extends User {
  role: 'PATIENT';
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  preferences?: {
    emailNotifications: boolean;
    smsNotifications: boolean;
    pushNotifications: boolean;
  };
}

export interface DoctorProfile extends User {
  role: 'DOCTOR';
  specialization: string;
  subSpecialization?: string;
  licenseNumber: string;
  yearsOfExperience: number;
  education: Array<{
    degree: string;
    institution: string;
    year: number;
  }>;
  experience: Array<{
    title: string;
    organization: string;
    startDate: string;
    endDate?: string;
    description?: string;
  }>;
  languages: string[];
  consultationFee: number;
  videoConsultationFee: number;
  clinicIds: string[];
  rating: number;
  reviewCount: number;
  isAvailable: boolean;
  bio?: string;
}

export interface AdminProfile extends User {
  role: 'ADMIN';
  permissions: string[];
  department?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  dateOfBirth: string;
  gender: 'MALE' | 'FEMALE' | 'OTHER';
  role?: UserRole;
}

export interface JwtPayload {
  sub: string;
  email: string;
  role: UserRole;
  iat: number;
  exp: number;
}