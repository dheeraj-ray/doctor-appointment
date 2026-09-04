import { forwardRef, type InputHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export interface RadioOption<T = string> {
  value: T;
  label: string;
  description?: string;
  disabled?: boolean;
}

export interface RadioGroupProps<T = string> {
  label: string;
  options: RadioOption<T>[];
  value?: T;
  onChange: (value: T) => void;
  error?: string;
  hint?: string;
  required?: boolean;
  disabled?: boolean;
  orientation?: 'vertical' | 'horizontal';
  name?: string;
}

export function RadioGroup<T = string>({
  label,
  options,
  value,
  onChange,
  error,
  hint,
  required,
  disabled,
  orientation = 'vertical',
  name,
}: RadioGroupProps<T>) {
  const groupName = name || label.toLowerCase().replace(/\s+/g, '-');
  const errorId = error ? `${groupName}-error` : undefined;
  const hintId = hint ? `${groupName}-hint` : undefined;

  return (
    <fieldset className="w-full" aria-describedby={cn(errorId, hintId)}>
      <legend className="block text-sm font-medium text-text-primary mb-2">
        {label}
        {required && <span className="text-danger-500 ml-1" aria-hidden="true">*</span>}
      </legend>
      <div
        className={cn(
          'space-y-2',
          orientation === 'horizontal' && 'flex flex-wrap gap-4'
        )}
        role="radiogroup"
        aria-label={label}
        aria-required={required}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={cn(errorId, hintId)}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              'flex items-center gap-2 cursor-pointer',
              orientation === 'horizontal' && 'whitespace-nowrap',
              option.disabled && 'opacity-50 cursor-not-allowed',
              disabled && 'opacity-50 cursor-not-allowed'
            )}
          >
            <input
              type="radio"
              name={groupName}
              value={option.value}
              checked={value === option.value}
              onChange={() => !disabled && !option.disabled && onChange(option.value)}
              disabled={disabled || option.disabled}
              required={required}
              className={cn(
                'h-4 w-4 border-border text-primary-600',
                'focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:ring-offset-background',
                'transition-colors duration-150'
              )}
            />
            <div>
              <span className={cn(
                'text-sm font-medium',
                option.disabled || disabled ? 'text-text-muted' : 'text-text-primary'
              )}>
                {option.label}
              </span>
              {option.description && (
                <p className="text-sm text-text-muted">{option.description}</p>
              )}
            </div>
          </label>
        ))}
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
    </fieldset>
  );
}