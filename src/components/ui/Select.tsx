import { forwardRef, type SelectHTMLAttributes, type ReactNode } from 'react';
import { cn } from '@/utils/cn';

export interface SelectOption<T = string> {
  value: T;
  label: string;
  disabled?: boolean;
}

export interface SelectProps<T = string> extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  placeholder?: string;
  options: SelectOption<T>[];
  leftIcon?: ReactNode;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      error,
      hint,
      placeholder,
      options,
      leftIcon,
      className,
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${selectId}-error` : undefined;
    const hintId = hint ? `${selectId}-hint` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            {label}
            {required && <span className="text-danger-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <div className="relative">
          {leftIcon && (
            <div
              className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted"
              aria-hidden="true"
            >
              {leftIcon}
            </div>
          )}
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            required={required}
            aria-invalid={error ? 'true' : 'false'}
            aria-describedby={cn(errorId, hintId)}
            className={cn(
              'w-full bg-surface border border-border text-text-primary',
              'rounded-lg transition-colors duration-150 appearance-none',
              'hover:border-border-strong focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none',
              'disabled:bg-surface-hover disabled:cursor-not-allowed disabled:opacity-60',
              'invalid:border-danger-500 invalid:focus:border-danger-500 invalid:focus:ring-danger-500/20',
              leftIcon ? 'pl-10' : 'px-4',
              'pr-10 py-2.5 text-sm',
              'bg-[url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath stroke=%27%236b7280%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%271.5%27 d=%27M6 8l4 4 4-4%27/%3E%3C/svg%3E")] bg-[length:1.25rem_1.25rem] bg-[right_0.5rem_center] bg-no-repeat',
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value} disabled={option.disabled}>
                {option.label}
              </option>
            ))}
          </select>
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-text-muted"
            aria-hidden="true"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 8l4 4 4-4" />
            </svg>
          </div>
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

Select.displayName = 'Select';