# Doctor Appointment Web App

## Goal

Build a modern, responsive Doctor Appointment Web App using React + TypeScript.

There is currently NO backend API.

Use a Mock API / Mock Service layer with realistic data.

Main priority:

- Professional UI/UX
- Responsive design
- Clean architecture
- Working user flows
- Reusable components
- Mock data
- Maximum 10 main pages

---

# Technology

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- TanStack Query
- Zustand
- React Hook Form
- Zod
- Lucide React
- Recharts
- Sonner

---

# Maximum 10 Main Pages

## 1. Website / Home

Route:

/

Sections:

- Header
- Hero
- Doctor Search
- Popular Specializations
- Featured Doctors
- How It Works
- Why Choose Us
- Testimonials
- CTA
- Footer

Header:

- Logo
- Home
- Find Doctors
- About
- Contact
- Login
- Register

The homepage should look like a professional healthcare website.

---

# 2. Login / Register

Route:

/login

This page should handle both login and registration using tabs or a toggle.

Login:

- Email / Phone
- Password
- Remember Me
- Forgot Password
- Login

Register:

- First Name
- Last Name
- Email
- Phone
- Password
- Confirm Password
- Date of Birth
- Gender

Demo accounts:

Patient:

patient@example.com
123456

Doctor:

doctor@example.com
123456

Admin:

admin@example.com
123456

After login redirect according to role.

PATIENT → /patient

DOCTOR → /doctor

ADMIN → /admin

---

# 3. Find Doctors

Route:

/doctors

Features:

- Search doctor
- Search specialization
- Location
- Gender
- Experience
- Consultation fee
- Rating
- Availability
- Consultation type
- Sorting

Doctor card:

- Photo
- Name
- Specialization
- Experience
- Rating
- Location
- Consultation fee
- Availability
- View Profile
- Book Appointment

Doctor details can open in a modal/drawer instead of creating another page.

---

# 4. Patient Dashboard

Route:

/patient

This is the main patient application.

Sections:

Dashboard:

- Welcome message
- Upcoming appointment
- Total appointments
- Completed appointments
- Cancelled appointments
- Recommended doctors

Appointment section:

- Upcoming
- Completed
- Cancelled

Patient profile:

- Personal information
- Phone
- Email
- Address
- Emergency contact

Medical section:

- Medical records
- Prescriptions

Payment section:

- Payment history
- Receipts

Notifications:

- Appointment confirmation
- Appointment reminder
- Payment notification
- Prescription notification

Use tabs/drawers/modals instead of creating separate pages.

---

# 5. Book Appointment

Route:

/booking

Booking should be a multi-step experience.

Step 1:
Doctor

Step 2:
Consultation Type

- In-person
- Video

Step 3:
Date

Step 4:
Time Slot

Step 5:
Patient Details

Step 6:
Booking Summary

Show:

- Doctor
- Date
- Time
- Consultation type
- Consultation fee
- Platform fee
- Discount
- Total

Then continue to payment.

---

# 6. Payment & Confirmation

Route:

/payment

Mock payment only.

Payment methods:

- UPI
- Credit Card
- Debit Card
- Net Banking

Show:

- Payment summary
- Appointment details
- Total amount

Simulate:

- Processing
- Success
- Failed

After successful payment:

Show confirmation:

- Appointment ID
- Doctor
- Date
- Time
- Consultation type
- Amount paid

Buttons:

- View Appointment
- Download Receipt
- Go Dashboard

---

# 7. Doctor Dashboard

Route:

/doctor

Doctor dashboard should contain:

Statistics:

- Today's appointments
- Pending appointments
- Completed appointments
- Revenue

Today's schedule:

- Time
- Patient
- Status
- Consultation type

Doctor can:

- Confirm appointment
- Reject appointment
- Cancel appointment
- Reschedule
- Check-in patient
- Start consultation
- Complete consultation

Patient details can open in a modal.

Doctor profile section:

- Personal information
- Specialization
- Experience
- Education
- Languages
- Consultation fee

Availability:

- Weekly schedule
- Working hours
- Breaks
- Holidays

Prescription:

Doctor can create a prescription after consultation.

---

# 8. Admin Dashboard

Route:

/admin

Dashboard:

Statistics:

- Total doctors
- Total patients
- Today's appointments
- Monthly revenue
- Pending doctors
- Pending payments

Charts:

- Appointments
- Revenue
- Patient growth

Admin management should use tabs:

Doctors:

