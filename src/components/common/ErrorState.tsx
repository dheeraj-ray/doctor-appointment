import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import type { ReactNode } from 'react';

export interface ErrorStateProps {
  title?: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  variant?: 'full' | 'inline' | 'card';
  className?: string;
  icon?: ReactNode;
}

export function ErrorState({
  title = 'Something went wrong',
  message = 'We couldn\'t load this information. Please try again.',
  actionLabel = 'Try Again',
  onAction,
  variant = 'full',
  className,
  icon,
}: ErrorStateProps) {
  const defaultIcon = (
    <svg
      className="w-12 h-12 text-danger-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      />
    </svg>
  );

  if (variant === 'full') {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center text-center px-4 py-12',
          className
        )}
        role="alert"
      >
        <div className="mb-4">{icon || defaultIcon}</div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">{title}</h2>
        <p className="text-text-secondary mb-6 max-w-md">{message}</p>
        {onAction && (
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={cn(
          'flex flex-col items-center justify-center text-center p-8',
          className
        )}
        role="alert"
      >
        <div className="mb-3">{icon || <div className="w-10 h-10">{defaultIcon}</div>}</div>
        <h3 className="text-lg font-medium text-text-primary mb-1">{title}</h3>
        <p className="text-text-secondary mb-4 max-w-sm">{message}</p>
        {onAction && (
          <Button variant="outline" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center text-center py-8',
        className
      )}
      role="alert"
    >
      <div className="mb-3">{icon || <div className="w-8 h-8">{defaultIcon}</div>}</div>
      <h3 className="text-base font-medium text-text-primary mb-1">{title}</h3>
      <p className="text-text-secondary mb-3 max-w-sm">{message}</p>
      {onAction && (
        <Button variant="ghost" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function NetworkError({ onRetry }: { onRetry?: () => void }) {
  return (
    <ErrorState
      title="Connection Error"
      message="Unable to connect to the server. Please check your internet connection and try again."
      actionLabel="Retry"
      onAction={onRetry}
      variant="full"
    />
  );
}

export function NotFoundError({ onGoHome }: { onGoHome?: () => void }) {
  return (
    <ErrorState
      title="Page Not Found"
      message="The page you're looking for doesn't exist or has been moved."
      actionLabel="Go Home"
      onAction={onGoHome}
      variant="full"
    />
  );
}

export function UnauthorizedError({ onLogin }: { onLogin?: () => void }) {
  return (
    <ErrorState
      title="Access Denied"
      message="You don't have permission to access this page. Please log in to continue."
      actionLabel="Log In"
      onAction={onLogin}
      variant="full"
    />
  );
}

export function ForbiddenError({ onGoBack }: { onGoBack?: () => void }) {
  return (
    <ErrorState
      title="Forbidden"
      message="You don't have the required role to access this page."
      actionLabel="Go Back"
      onAction={onGoBack}
      variant="full"
    />
  );
}