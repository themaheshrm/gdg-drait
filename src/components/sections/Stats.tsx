import type { Stat } from '@/types';
import { stats } from '@/data/site';
import { useCountUp } from '@/hooks/useCountUp';
import { accentStyles } from '@/utils/accent';
import { Reveal } from '@/components/common/Reveal';
import { PlaceholderBadge } from '@/components/common/Chip';
import { cn } from '@/utils/cn';

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const { ref, value: v } = useCountUp<HTMLSpanElement>(value);
  return (
    <span ref={ref} aria-label={`${value}${suffix ?? ''}`}>
      <span aria-hidden>
        {v.toLocaleString('en-IN')}
        {suffix}
      </span>
    </span>
  );
}

function StatTile({ stat, index }: { stat: Stat; index: number }) {
  const a = accentStyles[stat.accent];
  return (
    <Reveal delay={index * 0.08} className="relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl bg-white p-5 shadow-card sm:rounded-4xl ring-1 ring-ink/[0.04] sm:p-7">
      <span aria-hidden className={cn('absolute right-0 top-0 h-16 w-16 rounded-bl-[4rem]', a.pastel)} />
      <span aria-hidden className={cn('relative h-3 w-3 rounded-full', a.solid.split(' ')[0])} />
      <div className="relative">
        {stat.value !== null ? (
          <p className="text-5xl font-medium tracking-tight sm:text-6xl">
            <Counter value={stat.value} suffix={stat.suffix} />
          </p>
        ) : (
          <div className="flex flex-col items-start gap-2">
            <p className="font-mono text-4xl font-medium tracking-tight text-ink/30 sm:text-5xl" aria-hidden>
              —
            </p>
            <PlaceholderBadge label="Awaiting data" />
          </div>
        )}
        <p className="mt-3 text-ink-soft">{stat.label}</p>
      </div>
    </Reveal>
  );
}

export function Stats() {
  return (
    <section aria-labelledby="stats-title" className="container-site py-10 sm:py-14">
      <h2 id="stats-title" className="sr-only">
        Community in numbers
      </h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {stats.map((s, i) => (
          <StatTile key={s.label} stat={s} index={i} />
        ))}
      </div>
    </section>
  );
}
