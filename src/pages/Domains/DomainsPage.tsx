import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import type { Domain } from '@/types';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { domains } from '@/data/domains';
import { projects } from '@/data/projects';
import { resources } from '@/data/resources';
import { getMember } from '@/data/team';
import { accentStyles } from '@/utils/accent';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { PlaceholderBadge } from '@/components/common/Chip';
import { MemberAvatar } from '@/components/cards/MemberCard';
import { Bracket, Circle, HalfCircle, QuarterCircle, Ring } from '@/components/common/Shapes';
import { JoinCTA } from '@/components/sections/JoinCTA';
import { cn } from '@/utils/cn';

const ids = domains.map((d) => d.id);

function DomainArt({ domain, index }: { domain: Domain; index: number }) {
  const c = domain.accent === 'ink' ? '#1E1E1E' : accentStyles[domain.accent].hex;
  const sets = [
    <>
      <Bracket direction="left" className="absolute left-[8%] top-[18%] h-[55%] w-[45%]" color={c} />
      <Bracket direction="right" className="absolute right-[8%] top-[28%] h-[55%] w-[45%]" color="#1E1E1E" />
    </>,
    <>
      <QuarterCircle className="absolute left-[10%] top-[10%] h-[55%] w-[55%]" color={c} />
      <Circle className="absolute bottom-[12%] right-[14%] h-[30%] w-[30%]" color="#1E1E1E" />
    </>,
    <>
      <Ring className="absolute left-[14%] top-[14%] h-[60%] w-[60%]" color={c} />
      <Circle className="absolute bottom-[14%] right-[12%] h-[22%] w-[22%]" color="#F9AB00" />
    </>,
    <>
      <HalfCircle className="absolute bottom-[10%] left-[10%] h-[40%] w-[80%]" color={c} />
      <Circle className="absolute right-[18%] top-[14%] h-[26%] w-[26%]" color="#4285F4" />
    </>,
    <>
      <Circle className="absolute left-[12%] top-[12%] h-[34%] w-[34%]" color="#EA4335" />
      <QuarterCircle className="absolute bottom-[12%] right-[12%] h-[42%] w-[42%] rotate-180" color="#F9AB00" />
      <Ring className="absolute bottom-[14%] left-[16%] h-[30%] w-[30%]" color="#4285F4" />
      <Circle className="absolute right-[18%] top-[18%] h-[18%] w-[18%]" color="#34A853" />
    </>,
  ];
  return (
    <div aria-hidden className="relative aspect-square w-full">
      {sets[index % sets.length]}
    </div>
  );
}

