import type { ReactNode } from 'react';
import type { Accent } from '@/types';
import { accentStyles } from '@/utils/accent';
import { cn } from '@/utils/cn';

interface ChipProps {
  children: ReactNode;
  accent?: Accent;
  tone?: 'pastel' | 'outline' | 'solid';
  className?: string;
  mono?: boolean;
}

export function Chip({ children, accent = 'ink', tone = 'pastel', className, mono }: ChipProps) {
  const a = accentStyles[accent];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium leading-5',
        mono && 'font-mono tracking-wide',
        tone === 'pastel' && cn(a.pastel, 'text-ink'),
        tone === 'outline' && 'border border-ink/15 bg-white text-ink-soft',
        tone === 'solid' && a.solid,
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Dashed badge that marks content still waiting for real information. */
export function PlaceholderBadge({ className, label = 'Placeholder' }: { className?: string; label?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-dashed border-ink/40 bg-white/80 px-2.5 py-0.5 font-mono text-[0.68rem] uppercase tracking-wider text-ink-soft backdrop-blur-sm',
        className,
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gyellow" />
      {label}
    </span>
  );
}
