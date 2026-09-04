import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import { Stethoscope, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Doctors', href: '/doctors' },
  { label: 'Specializations', href: '/specializations' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'About', href: '/about' },
];

export function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      )}
      role="banner"
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-18 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-primary-600 dark:text-primary-400"
            aria-label="MediCare Home"
          >
            <Stethoscope className="h-8 w-8" aria-hidden="true" />
            <span>MediCare</span>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200 relative',
                  isActive(link.href)
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-text-secondary hover:text-text-primary dark:hover:text-text-secondary'
                )}
                aria-current={isActive(link.href) ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link to="/login">
              <Button variant="ghost" size="sm">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden py-4 border-t border-border animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    'px-3 py-2.5 rounded-lg text-base font-medium transition-colors',
                    isActive(link.href)
                      ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400'
                      : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-border flex flex-col gap-2">
                <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Login</Button>
                </Link>
                <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="primary" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}