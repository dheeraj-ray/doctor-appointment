import { cn } from '@/utils/cn';

export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular' | 'avatar';
  width?: string | number;
  height?: string | number;
  lines?: number;
}

export function Skeleton({
  className,
  variant = 'text',
  width,
  height,
  lines,
}: SkeletonProps) {
  if (variant === 'circular') {
    return (
      <div
        className={cn(
          'animate-pulse rounded-full bg-border',
          className
        )}
        style={{ width, height }}
        aria-hidden="true"
      />
    );
  }

  if (variant === 'avatar') {
    return (
      <div
        className={cn(
          'animate-pulse rounded-full bg-border',
          className
        )}
        style={{ width: width || '40px', height: height || '40px' }}
        aria-hidden="true"
      />
    );
  }

  if (variant === 'rectangular') {
    return (
      <div
        className={cn(
          'animate-pulse rounded-lg bg-border',
          className
        )}
        style={{ width, height }}
        aria-hidden="true"
      />
    );
  }

  if (lines && lines > 1) {
    return (
      <div className={cn('space-y-2', className)} aria-hidden="true">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse h-4 bg-border rounded"
            style={{
              width: i === lines - 1 ? '60%' : '100%',
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'animate-pulse h-4 bg-border rounded',
        className
      )}
      style={{ width: width || '100%', height: height || '1rem' }}
      aria-hidden="true"
    />
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-4 p-6', className)} aria-hidden="true">
      <div className="flex items-center gap-4">
        <Skeleton variant="avatar" size="lg" />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="40%" />
          <Skeleton variant="text" width="30%" />
        </div>
      </div>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="text" width="60%" />
    </div>
  );
}

export function SkeletonTable({ rows = 5, columns = 4 }: { rows?: number; columns?: number }) {
  return (
    <div className="space-y-3" aria-hidden="true">
      <div className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {Array.from({ length: columns }).map((_, i) => (
          <Skeleton key={i} variant="text" width="80%" />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, row) => (
        <div key={row} className="grid gap-4" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
          {Array.from({ length: columns }).map((_, i) => (
            <Skeleton key={i} variant="text" width="90%" />
          ))}
        </div>
      ))}
    </div>
  );
}

export function SkeletonList({ items = 5 }: { items?: number }) {
  return (
    <div className="space-y-4" aria-hidden="true">
      {Array.from({ length: items }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  );
}