export const ROUTES = {
  public: {
    home: '/',
    doctors: '/doctors',
    doctorDetail: (id: string) => `/doctors/${id}`,
    specializations: '/specializations',
    about: '/about',
    contact: '/contact',
    login: '/login',
    register: '/register',
    forgotPassword: '/forgot-password',
  },
  patient: {
    root: '/patient',
    dashboard: '/patient',
    doctors: '/patient/doctors',
    appointments: '/patient/appointments',
    medicalRecords: '/patient/medical-records',
    prescriptions: '/patient/prescriptions',
    payments: '/patient/payments',
    notifications: '/patient/notifications',
    profile: '/patient/profile',
    settings: '/patient/settings',
    booking: '/patient/booking',
  },
  doctor: {
    root: '/doctor',
    dashboard: '/doctor',
    schedule: '/doctor/schedule',
    appointments: '/doctor/appointments',
    patients: '/doctor/patients',
    availability: '/doctor/availability',
    holidays: '/doctor/holidays',
    clinics: '/doctor/clinics',
    profile: '/doctor/profile',
    settings: '/doctor/settings',
  },
  admin: {
    root: '/admin',
    dashboard: '/admin',
    doctors: '/admin/doctors',
    patients: '/admin/patients',
    appointments: '/admin/appointments',
    specializations: '/admin/specializations',
    payments: '/admin/payments',
    reviews: '/admin/reviews',
    settings: '/admin/settings',
    reports: '/admin/reports',
  },
  booking: {
    root: '/booking',
    doctor: '/booking/doctor',
    consultationType: '/booking/consultation-type',
    date: '/booking/date',
    time: '/booking/time',
    patientDetails: '/booking/patient-details',
    summary: '/booking/summary',
    payment: '/booking/payment',
    confirmation: '/booking/confirmation',
  },
  payment: {
    root: '/payment',
    process: '/payment/process',
    success: '/payment/success',
    failed: '/payment/failed',
  },
} as const;

export type PublicRoute = (typeof ROUTES.public)[keyof typeof ROUTES.public];
export type PatientRoute = (typeof ROUTES.patient)[keyof typeof ROUTES.patient];
export type DoctorRoute = (typeof ROUTES.doctor)[keyof typeof ROUTES.doctor];
export type AdminRoute = (typeof ROUTES.admin)[keyof typeof ROUTES.admin];

export function getDashboardRoute(role: 'PATIENT' | 'DOCTOR' | 'ADMIN'): string {
  switch (role) {
    case 'PATIENT':
      return ROUTES.patient.dashboard;
    case 'DOCTOR':
      return ROUTES.doctor.dashboard;
    case 'ADMIN':
      return ROUTES.admin.dashboard;
  }
}

export function getLoginRedirect(role: 'PATIENT' | 'DOCTOR' | 'ADMIN'): string {
  return getDashboardRoute(role);
}