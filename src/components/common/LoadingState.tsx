import { cn } from '@/utils/cn';
import { Spinner } from '@/components/ui/Spinner';
import type { ReactNode } from 'react';

export interface LoadingStateProps {
  variant?: 'full' | 'inline' | 'button' | 'card' | 'table';
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children?: ReactNode;
}

export function LoadingState({
  variant = 'full',
  label = 'Loading...',
  size = 'md',
  className,
  children,
}: LoadingStateProps) {
  if (variant === 'full') {
    return (
      <div
        className={cn('fixed inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-50', className)}
        role="status"
        aria-label={label}
      >
        <div className="flex flex-col items-center gap-4 bg-surface p-8 rounded-xl shadow-lg border border-border">
          <Spinner size={size === 'sm' ? 'lg' : size === 'lg' ? 'xl' : 'lg'} />
          <p className="text-text-secondary">{label}</p>
        </div>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={cn('flex items-center justify-center gap-2 py-4', className)} role="status" aria-label={label}>
        <Spinner size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'md'} />
        <span className="text-sm text-text-muted">{label}</span>
      </div>
    );
  }

  if (variant === 'button') {
    return (
      <div className={cn('flex items-center justify-center gap-2', className)} role="status" aria-label={label}>
        <Spinner size="sm" />
        <span className="text-sm font-medium">{label}</span>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={cn('space-y-4 p-6', className)} aria-hidden="true" role="status" aria-label={label}>
        <div className="flex items-center gap-4">
          <div className="animate-pulse h-12 w-12 rounded-full bg-border" />
          <div className="flex-1 space-y-2">
            <div className="animate-pulse h-4 bg-border rounded w-3/4" />
            <div className="animate-pulse h-4 bg-border rounded w-1/2" />
          </div>
        </div>
        <div className="animate-pulse h-4 bg-border rounded w-full" />
        <div className="animate-pulse h-4 bg-border rounded w-3/4" />
        <div className="animate-pulse h-4 bg-border rounded w-1/2" />
      </div>
    );
  }

  if (variant === 'table') {
    return (
      <div className={cn('space-y-3', className)} aria-hidden="true" role="status" aria-label={label}>
        <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse h-4 bg-border rounded w-3/4" />
          ))}
        </div>
        {Array.from({ length: 5 }).map((_, row) => (
          <div key={row} className="grid gap-4" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="animate-pulse h-4 bg-border rounded w-3/4" />
            ))}
          </div>
        ))}
      </div>
    );
  }

  return children || null;
}