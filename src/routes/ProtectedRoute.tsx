import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';
import { LoadingState } from '@/components/common/LoadingState';

export function ProtectedRoute() {
  const { isAuthenticated, isLoading, hydrate } = useAuthStore();
  const location = useLocation();

  if (isLoading) {
    return <LoadingState variant="full" label="Restoring session..." />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}