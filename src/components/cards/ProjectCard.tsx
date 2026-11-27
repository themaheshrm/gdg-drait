import { ArrowUpRight, Users } from 'lucide-react';
import type { Project } from '@/types';
import { getDomain } from '@/data/domains';
import { accentStyles } from '@/utils/accent';
import { Chip, PlaceholderBadge } from '@/components/common/Chip';
import { GitHubIcon } from '@/assets/icons/BrandIcons';
import { Bracket, Circle, QuarterCircle, Ring } from '@/components/common/Shapes';
import { cn } from '@/utils/cn';

const shapeSets = [
  (c: string) => (
    <>
      <QuarterCircle className="absolute -right-4 -top-4 h-32 w-32 rotate-90" color={c} />
      <Circle className="absolute right-32 top-16 h-6 w-6" color="#1E1E1E" />
    </>
  ),
  (c: string) => (
    <>
      <Ring className="absolute -right-6 top-4 h-32 w-32" color={c} />
      <Circle className="absolute bottom-12 right-4 h-8 w-8" color="#1E1E1E" />
    </>
  ),
  (c: string) => (
    <>
      <Bracket direction="left" className="absolute right-16 top-6 h-20 w-20" color={c} />
      <Bracket direction="right" className="absolute right-2 top-6 h-20 w-20" color="#1E1E1E" />
    </>
  ),
];

export function ProjectCard({ project, index = 0, className }: { project: Project; index?: number; className?: string }) {
  const domain = getDomain(project.domain);
  const accent = domain?.accent ?? 'blue';
  const a = accentStyles[accent];
  const color = accent === 'ink' ? '#EA4335' : a.hex;
  const repoPath = project.githubUrl?.replace('https://github.com/', '');

  return (
    <article className={cn('group relative flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-ink/[0.04] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift', className)}>
      <div className={cn('relative h-44 overflow-hidden p-6', a.pastel)}>
        <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
        <div className="transition-transform duration-500 group-hover:scale-105" aria-hidden>
          {shapeSets[index % shapeSets.length](color)}
        </div>
        <div className="relative flex flex-wrap items-center gap-2">
          {domain && <Chip tone="outline" className="bg-white">{domain.shortName}</Chip>}
          {project.isPlaceholder && <PlaceholderBadge />}
          {project.status && !project.isPlaceholder && (
            <Chip tone="outline" mono className="bg-white capitalize">
              {project.status}
            </Chip>
          )}
        </div>
        <p className="absolute bottom-5 left-6 max-w-[70%] truncate font-mono text-xs text-ink-soft">
          {repoPath ? `~/${repoPath}` : `~/${project.slug}`}
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-2xl font-medium tracking-tight">{project.name}</h3>
        <p className="mt-3 text-ink-soft">{project.description}</p>

        <div className="mt-5">
          <p className="sr-only">Technology stack</p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((t) => (
              <li key={t} className="rounded-md bg-offwhite px-2 py-1 font-mono text-xs text-ink-soft">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 flex items-start gap-2 text-sm text-ink-soft">
          <Users className="mt-0.5 h-4 w-4 shrink-0 text-ink-muted" aria-hidden />
          <span>
            <span className="sr-only">Contributors: </span>
            {project.contributors.length ? project.contributors.join(', ') : 'Contributors to be added'}
          </span>
        </p>

        {(project.githubUrl || project.demoUrl) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-white transition-colors hover:bg-gblue-deep"
              >
                <GitHubIcon className="h-4 w-4" /> Repository
                <span className="sr-only">of {project.name} (opens in a new tab)</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-ink/15 px-4 text-sm font-medium transition-colors hover:border-ink"
              >
                Live demo <ArrowUpRight className="h-4 w-4" aria-hidden />
                <span className="sr-only">of {project.name} (opens in a new tab)</span>
              </a>
            )}
          </div>
        )}
        {!project.githubUrl && !project.demoUrl && (
          <p className="mt-auto pt-6 font-mono text-xs text-ink-muted">Repository &amp; demo links will appear here once published.</p>
        )}
      </div>
    </article>
  );
}
