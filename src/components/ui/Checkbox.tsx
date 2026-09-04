import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, description, error, className, id, disabled, required, ...props }, ref) => {
    const checkboxId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${checkboxId}-error` : undefined;
    const descriptionId = description ? `${checkboxId}-description` : undefined;

    return (
      <div className="w-full">
        <div className="flex items-start gap-3">
          <div className="relative flex items-center justify-center mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              disabled={disabled}
              required={required}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={cn(errorId, descriptionId)}
              className={cn(
                'h-4 w-4 rounded border-border text-primary-600',
                'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'transition-colors duration-150',
                'checked:bg-primary-600 checked:border-primary-600',
                'invalid:border-danger-500'
              )}
              {...props}
            />
          </div>
          <div className="flex-1 min-w-0">
            <label
              htmlFor={checkboxId}
              className={cn(
                'text-sm font-medium text-text-primary cursor-pointer',
                disabled && 'opacity-50 cursor-not-allowed'
              )}
            >
              {label}
            </label>
            {description && (
              <p id={descriptionId} className="mt-0.5 text-sm text-text-muted">
                {description}
              </p>
            )}
            {error && (
              <p id={errorId} className="mt-1.5 text-sm text-danger-500" role="alert">
                {error}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';