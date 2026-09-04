import { cn } from '@/utils/cn';

const features = [
  {
    title: 'Verified Doctors',
    description: 'Every doctor on our platform undergoes rigorous credential verification, background checks, and license validation.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-primary-500',
    bgColor: 'bg-primary-100 dark:bg-primary-900/30',
  },
  {
    title: 'Easy Booking',
    description: 'Book appointments in seconds with real-time availability. No phone calls, no hold times, no hassle.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: 'text-secondary-500',
    bgColor: 'bg-secondary-100 dark:bg-secondary-900/30',
  },
  {
    title: 'Secure Payments',
    description: 'End-to-end encryption for all transactions. Multiple payment options with transparent pricing and no hidden fees.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'text-success-500',
    bgColor: 'bg-success-100 dark:bg-success-900/30',
  },
  {
    title: 'Digital Prescriptions',
    description: 'Receive e-prescriptions sent directly to your preferred pharmacy. Refill requests and medication history in one place.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'text-warning-500',
    bgColor: 'bg-warning-100 dark:bg-warning-900/30',
  },
  {
    title: 'Appointment Reminders',
    description: 'Smart SMS and email reminders 24 hours and 1 hour before your visit. Never miss an appointment again.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    color: 'text-info-500',
    bgColor: 'bg-info-100 dark:bg-info-900/30',
  },
  {
    title: 'Medical Records',
    description: 'Secure, centralized access to your health records, test results, and visit summaries. Share with providers instantly.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: 'text-purple-500',
    bgColor: 'bg-purple-100 dark:bg-purple-900/30',
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-surface border-y border-border" aria-labelledby="why-choose-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Why Choose MediCare?
          </h2>
          <p className="text-lg text-text-secondary">
            We\'re building the healthcare experience you deserve — transparent, accessible, and patient-first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-xl transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                'inline-flex items-center justify-center w-16 h-16 rounded-xl mb-5 transition-all duration-300 group-hover:scale-110',
                feature.bgColor,
                feature.color
              )}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}