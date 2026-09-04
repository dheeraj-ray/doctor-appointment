import { cn } from '@/utils/cn';
import type { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantStyles = {
  default: 'bg-surface border border-border',
  outlined: 'bg-surface border-2 border-border',
  elevated: 'bg-surface shadow-md border-none',
};

const paddingStyles = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className,
  onClick,
}: CardProps) {
  const Component = onClick ? 'button' : 'div';

  return (
    <Component
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={cn(
        'rounded-xl transition-all duration-200',
        variantStyles[variant],
        paddingStyles[padding],
        hover && !onClick && 'hover:shadow-lg hover:border-border-strong cursor-pointer',
        hover && onClick && 'hover:shadow-lg hover:border-border-strong',
        onClick && 'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        className
      )}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </Component>
  );
}

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
  action?: ReactNode;
}

export function CardHeader({ children, className, action }: CardHeaderProps) {
  return (
    <div className={cn('flex items-center justify-between mb-4', className)}>
      <div>{children}</div>
      {action && <div className="flex-shrink-0 ml-4">{action}</div>}
    </div>
  );
}

export interface CardTitleProps {
  children: ReactNode;
  className?: string;
  subtitle?: string;
}

export function CardTitle({ children, className, subtitle }: CardTitleProps) {
  return (
    <div>
      <h3 className={cn('text-lg font-semibold text-text-primary', className)}>
        {children}
      </h3>
      {subtitle && <p className="text-sm text-text-muted mt-0.5">{subtitle}</p>}
    </div>
  );
}

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={cn(className)}>{children}</div>;
}

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('flex items-center mt-4 pt-4 border-t border-border', className)}>
      {children}
    </div>
  );
}