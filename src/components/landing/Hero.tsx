import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import { Search, MapPin, Stethoscope, Users, Award, Star } from 'lucide-react';
import type { SelectOption } from '@/components/ui/Select';

const specialties: SelectOption[] = [
  { value: '', label: 'All Specialties' },
  { value: 'cardiology', label: 'Cardiology' },
  { value: 'dermatology', label: 'Dermatology' },
  { value: 'dentistry', label: 'Dentistry' },
  { value: 'pediatrics', label: 'Pediatrics' },
  { value: 'neurology', label: 'Neurology' },
  { value: 'orthopedics', label: 'Orthopedics' },
  { value: 'gynecology', label: 'Gynecology' },
  { value: 'general', label: 'General Medicine' },
  { value: 'psychiatry', label: 'Psychiatry' },
  { value: 'ent', label: 'ENT' },
  { value: 'ophthalmology', label: 'Ophthalmology' },
];

const popularSpecialties = [
  { name: 'Cardiology', icon: '❤️', href: '/doctors?specialty=cardiology' },
  { name: 'Dermatology', icon: '🩺', href: '/doctors?specialty=dermatology' },
  { name: 'Dentistry', icon: '🦷', href: '/doctors?specialty=dentistry' },
  { name: 'Pediatrics', icon: '👶', href: '/doctors?specialty=pediatrics' },
  { name: 'Neurology', icon: '🧠', href: '/doctors?specialty=neurology' },
  { name: 'Orthopedics', icon: '🦴', href: '/doctors?specialty=orthopedics' },
];

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-18 overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-white dark:from-primary-900/20 dark:via-background dark:to-background"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-100)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-900/30)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-secondary-100)_0%,_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-secondary-900/30)_0%,_transparent_70%)]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="max-w-2xl lg:max-w-none animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 dark:bg-primary-900/30 dark:text-primary-300 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
              </span>
              Accepting new patients • Video visits available
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              Better Healthcare Starts With
              <br />
              <span className="text-primary-600 dark:text-primary-400">the Right Doctor</span>
            </h1>

            <p className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              Find trusted specialists, book appointments instantly, and manage your health journey — all in one place. Your care, simplified.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              <Link to="/doctors">
                <Button size="lg" leftIcon={<Search className="h-5 w-5" />} className="w-full sm:w-auto">
                  Find a Doctor
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  How It Works
                  <span className="ml-2" aria-hidden="true">→</span>
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-text-muted animate-fade-in-up" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary-500" aria-hidden="true" />
                <span>50,000+ patients served</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary-500" aria-hidden="true" />
                <span>1,200+ verified doctors</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-warning-500" aria-hidden="true" />
                <span>4.9 average rating</span>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <div className="bg-surface border border-border rounded-2xl p-6 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 px-3 py-1 bg-surface-hover rounded-md text-center text-xs text-text-muted font-mono">
                    medi.care/search
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label htmlFor="specialty" className="sr-only">
                      Doctor or Specialty
                    </label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" aria-hidden="true" />
                      <Input
                        id="specialty"
                        placeholder="Doctor name, specialty, or condition"
                        leftElement={<Search className="h-5 w-5 text-text-muted" />}
                        className="pl-10"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="sr-only">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-text-muted" aria-hidden="true" />
                      <Input
                        id="location"
                        placeholder="City, ZIP, or 'Near me'"
                        leftElement={<MapPin className="h-5 w-5 text-text-muted" />}
                        className="pl-10"
                        defaultValue="San Francisco, CA"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="specialty-select" className="sr-only">
                      Specialty
                    </label>
                    <Select
                      id="specialty-select"
                      placeholder="All Specialties"
                      options={specialties}
                      leftIcon={<Stethoscope className="h-5 w-5 text-text-muted" />}
                    />
                  </div>

                  <Link to="/doctors">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      fullWidth
                      leftIcon={<Search className="h-5 w-5" />}
                      className="mt-2"
                    >
                      Search Doctors
                    </Button>
                  </Link>
                </form>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-text-muted mb-3">Popular searches:</p>
                  <div className="flex flex-wrap gap-2">
                    {popularSpecialties.map((spec) => (
                      <Link
                        key={spec.name}
                        to={spec.href}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-text-secondary bg-surface-hover rounded-full hover:bg-primary-50 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors"
                      >
                        <span aria-hidden="true">{spec.icon}</span>
                        {spec.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow" aria-hidden="true">
        <svg className="w-6 h-6 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}