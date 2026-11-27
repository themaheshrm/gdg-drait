import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { team, teamGroups, teamYear } from '@/data/team';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { PlaceholderBadge } from '@/components/common/Chip';
import { MemberCard } from '@/components/cards/MemberCard';
import { JoinCTA } from '@/components/sections/JoinCTA';
import { cn } from '@/utils/cn';

export default function TeamPage() {
  useDocumentTitle('Team', 'Meet the organizers, domain leads, co-leads and core team of GDG on Campus Dr. AIT.');
  let running = 0;
  return (
    <>
      <PageHero
        eyebrow="Our team"
        accent="ink"
        title="The people who make it happen."
        description="Organizers, domain leads, co-leads and core members — students who give their time to help others learn and build."
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-white px-4 py-2 font-mono text-sm">Team {teamYear ?? 'year to be announced'}</span>
          {!teamYear && <PlaceholderBadge label="Team list pending" />}
        </div>
      </PageHero>

      <div className="container-site space-y-20 pb-20 sm:space-y-28">
        {teamGroups.map((g) => {
          const members = team.filter((m) => m.group === g.id);
          if (!members.length) return null;
          const start = running;
          running += members.length;
          return (
            <section key={g.id} aria-labelledby={`team-${g.id}`}>
              <Reveal className="mb-10 flex flex-col gap-3 border-t-2 border-ink pt-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 id={`team-${g.id}`} className="text-display-sm">
                    {g.title}
                  </h2>
                  <p className="mt-2 max-w-xl text-ink-soft">{g.description}</p>
                </div>
                <span className="font-mono text-sm text-ink-muted">{String(members.length).padStart(2, '0')} members</span>
              </Reveal>
              <ul
                className={cn(
                  'grid gap-3 sm:gap-4',
                  g.id === 'organizer' ? 'grid-cols-1 min-[480px]:grid-cols-2 sm:max-w-xl lg:max-w-2xl' : 'grid-cols-2 md:grid-cols-3 xl:grid-cols-5',
                  g.id === 'core' && 'xl:grid-cols-4',
                )}
              >
                {members.map((m, i) => (
                  <Reveal as="li" key={m.id} delay={(i % 5) * 0.05}>
                    <MemberCard member={m} index={start + i} />
                  </Reveal>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <JoinCTA title="Want to be on this page next year?" />
    </>
  );
}
