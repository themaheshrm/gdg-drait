import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { domains } from '@/data/domains';
import { accentStyles } from '@/utils/accent';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { cn } from '@/utils/cn';

const hoverBg: Record<string, string> = {
  blue: 'before:bg-gblue-pastel',
  green: 'before:bg-ggreen-pastel',
  yellow: 'before:bg-gyellow-pastel',
  red: 'before:bg-gred-pastel',
  ink: 'before:bg-white',
};

/** Editorial index-style list of domains — intentionally not a card grid. */
export function DomainsPreview() {
  return (
    <section aria-labelledby="domains-preview-title" className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Technical domains"
          title={<span id="domains-preview-title">Five tracks. One community.</span>}
          description="Pick a domain, follow a roadmap, and build alongside people who share your curiosity."
          action={<Button to="/domains" variant="secondary">All domains</Button>}
        />

        <ol className="mt-14 border-t border-ink/15">
          {domains.map((d, i) => {
            const a = accentStyles[d.accent];
            return (
              <Reveal as="li" key={d.id} delay={i * 0.05} className="border-b border-ink/15">
                <Link
                  to={`/domains#${d.id}`}
                  className={cn(
                    'group relative grid grid-cols-[auto_1fr_auto] items-center gap-x-4 gap-y-2 py-6 sm:gap-x-8 sm:py-8',
                    'before:absolute before:inset-y-0 before:-inset-x-4 before:origin-left before:scale-x-0 before:rounded-3xl before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100 focus-visible:before:scale-x-100 sm:before:-inset-x-6',
                    hoverBg[d.accent],
                  )}
                >
                  <span className="relative self-start pt-2 font-mono text-sm text-ink-muted sm:self-center sm:pt-0">{String(i + 1).padStart(2, '0')}</span>
                  <span className="relative">
                    <span className="flex items-center gap-3 text-3xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
                      <span aria-hidden className={cn('hidden h-4 w-4 shrink-0 rounded-full transition-transform duration-500 group-hover:scale-150 sm:block', a.solid.split(' ')[0])} />
                      {d.name}
                    </span>
                    <span className="mt-2 block text-ink-soft sm:pl-7">{d.tagline}</span>
                  </span>
                  <span className="relative flex items-center gap-4">
                    <span className="hidden max-w-[20rem] flex-wrap justify-end gap-1.5 lg:flex">
                      {d.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="rounded-full border border-ink/15 bg-white/60 px-2.5 py-1 font-mono text-xs text-ink-soft">
                          {t}
                        </span>
                      ))}
                    </span>
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white transition-colors duration-300 group-hover:border-ink group-hover:bg-ink group-hover:text-white sm:h-14 sm:w-14">
                      <ArrowUpRight className="h-5 w-5 transition-transform duration-300 group-hover:rotate-45" aria-hidden />
                    </span>
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
