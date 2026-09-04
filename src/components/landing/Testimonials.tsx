import { useState, useCallback } from 'react';
import { cn } from '@/utils/cn';
import { Avatar } from '@/components/ui/Avatar';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Maria Gonzalez',
    role: 'Marketing Director',
    location: 'San Francisco, CA',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    text: 'Finding a specialist used to take weeks of calling offices. With MediCare, I booked a cardiology appointment for the next day. The video visit was seamless, and the doctor was incredibly thorough. This is how healthcare should work.',
    condition: 'Heart palpitations',
    doctor: 'Dr. Sarah Mitchell',
  },
  {
    id: 2,
    name: 'James Thompson',
    role: 'Software Engineer',
    location: 'Austin, TX',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    text: 'My daughter needed a pediatrician urgently after we moved. MediCare showed me doctors accepting new patients near our home, with real reviews from parents. We had an appointment within 24 hours. The peace of mind is priceless.',
    condition: 'New patient visit',
    doctor: 'Dr. Emily Rodriguez',
  },
  {
    id: 3,
    name: 'Priya Patel',
    role: 'Small Business Owner',
    location: 'Chicago, IL',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    text: 'As someone managing a chronic condition, I see multiple specialists. MediCare keeps all my records, prescriptions, and appointments in one place. The reminders mean I never miss a visit, and my doctors can coordinate care effortlessly.',
    condition: 'Diabetes management',
    doctor: 'Multiple specialists',
  },
  {
    id: 4,
    name: 'Robert Kim',
    role: 'Retired Teacher',
    location: 'Seattle, WA',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    text: 'I was hesitant about video visits at 72, but MediCare made it so simple. My orthopedist walked me through knee exercises in real-time, and the prescription was sent to my pharmacy instantly. No driving in traffic, no waiting rooms.',
    condition: 'Knee osteoarthritis',
    doctor: 'Dr. Michael Okafor',
  },
  {
    id: 5,
    name: 'Aisha Williams',
    role: 'Nurse Practitioner',
    location: 'Boston, MA',
    avatar: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop&crop=face',
    rating: 5,
    text: 'Even as a healthcare professional, I appreciate how MediCare streamlines everything. The transparent pricing, verified credentials, and integrated records save me hours. It\'s the platform I recommend to all my patients.',
    condition: 'Annual wellness check',
    doctor: 'Dr. Priya Sharma',
  },
  {
    id: 6,
    name: 'David Chen',
    role: 'Graduate Student',
    location: 'New York, NY',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
    rating: 4,
    text: 'Needed a dermatologist for a skin concern. The search filters let me find someone who accepted my student insurance and had evening hours. Booked a video consult same day. Professional, affordable, and convenient.',
    condition: 'Skin condition',
    doctor: 'Dr. James Chen',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - itemsPerView + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - itemsPerView + 1)) % (testimonials.length - itemsPerView + 1));
  }, []);

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-20 lg:py-32 bg-surface border-y border-border" aria-labelledby="testimonials-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Trusted by Patients Everywhere
          </h2>
          <p className="text-lg text-text-secondary">
            Real stories from people who found the right care through MediCare.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <article
                key={testimonial.id}
                className="bg-background border border-border rounded-2xl p-6 lg:p-8 hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        'h-5 w-5',
                        i < testimonial.rating
                          ? 'fill-current text-warning-500'
                          : 'text-border dark:text-border-strong'
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="text-text-secondary mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>

                <div className="border-t border-border pt-4">
                  <div className="flex items-center gap-4">
                    <Avatar
                      src={testimonial.avatar}
                      name={testimonial.name}
                      size="md"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">{testimonial.name}</p>
                      <p className="text-sm text-text-muted">{testimonial.role} • {testimonial.location}</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-text-muted">
                      Treated for: <span className="font-medium text-text-primary">{testimonial.condition}</span>
                    </p>
                    <p className="text-sm text-text-muted mt-1">
                      Doctor: <span className="font-medium text-text-primary">{testimonial.doctor}</span>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {testimonials.length > itemsPerView && (
            <div className="flex justify-center gap-3 mt-10">
              <button
                onClick={prev}
                className="p-3 rounded-full bg-surface border border-border text-text-secondary hover:bg-surface-hover hover:text-text-primary hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <div className="flex items-center gap-1.5">
                {Array.from({ length: testimonials.length - itemsPerView + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={cn(
                      'w-2.5 h-2.5 rounded-full transition-all duration-200',
                      i === currentIndex
                        ? 'bg-primary-600 w-8'
                        : 'bg-border hover:bg-border-strong'
                    )}
                    aria-label={`Go to testimonial group ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="p-3 rounded-full bg-surface border border-border text-text-secondary hover:bg-surface-hover hover:text-text-primary hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-200"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary">
            <strong>25,000+</strong> verified reviews with an average rating of <strong>4.9/5</strong>
          </p>
        </div>
      </div>
    </section>
  );
}