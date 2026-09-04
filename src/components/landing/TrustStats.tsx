import { Users, UserCheck, Stethoscope, Star } from 'lucide-react';

const stats = [
  {
    value: '50,000+',
    label: 'Happy Patients',
    icon: Users,
    description: 'Patients who found their ideal doctor',
  },
  {
    value: '1,200+',
    label: 'Verified Doctors',
    icon: UserCheck,
    description: 'Board-certified specialists across 30+ fields',
  },
  {
    value: '30+',
    label: 'Specializations',
    icon: Stethoscope,
    description: 'From cardiology to pediatrics and beyond',
  },
  {
    value: '4.9',
    label: 'Average Rating',
    icon: Star,
    description: 'Based on 25,000+ verified reviews',
  },
];

export function TrustStats() {
  return (
    <section className="py-16 lg:py-24 bg-surface border-y border-border" aria-labelledby="stats-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="stats-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-text-secondary">
            Our numbers speak for themselves. Join the community of patients who trust MediCare for their healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group relative p-6 lg:p-8 rounded-2xl bg-background border border-border hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" aria-hidden="true" />
              <div className="relative flex flex-col items-center text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-lg font-semibold text-text-primary mb-2">
                  {stat.label}
                </div>
                <p className="text-sm text-text-muted">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}