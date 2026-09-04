import { Outlet, Link, useLocation, Navigate } from 'react-router-dom';
import { cn } from '@/utils/cn';
import { useAuthStore } from '@/store/authStore';
import { ThemeToggle } from '@/components/common/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { Avatar } from '@/components/ui/Avatar';
import { Menu, X, ChevronDown, Bell, LogOut, User, Calendar, FileText, CreditCard, Settings, Stethoscope, HeartPulse, MessageSquare } from 'lucide-react';
import { useState, useEffect } from 'react';

const sidebarItems = [
  { label: 'Dashboard', href: '/patient', icon: <Stethoscope className="h-5 w-5" /> },
  { label: 'Find Doctors', href: '/patient/doctors', icon: <HeartPulse className="h-5 w-5" /> },
  { label: 'Appointments', href: '/patient/appointments', icon: <Calendar className="h-5 w-5" /> },
  { label: 'Medical Records', href: '/patient/medical-records', icon: <FileText className="h-5 w-5" /> },
  { label: 'Prescriptions', href: '/patient/prescriptions', icon: <MessageSquare className="h-5 w-5" /> },
  { label: 'Payments', href: '/patient/payments', icon: <CreditCard className="h-5 w-5" /> },
  { label: 'Notifications', href: '/patient/notifications', icon: <Bell className="h-5 w-5" /> },
  { label: 'Profile', href: '/patient/profile', icon: <User className="h-5 w-5" /> },
  { label: 'Settings', href: '/patient/settings', icon: <Settings className="h-5 w-5" /> },
];

const mobileNavItems = [
  { label: 'Home', href: '/patient', icon: <Stethoscope className="h-5 w-5" /> },
  { label: 'Doctors', href: '/patient/doctors', icon: <HeartPulse className="h-5 w-5" /> },
  { label: 'Appointments', href: '/patient/appointments', icon: <Calendar className="h-5 w-5" /> },
  { label: 'Notifications', href: '/patient/notifications', icon: <Bell className="h-5 w-5" /> },
  { label: 'Profile', href: '/patient/profile', icon: <User className="h-5 w-5" /> },
];

export function PatientLayout() {
  const location = useLocation();
  const { user, logout } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isActive = (href: string) => location.pathname === href || location.pathname.startsWith(href + '/');

  if (!user || user.role !== 'PATIENT') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-background flex">
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-64 bg-surface border-r border-border transform transition-transform duration-200 lg:translate-x-0',
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Patient navigation"
      >
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center justify-between px-4 border-b border-border">
            <Link to="/patient" className="flex items-center gap-2 text-xl font-bold text-primary-600">
              <Stethoscope className="h-8 w-8" />
              <span>DocBook</span>
            </Link>
            <button
              className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-surface-hover"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close sidebar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="flex-1 p-4 space-y-1 overflow-y-auto" role="navigation" aria-label="Patient menu">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive(item.href)
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-text-secondary hover:bg-surface-hover hover:text-text-primary'
                )}
                aria-current={isActive(item.href) ? 'page' : undefined}
                onClick={() => setSidebarOpen(false)}
              >
                <span className="flex-shrink-0" aria-hidden="true">{item.icon}</span>
                {item.label}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-border">
              <button
                onClick={logout}
                className={cn(
                  'flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-sm font-medium',
                  'text-text-secondary hover:bg-surface-hover hover:text-danger-600 transition-colors'
                )}
              >
                <LogOut className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                Logout
              </button>
            </div>
          </nav>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-hidden="true"
        />
      )}

      <div className="flex-1 flex flex-col lg:ml-64 min-w-0">
        <header className="sticky top-0 z-30 bg-surface/95 backdrop-blur-sm border-b border-border">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-4">
              <button
                className="lg:hidden p-2 rounded-lg text-text-secondary hover:bg-surface-hover"
                onClick={() => setSidebarOpen(true)}
                aria-label="Open sidebar"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-1 flex items-center justify-end gap-4">
              <ThemeToggle showLabel />

              <div className="relative">
                <button
                  className="p-2 rounded-lg text-text-secondary hover:bg-surface-hover hover:text-text-primary transition-colors relative"
                  onClick={() => setUserMenuOpen(!userMenuOpen)}
                  aria-expanded={userMenuOpen}
                  aria-haspopup="true"
                  aria-label="User menu"
                >
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-danger-500 text-[10px] font-medium text-white flex items-center justify-center">
                    3
                  </span>
                </button>

                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-surface border border-border rounded-lg shadow-lg py-1 z-50">
                    <div className="px-3 py-2 border-b border-border">
                      <p className="text-sm font-medium text-text-primary">{user.firstName} {user.lastName}</p>
                      <p className="text-xs text-text-muted">{user.email}</p>
                    </div>
                    <Link
                      to="/patient/profile"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                    <Link
                      to="/patient/settings"
                      className="flex items-center gap-2 px-3 py-2 text-sm text-text-secondary hover:bg-surface-hover hover:text-text-primary"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <Settings className="h-4 w-4" />
                      Settings
                    </Link>
                    <hr className="my-1 border-border" />
                    <button
                      onClick={logout}
                      className="flex items-center gap-2 w-full px-3 py-2 text-sm text-danger-600 hover:bg-danger-50"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}