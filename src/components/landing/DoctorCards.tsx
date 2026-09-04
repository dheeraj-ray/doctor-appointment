import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Badge } from '@/components/ui/Badge';
import { Star, MapPin, Clock, Award, Video } from 'lucide-react';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sarah Mitchell',
    specialty: 'Cardiology',
    subSpecialty: 'Interventional Cardiology',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    reviewCount: 247,
    experience: '15',
    location: 'New York, NY',
    fee: 250,
    videoFee: 180,
    availableToday: true,
    languages: ['English', 'Spanish'],
    education: 'Johns Hopkins School of Medicine',
  },
  {
    id: '2',
    name: 'Dr. James Chen',
    specialty: 'Dermatology',
    subSpecialty: 'Cosmetic Dermatology',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    rating: 4.8,
    reviewCount: 189,
    experience: '12',
    location: 'Los Angeles, CA',
    fee: 200,
    videoFee: 150,
    availableToday: false,
    languages: ['English', 'Mandarin'],
    education: 'UCLA David Geffen School of Medicine',
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    subSpecialty: 'Pediatric Cardiology',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    reviewCount: 312,
    experience: '18',
    location: 'Chicago, IL',
    fee: 180,
    videoFee: 130,
    availableToday: true,
    languages: ['English', 'Spanish'],
    education: 'Harvard Medical School',
  },
  {
    id: '4',
    name: 'Dr. Michael Okafor',
    specialty: 'Orthopedics',
    subSpecialty: 'Sports Medicine',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop&crop=face',
    rating: 4.7,
    reviewCount: 156,
    experience: '14',
    location: 'Houston, TX',
    fee: 220,
    videoFee: 160,
    availableToday: true,
    languages: ['English'],
    education: 'Duke University School of Medicine',
  },
  {
    id: '5',
    name: 'Dr. Priya Sharma',
    specialty: 'Neurology',
    subSpecialty: 'Movement Disorders',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
    rating: 4.8,
    reviewCount: 203,
    experience: '16',
    location: 'Boston, MA',
    fee: 280,
    videoFee: 200,
    availableToday: false,
    languages: ['English', 'Hindi', 'Tamil'],
    education: 'Stanford University School of Medicine',
  },
  {
    id: '6',
    name: 'Dr. David Park',
    specialty: 'Dentistry',
    subSpecialty: 'Orthodontics',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
    rating: 4.9,
    reviewCount: 278,
    experience: '11',
    location: 'Seattle, WA',
    fee: 150,
    videoFee: 100,
    availableToday: true,
    languages: ['English', 'Korean'],
    education: 'University of Washington School of Dentistry',
  },
];

export function DoctorCards() {
  return (
    <section className="py-20 lg:py-32 bg-surface" aria-labelledby="doctors-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <h2 id="doctors-heading" className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
              Meet Our Trusted Doctors
            </h2>
            <p className="text-lg text-text-secondary">
              Hand-picked specialists with exceptional credentials and patient reviews
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" leftIcon={<Video className="h-4 w-4" />}>
              Video Visit
            </Button>
            <Button variant="primary">
              In-Person
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {doctors.map((doctor, index) => (
            <article
              key={doctor.id}
              className="group relative bg-background border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {doctor.availableToday && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="success" dot size="sm">
                      Available Today
                    </Badge>
                  </div>
                )}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                  <div className="flex gap-2 justify-center">
                    <Button variant="primary" size="sm" className="w-full sm:w-auto">
                      Book Appointment
                    </Button>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                      View Profile
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-start gap-4">
                  <Avatar
                    src={doctor.image}
                    name={doctor.name}
                    size="lg"
                    className="flex-shrink-0 ring-4 ring-background"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-text-primary truncate">{doctor.name}</h3>
                      <Badge variant="outline" size="sm">{doctor.specialty}</Badge>
                    </div>
                    <p className="text-sm text-text-muted mb-2">{doctor.subSpecialty}</p>
                    <div className="flex items-center gap-3 text-sm text-text-secondary mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-current text-warning-500" aria-hidden="true" />
                        <span className="font-medium">{doctor.rating}</span>
                        <span className="text-text-muted">({doctor.reviewCount})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" aria-hidden="true" />
                        <span>{doctor.experience}+ yrs exp</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" aria-hidden="true" />
                        {doctor.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" aria-hidden="true" />
                        {doctor.languages.join(', ')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                  <div className="text-right">
                    <div className="text-lg font-bold text-text-primary">${doctor.fee}</div>
                    <div className="text-xs text-text-muted">In-person visit</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary-600">${doctor.videoFee}</div>
                    <div className="text-xs text-text-muted">Video consultation</div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" leftIcon={<Star className="h-5 w-5" />}>
            View All Doctors (1,200+)
          </Button>
        </div>
      </div>
    </section>
  );
}