import { Link } from 'react-router-dom';
import { cn } from '@/utils/cn';

const specializations = [
  {
    name: 'Cardiology',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.82 6.82a4.177 4.177 0 010 5.906l-7.42 7.42a4.177 4.177 0 01-5.906 0L2.66 11.23a4.177 4.177 0 010-5.906l7.42-7.42a4.177 4.177 0 015.906 0l7.42 7.42z" />
      </svg>
    ),
    doctorCount: '124',
    description: 'Heart & vascular care',
    color: 'text-red-500',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    hoverColor: 'hover:bg-red-500 hover:text-white',
    href: '/doctors?specialty=cardiology',
  },
  {
    name: 'Dermatology',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    doctorCount: '89',
    description: 'Skin, hair & nail conditions',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    hoverColor: 'hover:bg-purple-500 hover:text-white',
    href: '/doctors?specialty=dermatology',
  },
  {
    name: 'Dentistry',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 14h2m2-2v2m0-2v-2m-2 2H9m2 0H7m4 0v2m0-2h2m-2 0v2m-4-2v2m8 0h-2M3 3h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2z" />
      </svg>
    ),
    doctorCount: '156',
    description: 'Oral health & cosmetic dentistry',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    hoverColor: 'hover:bg-blue-500 hover:text-white',
    href: '/doctors?specialty=dentistry',
  },
  {
    name: 'Pediatrics',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    doctorCount: '112',
    description: 'Child healthcare & development',
    color: 'text-green-500',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    hoverColor: 'hover:bg-green-500 hover:text-white',
    href: '/doctors?specialty=pediatrics',
  },
  {
    name: 'Neurology',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    doctorCount: '67',
    description: 'Brain, spine & nervous system',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
    hoverColor: 'hover:bg-indigo-500 hover:text-white',
    href: '/doctors?specialty=neurology',
  },
  {
    name: 'Orthopedics',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3m0 0l-7 7m7-7l7 7" />
      </svg>
    ),
    doctorCount: '98',
    description: 'Bones, joints & muscles',
    color: 'text-orange-500',
    bgColor: 'bg-orange-50 dark:bg-orange-900/20',
    hoverColor: 'hover:bg-orange-500 hover:text-white',
    href: '/doctors?specialty=orthopedics',
  },
  {
    name: 'Gynecology',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    doctorCount: '103',
    description: 'Women\'s reproductive health',
    color: 'text-pink-500',
    bgColor: 'bg-pink-50 dark:bg-pink-900/20',
    hoverColor: 'hover:bg-pink-500 hover:text-white',
    href: '/doctors?specialty=gynecology',
  },
  {
    name: 'General Medicine',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    doctorCount: '245',
    description: 'Primary care & wellness',
    color: 'text-teal-500',
    bgColor: 'bg-teal-50 dark:bg-teal-900/20',
    hoverColor: 'hover:bg-teal-500 hover:text-white',
    href: '/doctors?specialty=general',
  },
];

export function Specializations() {
  return (
    <section className="py-20 lg:py-32 bg-background" aria-labelledby="specializations-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 id="specializations-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Find Care for Every Need
          </h2>
          <p className="text-lg text-text-secondary">
            Browse our comprehensive range of medical specialties. Each doctor is verified and reviewed by real patients.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 lg:gap-6">
          {specializations.map((spec, index) => (
            <Link
              key={spec.name}
              to={spec.href}
              className={cn(
                'group relative p-6 rounded-2xl border border-border bg-surface transition-all duration-300',
                spec.bgColor,
                spec.hoverColor,
                'hover:shadow-xl hover:-translate-y-1'
              )}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={cn('mb-4 transition-colors duration-300', spec.color)}>
                {spec.icon}
              </div>
              <h3 className="font-semibold text-text-primary group-hover:text-white transition-colors">
                {spec.name}
              </h3>
              <p className="text-sm text-text-muted group-hover:text-primary-100 dark:group-hover:text-primary-900 transition-colors mt-1">
                {spec.doctorCount} doctors
              </p>
              <p className="text-xs text-text-muted group-hover:text-primary-200 dark:group-hover:text-primary-800 transition-colors mt-2">
                {spec.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/specializations">
            <span className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:underline">
              View all specializations
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}