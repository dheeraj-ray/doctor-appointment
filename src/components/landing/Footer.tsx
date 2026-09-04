import { Link } from 'react-router-dom';
import { Stethoscope, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  patient: [
    { label: 'Find Doctors', href: '/doctors' },
    { label: 'Specializations', href: '/specializations' },
    { label: 'Book Appointment', href: '/booking' },
    { label: 'Patient Portal', href: '/patient' },
    { label: 'Medical Records', href: '/patient/medical-records' },
    { label: 'Insurance Accepted', href: '/insurance' },
  ],
  doctor: [
    { label: 'Join as Provider', href: '/register?role=doctor' },
    { label: 'Doctor Dashboard', href: '/doctor' },
    { label: 'Practice Tools', href: '/doctor/tools' },
    { label: 'Telemedicine', href: '/doctor/telemedicine' },
    { label: 'E-Prescriptions', href: '/doctor/prescriptions' },
    { label: 'Analytics', href: '/doctor/analytics' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press & Media', href: '/press' },
    { label: 'Blog', href: '/blog' },
    { label: 'Partnerships', href: '/partnerships' },
    { label: 'Investors', href: '/investors' },
  ],
  support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Accessibility', href: '/accessibility' },
  ],
};

const FacebookIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialLinks = [
  { icon: FacebookIcon, href: 'https://facebook.com', label: 'Facebook' },
  { icon: TwitterIcon, href: 'https://twitter.com', label: 'Twitter' },
  { icon: LinkedinIcon, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: InstagramIcon, href: 'https://instagram.com', label: 'Instagram' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-text-primary text-primary-50 relative overflow-hidden" role="contentinfo">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 via-transparent to-secondary-600/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-6" aria-label="MediCare Home">
              <Stethoscope className="h-10 w-10 text-primary-400" aria-hidden="true" />
              <span>MediCare</span>
            </Link>
            <p className="text-primary-200 mb-6 max-w-xs leading-relaxed">
              Making healthcare accessible, transparent, and patient-centered. Connect with trusted doctors and manage your health journey with confidence.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-primary-200">
                <Mail className="h-5 w-5 text-primary-400" aria-hidden="true" />
                <a href="mailto:hello@medicare.com" className="hover:text-white transition-colors">hello@medicare.com</a>
              </div>
              <div className="flex items-center gap-2 text-primary-200">
                <Phone className="h-5 w-5 text-primary-400" aria-hidden="true" />
                <a href="tel:+18005550199" className="hover:text-white transition-colors">1-800-555-0199</a>
              </div>
            </div>
            <div className="mt-6 flex items-center gap-2 text-primary-200">
              <MapPin className="h-5 w-5 text-primary-400" aria-hidden="true" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          <nav aria-label="Patient resources">
            <h3 className="font-semibold text-white mb-4">For Patients</h3>
            <ul className="space-y-3">
              {footerLinks.patient.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Doctor resources">
            <h3 className="font-semibold text-white mb-4">For Doctors</h3>
            <ul className="space-y-3">
              {footerLinks.doctor.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company information">
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Support resources">
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <p className="text-primary-300 text-sm">
                © {currentYear} MediCare. All rights reserved.
              </p>
              <div className="hidden sm:flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 text-primary-200 hover:bg-white/10 hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 text-sm text-primary-300">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
              <span aria-hidden="true">·</span>
              <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
              <span aria-hidden="true">·</span>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
              <span aria-hidden="true">·</span>
              <Link to="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            </div>
          </div>

          <div className="sm:hidden mt-6 pt-6 border-t border-white/10">
            <div className="flex justify-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 text-primary-200 hover:bg-white/10 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}