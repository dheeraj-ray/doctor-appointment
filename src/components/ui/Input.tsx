import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  leftElement?: ReactNode;
  rightElement?: ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      leftIcon,
      rightIcon,
      leftElement,
      rightElement,
      className,
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${inputId}-error` : undefined;
    const hintId = hint ? `${inputId}-hint` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            {label}
            {required && <span className="text-danger-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative">
          {(leftIcon || leftElement) && (
            <div
              className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted"
              aria-hidden="true"
            >
              {leftElement || leftIcon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={cn(errorId, hintId)}
            className={cn(
              'w-full bg-surface border border-border text-text-primary placeholder-text-muted',
              'rounded-lg transition-colors duration-150',
              'hover:border-border-strong focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none',
              'disabled:bg-surface-hover disabled:cursor-not-allowed disabled:opacity-60',
              'invalid:border-danger-500 invalid:focus:border-danger-500 invalid:focus:ring-danger-500/20',
              leftIcon || leftElement ? 'pl-10' : 'px-4',
              rightIcon || rightElement ? 'pr-10' : 'px-4',
              'py-2.5 text-sm',
              className
            )}
            {...props}
          />
          {(rightIcon || rightElement) && (
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-text-muted"
              aria-hidden="true"
            >
              {rightElement || rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p id={errorId} className="mt-1.5 text-sm text-danger-500" role="alert">
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={hintId} className="mt-1.5 text-sm text-text-muted">
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';