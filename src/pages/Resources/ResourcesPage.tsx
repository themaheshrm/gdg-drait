import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { resourceCategories, resources } from '@/data/resources';
import { site } from '@/data/site';
import { accentStyles } from '@/utils/accent';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/common/Button';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { cn } from '@/utils/cn';

export default function ResourcesPage() {
  useDocumentTitle('Resources', 'Curated learning resources for DSA, web development, AI/ML, cloud, design and developer tools.');
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const filtered = useMemo(
    () => (q ? resources.filter((r) => `${r.title} ${r.description} ${r.type}`.toLowerCase().includes(q)) : resources),
    [q],
  );

  return (
    <>
      <PageHero
        eyebrow="Resource hub"
        accent="blue"
        title="Learn from the best, for free."
        description="A curated starting point for every domain — documentation, courses, practice platforms, tools and GitHub repositories our community recommends."
      />

      <section aria-label="Learning resources" className="container-site pb-24">
        <div className="sticky top-[5.25rem] z-30 flex flex-col gap-3 rounded-4xl border border-ink/[0.06] bg-white/90 p-3 shadow-card backdrop-blur-xl sm:top-[5.75rem] lg:flex-row lg:items-center">
          <label className="relative block lg:w-72 lg:shrink-0">
            <span className="sr-only">Search resources</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search resources…"
              className="h-11 w-full rounded-full border border-ink/10 bg-offwhite pl-11 pr-10 outline-none placeholder:text-ink-muted focus:border-ink/40 focus:bg-white [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button type="button" onClick={() => setQuery('')} aria-label="Clear search" className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-ink/5">
                <X className="h-4 w-4" aria-hidden />
              </button>
            )}
          </label>
          <nav aria-label="Resource categories" className="no-scrollbar -mx-3 overflow-x-auto px-3 lg:mx-0 lg:px-0">
            <ul className="flex gap-1.5 lg:flex-wrap">
              {resourceCategories.map((c) => (
                <li key={c.id}>
                  <a href={`#${c.id}`} className="inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-full px-3.5 text-sm font-medium text-ink-soft transition-colors hover:bg-offwhite hover:text-ink">
                    <span aria-hidden className={cn('h-2 w-2 rounded-full', accentStyles[c.accent].solid.split(' ')[0])} />
                    {c.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {filtered.length === 0 && (
          <div className="mt-10">
            <EmptyState title="No resources match your search" action={<Button variant="secondary" onClick={() => setQuery('')}>Clear search</Button>} />
          </div>
        )}

        <div className="mt-6 space-y-16 sm:space-y-20">
          {resourceCategories.map((c) => {
            const list = filtered.filter((r) => r.category === c.id);
            if (!list.length) return null;
            const a = accentStyles[c.accent];
            return (
              <section key={c.id} id={c.id} aria-labelledby={`res-${c.id}`} className="scroll-mt-48 pt-8">
                <Reveal className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span aria-hidden className={cn('inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-mono text-sm', c.accent === 'ink' ? 'bg-ink text-white' : a.pastel)}>
                      {String(list.length).padStart(2, '0')}
                    </span>
                    <div>
                      <h2 id={`res-${c.id}`} className="text-3xl font-medium tracking-tight sm:text-4xl">
                        {c.title}
                      </h2>
                      <p className="text-ink-soft">{c.description}</p>
                    </div>
                  </div>
                </Reveal>
                <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {list.map((r, i) => (
                    <Reveal as="li" key={r.url} delay={(i % 4) * 0.04}>
                      <ResourceCard resource={r} accent={c.accent} />
                    </Reveal>
                  ))}
                </ul>
              </section>
            );
          })}
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-4xl border border-dashed border-ink/20 p-7 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">Know a great resource?</h2>
            <p className="mt-2 text-ink-soft">
              Suggest it by adding it to <code className="rounded bg-white px-1.5 py-0.5 font-mono text-sm">src/data/resources.ts</code> in a pull request.
            </p>
          </div>
          <Button href={`${site.websiteRepo}/blob/main/CONTRIBUTING.md`}>Suggest a resource</Button>
        </div>
      </section>
    </>
  );
}
