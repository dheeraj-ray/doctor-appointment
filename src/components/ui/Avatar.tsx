import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

export interface AvatarProps {
  src?: string | null;
  alt?: string;
  name?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  shape?: 'circle' | 'square';
  fallback?: ReactNode;
  className?: string;
}

const sizeClasses = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
  '2xl': 'h-20 w-20 text-2xl',
};

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

function getColorFromName(name: string): string {
  const colors = [
    'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200',
    'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-200',
    'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-200',
    'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-200',
    'bg-danger-100 text-danger-700 dark:bg-danger-900 dark:text-danger-200',
    'bg-info-100 text-info-700 dark:bg-info-900 dark:text-info-200',
    'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200',
    'bg-pink-100 text-pink-700 dark:bg-pink-900 dark:text-pink-200',
  ];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export function Avatar({
  src,
  alt,
  name,
  size = 'md',
  shape = 'circle',
  fallback,
  className,
}: AvatarProps) {
  const shapeClass = shape === 'circle' ? 'rounded-full' : 'rounded-lg';

  if (src) {
    return (
      <img
        src={src}
        alt={alt || name || 'Avatar'}
        className={cn('object-cover', sizeClasses[size], shapeClass, className)}
      />
    );
  }

  const initials = name ? getInitials(name) : '?';
  const bgColor = name ? getColorFromName(name) : 'bg-border text-text-muted';

  if (fallback) {
    return (
      <div
        className={cn('flex items-center justify-center font-medium', sizeClasses[size], shapeClass, bgColor, className)}
        aria-label={name || 'Avatar'}
      >
        {fallback}
      </div>
    );
  }

  return (
    <div
      className={cn('flex items-center justify-center font-medium', sizeClasses[size], shapeClass, bgColor, className)}
      aria-label={name || 'Avatar'}
    >
      {initials}
    </div>
  );
}