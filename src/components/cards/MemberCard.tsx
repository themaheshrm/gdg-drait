import { UserRound } from 'lucide-react';
import type { TeamMember } from '@/types';
import { getDomain } from '@/data/domains';
import { accentStyles, accentAt } from '@/utils/accent';
import { initials } from '@/utils/format';
import { GitHubIcon, LinkedInIcon } from '@/assets/icons/BrandIcons';
import { Chip, PlaceholderBadge } from '@/components/common/Chip';
import { cn } from '@/utils/cn';

const frames = ['rounded-[40%_60%_60%_40%/50%]', 'rounded-full', 'rounded-[2rem]', 'rounded-[50%_50%_2rem_50%]'];

export function MemberAvatar({ member, index = 0, className }: { member: TeamMember; index?: number; className?: string }) {
  const accent = getDomain(member.domain)?.accent ?? accentAt(index);
  const a = accentStyles[accent];
  return (
    <div className={cn('relative aspect-square overflow-hidden', frames[index % frames.length], a.pastel, className)}>
      {member.photo ? (
        <img src={member.photo} alt={member.name ? `Photo of ${member.name}` : ''} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center" aria-hidden>
          <div className="dot-grid absolute inset-0 opacity-40" />
          {member.name ? (
            <span className="relative text-4xl font-medium text-ink">{initials(member.name)}</span>
          ) : (
            <UserRound className="relative h-1/3 w-1/3 text-ink/50" strokeWidth={1.5} />
          )}
        </div>
      )}
    </div>
  );
}

export function MemberCard({ member, index = 0, compact = false }: { member: TeamMember; index?: number; compact?: boolean }) {
  const domain = getDomain(member.domain);
  const isPlaceholder = !member.name;

  return (
    <article className="group flex h-full flex-col rounded-4xl bg-white p-4 shadow-card ring-1 ring-ink/[0.04] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift sm:p-5">
      <div className="relative">
        <MemberAvatar member={member} index={index} className="transition-[border-radius] duration-500 group-hover:rounded-[2rem]" />
        {isPlaceholder && <PlaceholderBadge className="absolute left-3 top-3" label="To be announced" />}
      </div>
      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <h3 className={cn('font-medium tracking-tight', compact ? 'text-lg' : 'text-xl', isPlaceholder && 'text-ink-muted')}>
          {member.name ?? 'Name to be announced'}
        </h3>
        <p className="mt-1 text-sm text-ink-soft">{member.role}</p>
        {domain && !compact && (
          <div className="mt-3">
            <Chip accent={domain.accent}>{domain.shortName}</Chip>
          </div>
        )}
        {!compact && <p className="mt-3 text-sm text-ink-soft">{member.bio ?? 'Profile details will be added once the team is announced.'}</p>}

        {(member.github || member.linkedin) && (
          <div className="mt-auto flex gap-2 pt-4">
            {member.github && (
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on GitHub (opens in a new tab)`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 transition-colors hover:bg-ink hover:text-white"
              >
                <GitHubIcon className="h-4 w-4" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn (opens in a new tab)`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 transition-colors hover:bg-gblue-deep hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
