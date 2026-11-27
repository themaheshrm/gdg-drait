import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, X } from 'lucide-react';
import type { DomainId } from '@/types';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { projects } from '@/data/projects';
import { domains } from '@/data/domains';
import { site } from '@/data/site';
import { PageHero } from '@/components/common/PageHero';
import { FilterChips } from '@/components/common/FilterChips';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/common/Button';
import { ProjectCard } from '@/components/cards/ProjectCard';
import { GitHubIcon } from '@/assets/icons/BrandIcons';

type DomainFilter = DomainId | 'all';

export default function ProjectsPage() {
  useDocumentTitle('Projects', 'Open-source projects built by the GDG on Campus Dr. AIT community.');
  const [params, setParams] = useSearchParams();
  const query = params.get('q') ?? '';
  const domain = (domains.some((d) => d.id === params.get('domain')) ? params.get('domain') : 'all') as DomainFilter;

  const set = (key: string, value: string) => {
    const next = new URLSearchParams(params);
    if (!value || value === 'all') next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      if (domain !== 'all' && p.domain !== domain) return false;
      if (!q) return true;
      return [p.name, p.description, ...p.stack, ...p.contributors].join(' ').toLowerCase().includes(q);
    });
  }, [query, domain]);

  const options = [
    { id: 'all' as DomainFilter, label: 'All domains', count: projects.length },
    ...domains.map((d) => ({ id: d.id as DomainFilter, label: d.shortName, count: projects.filter((p) => p.domain === d.id).length })),
  ];

  return (
    <>
      <PageHero
        eyebrow="Projects"
        accent="yellow"
        title="Ideas, shipped."
        description="Real projects built by our members across every domain. Explore the code, try the demos, or contribute through GitHub."
      >
        <Button href={`https://github.com/${site.githubOrg}`} variant="secondary" icon={<GitHubIcon className="h-4 w-4" />} iconPosition="start">
          Browse our GitHub
        </Button>
      </PageHero>

      <section aria-label="Project listing" className="container-site pb-24">
        <div className="flex flex-col gap-4 rounded-4xl bg-white p-4 shadow-card sm:p-5 lg:flex-row lg:items-center">
          <label className="relative block lg:w-80 lg:shrink-0">
            <span className="sr-only">Search projects</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
            <input
              type="search"
              value={query}
              onChange={(e) => set('q', e.target.value)}
              placeholder="Search by name, tech, contributor…"
              className="h-12 w-full rounded-full border border-ink/10 bg-offwhite pl-11 pr-11 text-[0.95rem] outline-none transition-colors placeholder:text-ink-muted focus:border-ink/40 focus:bg-white [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => set('q', '')}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-ink/5"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            )}
          </label>
          <FilterChips label="Filter by domain" layoutId="projects-domain" options={options} value={domain} onChange={(v) => set('domain', v)} />
        </div>

        <p className="mt-8 font-mono text-sm text-ink-muted" aria-live="polite">
          {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title="No projects found"
              description="Try a different search term or domain."
              action={
                <Button variant="secondary" onClick={() => setParams(new URLSearchParams(), { replace: true })}>
                  Clear filters
                </Button>
              }
            />
          </div>
        ) : (
          <motion.ul layout className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p, i) => (
                <motion.li
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <ProjectCard project={p} index={i} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}

        <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-4xl border border-dashed border-ink/20 p-7 sm:flex-row sm:items-center sm:p-10">
          <div>
            <h2 className="text-2xl font-medium tracking-tight">Built something with the community?</h2>
            <p className="mt-2 text-ink-soft">Add it to <code className="rounded bg-white px-1.5 py-0.5 font-mono text-sm">src/data/projects.ts</code> and open a pull request.</p>
          </div>
          <Button href={`${site.websiteRepo}/blob/main/CONTRIBUTING.md`} variant="primary">
            How to contribute
          </Button>
        </div>
      </section>
    </>
  );
}
