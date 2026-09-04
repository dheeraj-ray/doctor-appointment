import { forwardRef, type TextareaHTMLAttributes } from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
  minRows?: number;
  maxRows?: number;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      error,
      hint,
      minRows = 3,
      maxRows,
      className,
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-');
    const errorId = error ? `${textareaId}-error` : undefined;
    const hintId = hint ? `${textareaId}-hint` : undefined;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-text-primary mb-1.5"
          >
            {label}
            {required && <span className="text-danger-500 ml-1" aria-hidden="true">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          required={required}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={cn(errorId, hintId)}
          rows={minRows}
          style={maxRows ? { maxHeight: `${maxRows * 1.5}rem` } : undefined}
          className={cn(
            'w-full bg-surface border border-border text-text-primary placeholder-text-muted',
            'rounded-lg transition-colors duration-150 resize-y',
            'hover:border-border-strong focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none',
            'disabled:bg-surface-hover disabled:cursor-not-allowed disabled:opacity-60',
            'invalid:border-danger-500 invalid:focus:border-danger-500 invalid:focus:ring-danger-500/20',
            'px-4 py-2.5 text-sm',
            className
          )}
          {...props}
        />
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

Textarea.displayName = 'Textarea';