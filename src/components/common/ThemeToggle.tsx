import { useAppStore } from '@/store/appStore';
import { cn } from '@/utils/cn';
import { Button } from '@/components/ui/Button';
import { Sun, Moon, Monitor } from 'lucide-react';

export function ThemeToggle({ className, showLabel = false }: { className?: string; showLabel?: boolean }) {
  const { theme, setTheme } = useAppStore();

  const icons = {
    light: <Sun className="h-5 w-5" aria-hidden="true" />,
    dark: <Moon className="h-5 w-5" aria-hidden="true" />,
    system: <Monitor className="h-5 w-5" aria-hidden="true" />,
  };

  const labels = {
    light: 'Light mode',
    dark: 'Dark mode',
    system: 'System preference',
  };

  const nextTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setTheme(nextTheme)}
        aria-label={`Switch to ${labels[nextTheme]}`}
        className={cn('relative', className)}
      >
        {icons[theme]}
        {showLabel && (
          <span className="ml-2 hidden sm:inline text-sm text-text-secondary">
            {labels[theme]}
          </span>
        )}
      </Button>
    </div>
  );
}

export function ThemeSelect({ className }: { className?: string }) {
  const { theme, setTheme } = useAppStore();

  const options = [
    { value: 'light', label: 'Light', icon: <Sun className="h-4 w-4" /> },
    { value: 'dark', label: 'Dark', icon: <Moon className="h-4 w-4" /> },
    { value: 'system', label: 'System', icon: <Monitor className="h-4 w-4" /> },
  ] as const;

  return (
    <select
      value={theme}
      onChange={(e) => setTheme(e.target.value as 'light' | 'dark' | 'system')}
      className={cn(
        'appearance-none bg-surface border border-border text-text-primary rounded-lg',
        'px-3 py-2 pr-8 text-sm',
        'focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500',
        'hover:border-border-strong',
        className
      )}
      aria-label="Select theme"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}