function DomainSection({ domain, index }: { domain: Domain; index: number }) {
  const a = accentStyles[domain.accent];
  const domainProjects = projects.filter((p) => p.domain === domain.id);
  const domainResources = resources.filter((r) => r.category === domain.resourceCategory).slice(0, 4);
  const leads = domain.leadIds.map(getMember).filter(Boolean);

  return (
    <section id={domain.id} aria-labelledby={`${domain.id}-title`} className="scroll-mt-40 py-14 sm:py-20">
      <div className="container-site">
        {/* Header band */}
        <Reveal className={cn('relative grid overflow-hidden rounded-5xl p-7 sm:p-12 lg:grid-cols-12 lg:gap-10 lg:p-14', domain.accent === 'ink' ? 'bg-white' : a.pastel)}>
          <div className="dot-grid absolute inset-0 opacity-40" aria-hidden />
          <div className="relative lg:col-span-8">
            <p className="font-mono text-sm text-ink-soft">
              {String(index + 1).padStart(2, '0')} / {String(domains.length).padStart(2, '0')} · {domain.shortName}
            </p>
            <h2 id={`${domain.id}-title`} className="mt-4 text-display-md">
              {domain.name}
            </h2>
            <p className="mt-3 text-xl font-medium text-ink-soft">{domain.tagline}</p>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink">{domain.intro}</p>
          </div>
          <div className="relative mx-auto mt-8 hidden w-56 sm:block lg:col-span-4 lg:mt-0 lg:w-full lg:max-w-[18rem] lg:self-center">
            <DomainArt domain={domain} index={index} />
          </div>
        </Reveal>

        {/* Details */}
        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <Reveal className="rounded-4xl bg-white p-7 shadow-card sm:p-8 lg:col-span-7">
            <h3 className="eyebrow">What members learn</h3>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {domain.learn.map((l) => (
                <li key={l} className="flex gap-3">
                  <span className={cn('mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full', domain.accent === 'ink' ? 'bg-offwhite' : a.pastel)}>
                    <Check className="h-3.5 w-3.5" aria-hidden />
                  </span>
                  <span className="text-ink-soft">{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4 lg:col-span-5">
            <Reveal delay={0.05} className="rounded-4xl bg-white p-7 shadow-card sm:p-8">
              <h3 className="eyebrow">Technologies</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {domain.technologies.map((t) => (
                  <li key={t} className="rounded-full border border-ink/10 bg-offwhite px-3 py-1.5 font-mono text-sm">
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="rounded-4xl bg-white p-7 shadow-card sm:p-8">
              <h3 className="eyebrow">Activities</h3>
              <ul className="mt-5 space-y-2.5">
                {domain.activities.map((act) => (
                  <li key={act} className="flex items-center gap-3 text-ink-soft">
                    <span aria-hidden className={cn('h-1.5 w-1.5 shrink-0 rounded-full', a.solid.split(' ')[0])} />
                    {act}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal className="rounded-4xl bg-white p-7 shadow-card sm:p-8 lg:col-span-4">
            <h3 className="eyebrow">Domain lead</h3>
            <ul className="mt-5 space-y-4">
              {leads.map((m) => (
                <li key={m!.id} className="flex items-center gap-4">
                  <MemberAvatar member={m!} index={index} className="w-14 shrink-0 rounded-2xl" />
                  <div className="min-w-0">
                    <p className={cn('font-medium', !m!.name && 'text-ink-muted')}>{m!.name ?? 'To be announced'}</p>
                    <p className="text-sm text-ink-soft">{m!.role}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link to="/team" className="mt-6 inline-flex items-center gap-1 text-sm font-medium hover:underline">
              Meet the team <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>

          <Reveal delay={0.05} className="rounded-4xl bg-white p-7 shadow-card sm:p-8 lg:col-span-4">
            <h3 className="eyebrow">Projects</h3>
            {domainProjects.length ? (
              <ul className="mt-5 divide-y divide-ink/10">
                {domainProjects.map((p) => (
                  <li key={p.slug} className="flex items-center justify-between gap-3 py-3">
                    <span className={cn('truncate', p.isPlaceholder ? 'text-ink-muted' : 'font-medium')}>{p.name}</span>
                    {p.isPlaceholder ? <PlaceholderBadge /> : p.githubUrl ? (
                      <a href={p.githubUrl} target="_blank" rel="noopener noreferrer" className="shrink-0 text-sm font-medium hover:underline" aria-label={`${p.name} repository (opens in a new tab)`}>
                        Code ↗
                      </a>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-5 text-ink-soft">Projects will be listed here soon.</p>
            )}
            <Link to={`/projects?domain=${domain.id}`} className="mt-6 inline-flex items-center gap-1 text-sm font-medium hover:underline">
              Browse {domain.shortName} projects <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="rounded-4xl bg-white p-7 shadow-card sm:p-8 lg:col-span-4">
            <h3 className="eyebrow">Learning resources</h3>
            <ul className="mt-5 space-y-1">
              {domainResources.map((r) => (
                <li key={r.url}>
                  <a href={r.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-3 rounded-xl py-2 hover:text-gblue-deep">
                    <span>{r.title}</span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
            <Link to={`/resources#${domain.resourceCategory}`} className="mt-4 inline-flex items-center gap-1 text-sm font-medium hover:underline">
              All {domain.shortName} resources <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default function DomainsPage() {
  useDocumentTitle('Domains', 'Technical domains at GDG on Campus Dr. AIT: DSA, Web Development, AI/ML, Cloud Computing, and Design & Creativity.');
  const active = useScrollSpy(ids);

  return (
    <>
      <PageHero
        eyebrow="Technical domains"
        accent="green"
        title="Find your track. Go deep."
        description="Five domains, each with a roadmap, hands-on activities, projects and a lead to guide you. Join one — or explore them all."
      />

      <nav aria-label="Domains" className="sticky top-[5.25rem] z-30 sm:top-[5.75rem]">
        <div className="container-site">
          <ul className="no-scrollbar mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-ink/[0.06] bg-white/90 p-1.5 shadow-card backdrop-blur-xl">
            {domains.map((d) => (
              <li key={d.id}>
                <a
                  href={`#${d.id}`}
                  aria-current={active === d.id ? 'true' : undefined}
                  className={cn(
                    'inline-flex h-9 items-center gap-2 whitespace-nowrap rounded-full px-4 text-sm font-medium transition-colors',
                    active === d.id ? 'bg-ink text-white' : 'text-ink-soft hover:bg-offwhite hover:text-ink',
                  )}
                >
                  <span aria-hidden className={cn('h-2 w-2 rounded-full', accentStyles[d.accent].solid.split(' ')[0], d.accent === 'ink' && active === d.id && 'bg-white')} />
                  {d.shortName}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {domains.map((d, i) => (
        <DomainSection key={d.id} domain={d} index={i} />
      ))}

      <JoinCTA title="Found your domain? Let’s build." />
    </>
  );
}
