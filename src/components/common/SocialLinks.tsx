import { socials } from '@/data/site';
import { GitHubIcon, InstagramIcon, LinkedInIcon } from '@/assets/icons/BrandIcons';
import { cn } from '@/utils/cn';

const items = [
  { key: 'github', label: 'GitHub', Icon: GitHubIcon, url: socials.github },
  { key: 'linkedin', label: 'LinkedIn', Icon: LinkedInIcon, url: socials.linkedin },
  { key: 'instagram', label: 'Instagram', Icon: InstagramIcon, url: socials.instagram },
] as const;

/**
 * Social icons. Platforms without a confirmed URL render as a muted,
 * non-interactive "coming soon" state instead of a dead link.
 */
export function SocialLinks({ className, size = 'md', showLabels = false }: { className?: string; size?: 'sm' | 'md'; showLabels?: boolean }) {
  const box = size === 'sm' ? 'h-10 w-10' : 'h-11 w-11';
  return (
    <ul className={cn('flex flex-wrap items-center gap-2', className)}>
      {items.map(({ key, label, Icon, url }) =>
        url ? (
          <li key={key}>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${label} (opens in a new tab)`}
              className={cn(
                'inline-flex items-center justify-center gap-2 rounded-full border border-ink/10 bg-white text-ink transition-colors hover:border-ink hover:bg-ink hover:text-white',
                showLabels ? 'h-11 px-4 text-sm font-medium' : box,
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              {showLabels && <span>{label}</span>}
            </a>
          </li>
        ) : (
          <li key={key}>
            <span
              title={`${label} link coming soon`}
              className={cn(
                'inline-flex cursor-default items-center justify-center gap-2 rounded-full border border-dashed border-ink/25 text-ink/45',
                showLabels ? 'h-11 px-4 text-sm' : box,
              )}
            >
              <Icon className="h-[18px] w-[18px]" />
              <span className={showLabels ? '' : 'sr-only'}>{label} — coming soon</span>
            </span>
          </li>
        ),
      )}
    </ul>
  );
}
