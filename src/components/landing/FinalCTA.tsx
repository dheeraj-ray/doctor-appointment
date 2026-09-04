import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { HeartPulse, Shield, Users, Award } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 lg:py-32 bg-background relative overflow-hidden" aria-labelledby="final-cta-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-secondary-50/50 dark:from-primary-900/10 dark:via-transparent dark:to-secondary-900/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative bg-surface border border-border rounded-3xl p-8 lg:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-secondary-500/5 dark:from-primary-500/10 dark:to-secondary-500/10" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" aria-hidden="true" />

          <div className="relative max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-6 dark:bg-primary-900/30 dark:text-primary-300 animate-fade-in-up">
              <HeartPulse className="h-4 w-4" aria-hidden="true" />
              <span>Your health journey starts here</span>
            </div>

            <h2 id="final-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-6 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
              Your Health Deserves
              <br />
              <span className="text-primary-600 dark:text-primary-400">the Right Care</span>
            </h2>

            <p className="text-lg text-text-secondary mb-10 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              Join 50,000+ patients who trust MediCare for their healthcare needs. Find the perfect doctor, book instantly, and manage your health with confidence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <Link to="/doctors">
                <Button size="xl" leftIcon={<Users className="h-5 w-5" />} className="w-full sm:w-auto">
                  Find Your Doctor
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  See How It Works
                </Button>
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {[
                { icon: Users, label: '50,000+', desc: 'Patients served' },
                { icon: Shield, label: '1,200+', desc: 'Verified doctors' },
                { icon: Award, label: '4.9★', desc: 'Average rating' },
                { icon: HeartPulse, label: '30+', desc: 'Specialties' },
              ].map((stat) => (
                <div key={stat.label} className="p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400 mx-auto mb-3">
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="text-2xl font-bold text-text-primary">{stat.label}</div>
                  <div className="text-sm text-text-muted">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}