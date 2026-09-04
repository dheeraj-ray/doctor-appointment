import { Outlet, Link, useLocation } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { useAuthStore } from '@/store/authStore';
import { Menu, X, Stethoscope } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Find Doctors', href: '/doctors' },
  { label: 'Specializations', href: '/specializations' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function PublicLayout() {
  const location = useLocation();
  const { isAuthenticated, user } = useAuthStore();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    setScrolled(window.scrollY > 10);
  };

  useState(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-200',
          scrolled
            ? 'bg-surface/95 backdrop-blur-sm shadow-sm border-b border-border'
            : 'bg-transparent'
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <Link
                to="/"
                className="flex items-center gap-2 text-xl font-bold text-primary-600"
                aria-label="Doctor Appointment Home"
              >
                <Stethoscope className="h-8 w-8" aria-hidden="true" />
                <span>DocBook</span>
              </Link>

              <div className="hidden md:flex items-center gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'text-sm font-medium transition-colors duration-150',
                      isActive(item.href)
                        ? 'text-primary-600'
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />

              <div className="hidden sm:flex items-center gap-3">
                {isAuthenticated ? (
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-text-secondary">
                      {user?.firstName} {user?.lastName}
                    </span>
                    <Button variant="ghost" size="sm" onClick={() => useAuthStore.getState().logout()}>
                      Logout
                    </Button>
                  </div>
                ) : (
                  <>
                    <Link to="/login">
                      <Button variant="ghost" size="sm">
                        Login
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button variant="primary" size="sm">
                        Register
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              <button
                className="md:hidden p-2 rounded-lg text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      'px-3 py-2 rounded-lg text-base font-medium transition-colors',
                      isActive(item.href)
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-2">
                  {isAuthenticated ? (
                    <Button variant="outline" className="w-full" onClick={() => useAuthStore.getState().logout()}>
                      Logout
                    </Button>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="outline" className="w-full">Login</Button>
                      </Link>
                      <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                        <Button variant="primary" className="w-full">Register</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-1 pt-16">
        <Outlet />
      </main>

      <footer className="bg-surface border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary-600">
                <Stethoscope className="h-8 w-8" />
                <span>DocBook</span>
              </Link>
              <p className="mt-4 text-text-secondary max-w-xs">
                Your trusted platform for finding and booking appointments with top healthcare professionals.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-4">For Patients</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><Link to="/doctors" className="hover:text-primary-600">Find Doctors</Link></li>
                <li><Link to="/specializations" className="hover:text-primary-600">Specializations</Link></li>
                <li><Link to="/login" className="hover:text-primary-600">Patient Login</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-4">For Doctors</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><Link to="/login" className="hover:text-primary-600">Doctor Login</Link></li>
                <li><Link to="/register" className="hover:text-primary-600">Join as Doctor</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-text-primary mb-4">Company</h3>
              <ul className="space-y-2 text-text-secondary">
                <li><Link to="/about" className="hover:text-primary-600">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-primary-600">Contact</Link></li>
                <li><Link href="#" className="hover:text-primary-600">Careers</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-text-muted">
              © {new Date().getFullYear()} DocBook. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-text-muted">
              <a href="#" className="hover:text-text-primary">Privacy Policy</a>
              <a href="#" className="hover:text-text-primary">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}