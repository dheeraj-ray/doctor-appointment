import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import type { ReactNode } from 'react';

export interface EmptyStateProps {
  title: string;
  message?: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: ReactNode;
  variant?: 'full' | 'inline' | 'card';
  className?: string;
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
}

export function EmptyState({
  title,
  message,
  actionLabel,
  onAction,
  icon,
  variant = 'full',
  className,
  secondaryAction,
}: EmptyStateProps) {
  const defaultIcons: Record<string, ReactNode> = {
    appointments: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    doctors: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
      </svg>
    ),
    notifications: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    medicalRecords: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    prescriptions: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    payments: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    reviews: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    search: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    default: (
      <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  const resolvedIcon = icon || defaultIcons[title.toLowerCase().replace(/\s+/g, '')] || defaultIcons.default;

  if (variant === 'full') {
    return (
      <div
        className={cn('flex flex-col items-center justify-center text-center px-4 py-12', className)}
      >
        <div className="mb-4">{resolvedIcon}</div>
        <h2 className="text-xl font-semibold text-text-primary mb-2">{title}</h2>
        {message && <p className="text-text-secondary mb-6 max-w-md">{message}</p>}
        {actionLabel && onAction && (
          <Button variant="primary" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
        {secondaryAction && (
          <Button variant="ghost" className="mt-2" onClick={secondaryAction.onClick}>
            {secondaryAction.label}
          </Button>
        )}
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div
        className={cn('flex flex-col items-center justify-center text-center p-8', className)}
      >
        <div className="mb-3">{resolvedIcon}</div>
        <h3 className="text-lg font-medium text-text-primary mb-1">{title}</h3>
        {message && <p className="text-text-secondary mb-4 max-w-sm">{message}</p>}
        {actionLabel && onAction && (
          <Button variant="outline" size="sm" onClick={onAction}>
            {actionLabel}
          </Button>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn('flex flex-col items-center justify-center text-center py-8', className)}
    >
      <div className="mb-3">{resolvedIcon}</div>
      <h3 className="text-base font-medium text-text-primary mb-1">{title}</h3>
      {message && <p className="text-text-secondary mb-3 max-w-sm">{message}</p>}
      {actionLabel && onAction && (
        <Button variant="ghost" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
}

export function NoAppointments({ onBook }: { onBook?: () => void }) {
  return (
    <EmptyState
      title="No Appointments"
      message="You don't have any appointments yet. Book your first appointment to get started."
      actionLabel="Book Appointment"
      onAction={onBook}
      icon={
        <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      }
    />
  );
}

export function NoDoctors({ onSearch }: { onSearch?: () => void }) {
  return (
    <EmptyState
      title="No Doctors Found"
      message="No doctors match your current filters. Try adjusting your search criteria."
      actionLabel="Clear Filters"
      onAction={onSearch}
      icon={
        <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
        </svg>
      }
    />
  );
}

export function NoNotifications() {
  return (
    <EmptyState
      title="No Notifications"
      message="You're all caught up! New notifications will appear here."
      icon={
        <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      }
      variant="card"
    />
  );
}

export function NoMedicalRecords({ onAdd }: { onAdd?: () => void }) {
  return (
    <EmptyState
      title="No Medical Records"
      message="Your medical records will appear here after your consultations."
      actionLabel="Add Record"
      onAction={onAdd}
      variant="card"
    />
  );
}

export function NoPayments() {
  return (
    <EmptyState
      title="No Payments"
      message="Your payment history will appear here after you make payments."
      variant="card"
    />
  );
}

export function NoResults({ onClear }: { onClear?: () => void }) {
  return (
    <EmptyState
      title="No Results Found"
      message="Try adjusting your search or filters to find what you're looking for."
      actionLabel="Clear Filters"
      onAction={onClear}
      icon={
        <svg className="w-12 h-12 text-text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      }
    />
  );
}