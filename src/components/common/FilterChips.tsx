import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface Option<T extends string> {
  id: T;
  label: string;
  count?: number;
}

interface FilterChipsProps<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
  label: string;
  layoutId: string;
  className?: string;
}

/** Accessible, horizontally scrollable filter pills with an animated active state. */
export function FilterChips<T extends string>({ options, value, onChange, label, layoutId, className }: FilterChipsProps<T>) {
  return (
    <div role="group" aria-label={label} className={cn('no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0', className)}>
      {options.map((o) => {
        const active = o.id === value;
        return (
          <button
            key={o.id}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(o.id)}
            className={cn(
              'relative inline-flex h-10 shrink-0 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors',
              active ? 'border-ink text-white' : 'border-ink/12 bg-white text-ink-soft hover:border-ink/40 hover:text-ink',
            )}
          >
            {active && (
              <motion.span
                layoutId={layoutId}
                className="absolute inset-0 rounded-full bg-ink"
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              />
            )}
            <span className="relative">{o.label}</span>
            {typeof o.count === 'number' && (
              <span className={cn('relative font-mono text-[0.7rem]', active ? 'text-white/70' : 'text-ink-muted')}>{o.count}</span>
            )}
          </button>
        );
      })}
    </div>
  );
}
