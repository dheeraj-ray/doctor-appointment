import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Stethoscope, Home, Search, ArrowLeft } from 'lucide-react';
import { ROUTES } from '@/routes/paths';

export function NotFoundPage() {
  return (
    <div className="min-h-[calc(100vh-16rem)] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-200">
            <Search className="h-10 w-10" aria-hidden="true" />
          </span>
        </div>
        <h1 className="text-4xl font-bold text-text-primary mb-2">404</h1>
        <h2 className="text-xl font-semibold text-text-primary mb-4">Page Not Found</h2>
        <p className="text-text-secondary mb-8">
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to={ROUTES.public.doctors}>
            <Button variant="primary" leftIcon={<Search className="h-4 w-4" />}>
              Find Doctors
            </Button>
          </Link>
          <Link to={ROUTES.public.home}>
            <Button variant="outline" leftIcon={<Home className="h-4 w-4" />}>
              Go Home
            </Button>
          </Link>
          <Link to={ROUTES.public.login}>
            <Button variant="ghost" leftIcon={<ArrowLeft className="h-4 w-4" />}>
              Login
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}