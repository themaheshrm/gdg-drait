import type { ReactNode } from 'react';
import { cn } from '@/utils/cn';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  size?: 'lg' | 'md';
}

export function SectionHeading({ eyebrow, title, description, action, align = 'left', className, as: H = 'h2', size = 'md' }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-6 md:flex-row md:items-end md:justify-between',
        align === 'center' && 'items-center text-center md:flex-col md:items-center',
        className,
      )}
    >
      <div className={cn('max-w-3xl', align === 'center' && 'mx-auto')}>
        {eyebrow && (
          <p className="eyebrow mb-4 flex items-center gap-2">
            <span aria-hidden className="inline-flex gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-gblue" />
              <span className="h-1.5 w-1.5 rounded-full bg-gred" />
              <span className="h-1.5 w-1.5 rounded-full bg-gyellow" />
              <span className="h-1.5 w-1.5 rounded-full bg-ggreen" />
            </span>
            {eyebrow}
          </p>
        )}
        <H className={cn(size === 'lg' ? 'text-display-lg' : 'text-display-md', 'text-ink')}>{title}</H>
        {description && <div className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</div>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
