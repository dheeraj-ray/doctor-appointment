import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

export interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
  className?: string;
}

const variantStyles = {
  default: 'bg-border text-text-secondary',
  primary: 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200',
  secondary: 'bg-secondary-100 text-secondary-700 dark:bg-secondary-900 dark:text-secondary-200',
  success: 'bg-success-100 text-success-700 dark:bg-success-900 dark:text-success-200',
  warning: 'bg-warning-100 text-warning-700 dark:bg-warning-900 dark:text-warning-200',
  danger: 'bg-danger-100 text-danger-700 dark:bg-danger-900 dark:text-danger-200',
  info: 'bg-info-100 text-info-700 dark:bg-info-900 dark:text-info-200',
  outline: 'bg-transparent border border-border text-text-secondary',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-xs',
  lg: 'px-3 py-1 text-sm',
};

export function Badge({
  children,
  variant = 'default',
  size = 'md',
  dot = false,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 font-medium rounded-full',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {dot && (
        <span
          className={cn(
            'rounded-full',
            variant === 'default' && 'bg-text-muted',
            variant === 'primary' && 'bg-primary-500',
            variant === 'secondary' && 'bg-secondary-500',
            variant === 'success' && 'bg-success-500',
            variant === 'warning' && 'bg-warning-500',
            variant === 'danger' && 'bg-danger-500',
            variant === 'info' && 'bg-info-500',
            variant === 'outline' && 'bg-current',
            size === 'sm' && 'w-1.5 h-1.5',
            size === 'md' && 'w-2 h-2',
            size === 'lg' && 'w-2.5 h-2.5'
          )}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}