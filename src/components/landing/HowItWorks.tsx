const steps = [
  {
    number: '01',
    title: 'Find a Doctor',
    description: 'Search by specialty, location, insurance, or condition. Filter by ratings, availability, and consultation type.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Choose a Time',
    description: 'View real-time availability and pick a slot that fits your schedule. Choose in-person or video visit.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Book Appointment',
    description: 'Fill in your details, add insurance info, and confirm. Get instant confirmation with all appointment details.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Meet Your Doctor',
    description: 'Join your video visit or arrive at the clinic. Receive prescriptions, notes, and follow-up care all in one place.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-background" aria-labelledby="how-it-works-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="how-it-works-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Healthcare Made Simple
          </h2>
          <p className="text-lg text-text-secondary">
            Four easy steps to connect with the right healthcare provider for your needs.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-5 right-5 -translate-y-1/2 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}