- Search
- Filter
- Verify
- Activate
- Deactivate
- Edit
- Delete

Patients:

- Search
- Filter
- View
- Activate
- Deactivate

Appointments:

- Search
- Filter
- View
- Cancel
- Update status

Payments:

- Transaction ID
- Patient
- Doctor
- Amount
- Payment status
- Date

---

# 9. Reports & Reviews

Route:

/reports

Admin reports:

- Appointment report
- Revenue report
- Patient growth
- Doctor performance
- Cancellation report

Charts:

- Daily appointments
- Monthly appointments
- Revenue
- New patients
- Doctor performance

Reviews:

- Rating
- Patient
- Doctor
- Review
- Date

Admin can:

- View
- Hide
- Delete review

Use Recharts.

---

# 10. Settings

Route:

/settings

Settings should change according to logged-in role.

General:

- Profile
- Email
- Phone
- Password

Application:

- Light/Dark/System theme
- Notifications

Patient settings:

- Appointment reminders
- Email notifications
- SMS notifications

Doctor settings:

- Availability
- Consultation fee
- Clinic information
- Notifications

Admin settings:

- Application name
- Appointment settings
- Payment settings
- Notification settings

---

# Mock API Architecture

There is NO backend.

Do not put mock data directly inside React pages.

Use:

src/
  services/
    mock/
      mockDatabase.ts
      authService.ts
      doctorService.ts
      appointmentService.ts
      patientService.ts
      paymentService.ts
      notificationService.ts
      prescriptionService.ts
      reviewService.ts

Architecture:

Component
    ↓
React Query
    ↓
Service
    ↓
Mock Database

Later:

Component
    ↓
React Query
    ↓
Service
    ↓
Axios
    ↓
Spring Boot API

The UI should not need major changes when the real backend is introduced.

---

# Mock Data

Create realistic mock data:

- 30 doctors
- 50 patients
- 100 appointments
- 15 specializations
- 50 reviews
- Payment records
- Prescriptions
- Notifications

Do not use:

Doctor 1
Doctor 2
Doctor 3

Use realistic names and information.

---

# Main Appointment Flow

Patient:

Home
 ↓
Find Doctor
 ↓
Select Doctor
 ↓
Book Appointment
 ↓
Select Date
 ↓
Select Time
 ↓
Patient Details
 ↓
Payment
 ↓
Confirmation
 ↓
Patient Dashboard

---

# Doctor Flow

Login
 ↓
Doctor Dashboard
 ↓
Today's Appointments
 ↓
Patient Details
 ↓
Start Consultation
 ↓
Create Prescription
 ↓
Complete Appointment

---

# Admin Flow

Login
 ↓
Admin Dashboard
 ↓
Manage Doctors
 ↓
Manage Patients
 ↓
Manage Appointments
 ↓
Payments
 ↓
Reports
 ↓
Reviews

---

# UI Requirements

The application must be:

- Modern
- Professional
- Healthcare focused
- Responsive
- Mobile friendly
- Desktop friendly
- Accessible

Support:

- Loading skeletons
- Empty states
- Error states
- Toast notifications
- Confirmation dialogs
- Search
- Filtering
- Sorting
- Pagination
- Dark mode
- Responsive tables

Use reusable components.

Avoid creating unnecessary pages.

Use:

- Modal
- Drawer
- Tabs
- Dropdown
- Dialog
- Accordion

to keep the application within 10 main pages.

---

# Important Rules

1. Maximum 10 main pages.
2. Do not create unnecessary routes.
3. Use mock APIs.
4. Do not hardcode data inside pages.
5. Use TypeScript.
6. Use reusable components.
7. Use React Query for API-like data.
8. Use Zustand for authentication/client state.
9. Use React Hook Form + Zod for forms.
10. Make every major button functional.
11. Implement realistic loading states.
12. Implement realistic empty states.
13. Implement error handling.
14. Make all pages responsive.
15. Keep the architecture ready for a future Spring Boot backend.
16. Focus more on UI/UX than backend complexity.
17. Do not implement real payment integration.
18. Do not implement real authentication.
19. Use mock payment and authentication.
20. Keep the application visually consistent.

---

# Development Order

Build in this order:

1. Project setup + design system
2. Website/Home
3. Login/Register
4. Find Doctors
5. Patient Dashboard
6. Booking
7. Payment + Confirmation
8. Doctor Dashboard
9. Admin Dashboard
10. Reports + Settings
11. Final responsive/UI polish

Do not build everything at once.

Complete and test each stage before moving to the next.