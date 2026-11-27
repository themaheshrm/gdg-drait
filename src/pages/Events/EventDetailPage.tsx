import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, CalendarDays, Check, Clock, Link2, MapPin, Tag } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { events, getEvent } from '@/data/events';
import { getDomain } from '@/data/domains';
import { eventCategoryAccent, eventCategoryLabel } from '@/utils/categories';
import { formatDate, statusLabel } from '@/utils/format';
import { SmartImage } from '@/components/common/SmartImage';
import { Chip, PlaceholderBadge } from '@/components/common/Chip';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { EventCard, EventStatus } from '@/components/cards/EventCard';
import NotFoundPage from '@/pages/NotFound/NotFoundPage';

export default function EventDetailPage() {
  const { slug } = useParams();
  const event = getEvent(slug);
  useDocumentTitle(event?.title ?? 'Event not found', event?.summary);
  const [copied, setCopied] = useState(false);

  if (!event) return <NotFoundPage message="We couldn’t find that event. It may have been renamed or removed." />;

  const accent = eventCategoryAccent[event.category];
  const domain = getDomain(event.domain);
  const related = events.filter((e) => e.slug !== event.slug && (e.category === event.category || e.domain === event.domain)).slice(0, 3);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt('Copy this link:', window.location.href);
    }
  };

  const meta = [
    { icon: CalendarDays, label: 'Date', value: formatDate(event.date, event.endDate) },
    { icon: Clock, label: 'Time', value: event.time ?? 'Time to be announced' },
    { icon: MapPin, label: 'Venue', value: event.venue ?? 'Venue to be announced' },
    { icon: Tag, label: 'Category', value: eventCategoryLabel(event.category) },
  ];

  return (
    <article className="pb-16 pt-28 sm:pt-36">
      <div className="container-site">
        <Link to="/events" className="inline-flex items-center gap-2 rounded-full px-1 text-sm font-medium text-ink-soft hover:text-ink">
          <ArrowLeft className="h-4 w-4" aria-hidden /> All events
        </Link>

        <header className="mt-6 max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <EventStatus status={event.status} />
            <Chip accent={accent}>{eventCategoryLabel(event.category)}</Chip>
            {domain && (
              <Chip tone="outline" mono>
                {domain.shortName}
              </Chip>
            )}
            {event.isPlaceholder && <PlaceholderBadge label="Placeholder event" />}
          </div>
          <h1 className="mt-5 text-display-lg">{event.title}</h1>
          <p className="mt-5 text-xl text-ink-soft">{event.summary}</p>
        </header>

        <Reveal className="mt-10 aspect-[16/9] overflow-hidden rounded-5xl shadow-lift sm:aspect-[21/9]">
          <SmartImage src={event.image} alt={`${event.title} banner`} accent={accent} seed={2} placeholderLabel="Event banner placeholder" eager className="h-full w-full" />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-medium tracking-tight">About this event</h2>
            <div className="mt-4 space-y-4 text-lg leading-relaxed text-ink-soft">
              {event.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {event.agenda && event.agenda.length > 0 && (
              <>
                <h2 className="mt-10 text-2xl font-medium tracking-tight">Agenda</h2>
                <ol className="mt-4 space-y-3">
                  {event.agenda.map((item, i) => (
                    <li key={item} className="flex gap-4 rounded-2xl bg-white p-4">
                      <span className="font-mono text-sm text-ink-muted">{String(i + 1).padStart(2, '0')}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ol>
              </>
            )}

            {event.speakers && event.speakers.length > 0 && (
              <>
                <h2 className="mt-10 text-2xl font-medium tracking-tight">Speakers</h2>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {event.speakers.map((s) => (
                    <li key={s.name} className="rounded-2xl bg-white p-4">
                      <p className="font-medium">{s.name}</p>
                      {s.role && <p className="text-sm text-ink-soft">{s.role}</p>}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <aside className="lg:col-span-4" aria-label="Event details">
            <div className="sticky top-28 rounded-4xl bg-white p-6 shadow-card sm:p-7">
              <dl className="space-y-4">
                {meta.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex gap-3">
                    <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-offwhite">
                      <Icon className="h-4 w-4" aria-hidden />
                    </span>
                    <div>
                      <dt className="font-mono text-xs uppercase tracking-wider text-ink-muted">{label}</dt>
                      <dd className="mt-0.5">{value}</dd>
                    </div>
                  </div>
                ))}
                <div className="flex gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-offwhite">
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-muted">Status</dt>
                    <dd className="mt-0.5">{statusLabel[event.status]}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6 flex flex-col gap-2 border-t border-ink/10 pt-6">
                {event.registrationUrl && event.status !== 'completed' ? (
                  <Button href={event.registrationUrl} size="lg" icon={<ArrowUpRight className="h-5 w-5" />}>
                    Register now
                  </Button>
                ) : (
                  <p className="rounded-2xl bg-offwhite p-4 text-sm text-ink-soft">
                    {event.status === 'completed' ? 'This event has ended.' : 'The registration link will be published here once registrations open.'}
                  </p>
                )}
                <Button variant="secondary" onClick={copyLink} icon={copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />} iconPosition="start">
                  {copied ? 'Link copied' : 'Copy event link'}
                </Button>
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section aria-labelledby="related-title" className="mt-24">
            <h2 id="related-title" className="text-display-sm">
              More events
            </h2>
            <ul className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {related.map((e, i) => (
                <li key={e.slug} className="h-full">
                  <EventCard event={e} index={i + 1} />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
