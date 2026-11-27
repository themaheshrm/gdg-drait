import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, CalendarDays, MapPin } from 'lucide-react';
import type { GdgEvent } from '@/types';
import { SmartImage } from '@/components/common/SmartImage';
import { Chip, PlaceholderBadge } from '@/components/common/Chip';
import { eventCategoryAccent, eventCategoryLabel } from '@/utils/categories';
import { formatDate, statusLabel } from '@/utils/format';
import { getDomain } from '@/data/domains';
import { cn } from '@/utils/cn';

const statusDot: Record<GdgEvent['status'], string> = {
  upcoming: 'bg-ggreen',
  ongoing: 'bg-gred animate-pulse',
  completed: 'bg-ink-muted',
  tba: 'bg-gyellow',
};

export function EventStatus({ status, className }: { status: GdgEvent['status']; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-xs font-medium text-ink shadow-sm', className)}>
      <span aria-hidden className={cn('h-2 w-2 rounded-full', statusDot[status])} />
      {statusLabel[status]}
    </span>
  );
}

interface EventCardProps {
  event: GdgEvent;
  index?: number;
  layout?: 'vertical' | 'horizontal';
}

export function EventCard({ event, index = 0, layout = 'vertical' }: EventCardProps) {
  const accent = eventCategoryAccent[event.category];
  const domain = getDomain(event.domain);
  const horizontal = layout === 'horizontal';

  return (
    <article
      className={cn(
        'group relative flex h-full overflow-hidden rounded-4xl bg-white shadow-card ring-1 ring-ink/[0.04] transition-[box-shadow,transform] duration-300 hover:-translate-y-1 hover:shadow-lift',
        horizontal ? 'flex-col md:flex-row' : 'flex-col',
      )}
    >
      <div className={cn('relative shrink-0 overflow-hidden', horizontal ? 'aspect-[16/10] md:aspect-auto md:w-[46%]' : 'aspect-[16/10]')}>
        <SmartImage
          src={event.image}
          alt={event.image ? `${event.title} banner` : `${event.title} — banner placeholder`}
          accent={accent}
          seed={index}
          placeholderLabel="Event banner placeholder"
          className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <EventStatus status={event.status} />
          {event.isPlaceholder && <PlaceholderBadge />}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex flex-wrap gap-2">
          <Chip accent={accent}>{eventCategoryLabel(event.category)}</Chip>
          {domain && (
            <Chip tone="outline" mono>
              {domain.shortName}
            </Chip>
          )}
        </div>
        <h3 className={cn('font-medium tracking-tight', horizontal ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl')}>
          <Link to={`/events/${event.slug}`} className="outline-none after:absolute after:inset-0 after:rounded-4xl after:content-[''] focus-visible:after:ring-2 focus-visible:after:ring-gblue">
            {event.title}
          </Link>
        </h3>
        <p className="mt-3 line-clamp-3 text-ink-soft">{event.summary}</p>

        <dl className="mt-5 space-y-2 text-sm text-ink-soft">
          <div className="flex items-center gap-2">
            <dt className="sr-only">Date</dt>
            <CalendarDays className="h-4 w-4 text-ink-muted" aria-hidden />
            <dd>{formatDate(event.date, event.endDate)}</dd>
          </div>
          <div className="flex items-center gap-2">
            <dt className="sr-only">Venue</dt>
            <MapPin className="h-4 w-4 text-ink-muted" aria-hidden />
            <dd>{event.venue ?? 'Venue to be announced'}</dd>
          </div>
        </dl>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-ink">
            View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
          </span>
          {event.registrationUrl && event.status !== 'completed' && (
            <a
              href={event.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex h-9 items-center gap-1 rounded-full bg-ink px-4 text-sm font-medium text-white hover:bg-gblue-deep"
            >
              Register <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only">for {event.title} (opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
