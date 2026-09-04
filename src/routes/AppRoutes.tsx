import { createBrowserRouter, Navigate } from 'react-router-dom';
import { PublicLayout } from '@/layouts/PublicLayout';
import { PatientLayout } from '@/layouts/PatientLayout';
import { DoctorLayout } from '@/layouts/DoctorLayout';
import { AdminLayout } from '@/layouts/AdminLayout';
import { ProtectedRoute } from './ProtectedRoute';
import { RoleRoute } from './RoleRoute';
import { NotFoundPage } from '@/pages/public/NotFoundPage';
import { LandingPage } from '@/pages/public/LandingPage';
import { ROUTES } from './paths';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PublicLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <LandingPage /> },
      { path: 'doctors', element: <div>Doctors page - coming soon</div> },
      { path: 'doctors/:id', element: <div>Doctor detail - coming soon</div> },
      { path: 'specializations', element: <div>Specializations - coming soon</div> },
      { path: 'how-it-works', element: <div>How It Works - coming soon</div> },
      { path: 'about', element: <div>About - coming soon</div> },
      { path: 'contact', element: <div>Contact - coming soon</div> },
      { path: 'login', element: <div>Login page - coming soon</div> },
      { path: 'register', element: <div>Register page - coming soon</div> },
      { path: 'forgot-password', element: <div>Forgot password - coming soon</div> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={['PATIENT']}>
          <PatientLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      { path: ROUTES.patient.dashboard, element: <div>Patient Dashboard - coming soon</div> },
      { path: ROUTES.patient.doctors, element: <div>Patient Doctors - coming soon</div> },
      { path: ROUTES.patient.appointments, element: <div>Patient Appointments - coming soon</div> },
      { path: ROUTES.patient.medicalRecords, element: <div>Medical Records - coming soon</div> },
      { path: ROUTES.patient.prescriptions, element: <div>Prescriptions - coming soon</div> },
      { path: ROUTES.patient.payments, element: <div>Payments - coming soon</div> },
      { path: ROUTES.patient.notifications, element: <div>Notifications - coming soon</div> },
      { path: ROUTES.patient.profile, element: <div>Profile - coming soon</div> },
      { path: ROUTES.patient.settings, element: <div>Settings - coming soon</div> },
      { path: ROUTES.patient.booking + '/*', element: <div>Booking flow - coming soon</div> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={['DOCTOR']}>
          <DoctorLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      { path: ROUTES.doctor.dashboard, element: <div>Doctor Dashboard - coming soon</div> },
      { path: ROUTES.doctor.schedule, element: <div>Schedule - coming soon</div> },
      { path: ROUTES.doctor.appointments, element: <div>Appointments - coming soon</div> },
      { path: ROUTES.doctor.patients, element: <div>Patients - coming soon</div> },
      { path: ROUTES.doctor.availability, element: <div>Availability - coming soon</div> },
      { path: ROUTES.doctor.holidays, element: <div>Holidays - coming soon</div> },
      { path: ROUTES.doctor.clinics, element: <div>Clinics - coming soon</div> },
      { path: ROUTES.doctor.profile, element: <div>Profile - coming soon</div> },
      { path: ROUTES.doctor.settings, element: <div>Settings - coming soon</div> },
    ],
  },
  {
    element: (
      <ProtectedRoute>
        <RoleRoute allowedRoles={['ADMIN']}>
          <AdminLayout />
        </RoleRoute>
      </ProtectedRoute>
    ),
    children: [
      { path: ROUTES.admin.dashboard, element: <div>Admin Dashboard - coming soon</div> },
      { path: ROUTES.admin.doctors, element: <div>Admin Doctors - coming soon</div> },
      { path: ROUTES.admin.patients, element: <div>Admin Patients - coming soon</div> },
      { path: ROUTES.admin.appointments, element: <div>Admin Appointments - coming soon</div> },
      { path: ROUTES.admin.specializations, element: <div>Specializations - coming soon</div> },
      { path: ROUTES.admin.payments, element: <div>Payments - coming soon</div> },
      { path: ROUTES.admin.reviews, element: <div>Reviews - coming soon</div> },
      { path: ROUTES.admin.settings, element: <div>Settings - coming soon</div> },
      { path: ROUTES.admin.reports, element: <div>Reports - coming soon</div> },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);