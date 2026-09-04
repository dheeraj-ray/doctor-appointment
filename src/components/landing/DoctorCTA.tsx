import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Stethoscope, UserPlus, Shield, Clock, DollarSign, BarChart3 } from 'lucide-react';

const doctorBenefits = [
  { icon: UserPlus, title: 'New Patients', description: 'Fill your schedule with patients actively seeking care' },
  { icon: Shield, title: 'Verified Profile', description: 'Build trust with verified credentials and reviews' },
  { icon: Clock, title: 'Flexible Hours', description: 'Set your own availability for in-person and video visits' },
  { icon: DollarSign, title: 'Transparent Earnings', description: 'Clear pricing with weekly direct deposits' },
  { icon: BarChart3, title: 'Practice Insights', description: 'Analytics to grow and optimize your practice' },
  { icon: Stethoscope, title: 'Clinical Tools', description: 'E-prescriptions, notes, and patient messaging built-in' },
];

export function DoctorCTA() {
  return (
    <section className="py-20 lg:py-32 bg-primary-600 relative overflow-hidden" aria-labelledby="doctor-cta-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-primary-400)_0%,_transparent_70%)]" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-white/[0.03]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium mb-6">
              <Stethoscope className="h-4 w-4" aria-hidden="true" />
              <span>For Healthcare Providers</span>
            </div>

            <h2 id="doctor-cta-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Are You a Doctor?
              <br />
              <span className="text-primary-100">Grow Your Practice With Us</span>
            </h2>

            <p className="text-lg text-primary-100 mb-8 max-w-xl">
              Join 1,200+ verified providers who trust MediCare to connect them with patients, streamline their practice, and grow their revenue.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register?role=doctor">
                <Button variant="secondary" size="lg" leftIcon={<UserPlus className="h-5 w-5" />} className="w-full sm:w-auto">
                  Join as a Doctor
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 grid grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            {doctorBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-white mb-4">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-sm text-primary-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}