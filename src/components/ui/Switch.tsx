import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  description?: string;
  error?: string;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, description, error, className, id, disabled, required, ...props }, ref) => {
    const switchId = id || label.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${switchId}-error` : undefined;
    const descriptionId = description ? `${switchId}-description` : undefined;

    return (
      <div className="w-full">
        <div className="flex items-start gap-3">
          <div className="relative flex items-center mt-0.5">
            <input
              ref={ref}
              type="checkbox"
              role="switch"
              id={switchId}
              disabled={disabled}
              required={required}
              aria-invalid={error ? 'true' : 'false'}
              aria-describedby={cn(errorId, descriptionId)}
              className={cn(
                'peer h-6 w-11 rounded-full border-2 appearance-none',
                'bg-border peer-focus:ring-2 peer-focus:ring-primary-500/20 peer-focus:outline-none',
                'peer-checked:bg-primary-600 peer-checked:border-primary-600',
                'peer-checked:after:translate-x-full',
                'after:content-[\"\"] after:absolute after:top-0.5 after:left-0.5',
                'after:h-4 after:w-4 after:rounded-full after:bg-white',
                'after:transition-transform after:duration-150 after:shadow-sm',
                'disabled:opacity-50 disabled:cursor-not-allowed',
                'invalid:border-danger-500 invalid:peer-checked:bg-danger-500 invalid:peer-checked:border-danger-500'
              )}
              {...props}
            />
          </div>
          <div className="flex-1 min-w-0">
            <label
              htmlFor={switchId}
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

Switch.displayName = 'Switch';