import { ArrowUpRight } from 'lucide-react';
import type { Accent, Resource } from '@/types';
import { accentStyles } from '@/utils/accent';
import { cn } from '@/utils/cn';

const host = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

export function ResourceCard({ resource, accent = 'blue' }: { resource: Resource; accent?: Accent }) {
  const a = accentStyles[accent];
  return (
    <a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col rounded-3xl border border-ink/[0.07] bg-white p-5 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:border-ink/20 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <span className={cn('inline-flex rounded-full px-2.5 py-0.5 font-mono text-[0.7rem] uppercase tracking-wider text-ink', a.pastel)}>{resource.type}</span>
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-offwhite transition-colors group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" aria-hidden />
        </span>
      </div>
      <h3 className="mt-4 text-lg font-medium tracking-tight">{resource.title}</h3>
      <p className="mt-1.5 text-sm text-ink-soft">{resource.description}</p>
      <p className="mt-auto flex items-center gap-2 pt-4 font-mono text-xs text-ink-muted">
        {host(resource.url)}
        {resource.free && <span className="rounded bg-ggreen-pastel px-1.5 py-0.5 text-ink">free</span>}
      </p>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}
