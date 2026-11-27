import { Fragment } from 'react';
import { cn } from '@/utils/cn';

const dotColors = ['bg-gblue', 'bg-gred', 'bg-gyellow', 'bg-ggreen'];

/** Infinite, decorative text ticker. Pauses on hover and for reduced motion. */
export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const row = (hidden: boolean) => (
    <div className="flex shrink-0 items-center gap-8 pr-8" aria-hidden={hidden || undefined}>
      {items.map((t, i) => (
        <Fragment key={`${t}-${i}`}>
          <span className="whitespace-nowrap text-2xl font-medium tracking-tight sm:text-4xl">{t}</span>
          <span className={cn('h-3 w-3 shrink-0 rounded-full sm:h-4 sm:w-4', dotColors[i % dotColors.length])} />
        </Fragment>
      ))}
    </div>
  );
  return (
    <div className={cn('group relative flex overflow-hidden', className)}>
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
