import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import type { EventCategory } from '@/types';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { eventCategories, events, isPastEvent } from '@/data/events';
import { PageHero } from '@/components/common/PageHero';
import { FilterChips } from '@/components/common/FilterChips';
import { EmptyState } from '@/components/common/EmptyState';
import { Button } from '@/components/common/Button';
import { EventCard } from '@/components/cards/EventCard';
import { JoinCTA } from '@/components/sections/JoinCTA';

type When = 'upcoming' | 'past' | 'all';
type Cat = EventCategory | 'all';

const whenOptions: { id: When; label: string }[] = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'past', label: 'Previous events' },
  { id: 'all', label: 'All' },
];

export default function EventsPage() {
  useDocumentTitle('Events', 'Workshops, bootcamps, hackathons, guest sessions and community meetups by GDG on Campus Dr. AIT.');
  const [params, setParams] = useSearchParams();
  const when = (whenOptions.some((w) => w.id === params.get('when')) ? params.get('when') : 'upcoming') as When;
  const cat = (eventCategories.some((c) => c.id === params.get('category')) ? params.get('category') : 'all') as Cat;

  const update = (key: string, value: string, fallback: string) => {
    const next = new URLSearchParams(params);
    if (value === fallback) next.delete(key);
    else next.set(key, value);
    setParams(next, { replace: true });
  };

  const byWhen = useMemo(
    () => events.filter((e) => (when === 'all' ? true : when === 'past' ? isPastEvent(e) : !isPastEvent(e))),
    [when],
  );
  const filtered = useMemo(() => byWhen.filter((e) => cat === 'all' || e.category === cat), [byWhen, cat]);

  const catOptions = [
    { id: 'all' as Cat, label: 'All categories', count: byWhen.length },
    ...eventCategories.map((c) => ({ id: c.id as Cat, label: c.label, count: byWhen.filter((e) => e.category === c.id).length })),
  ];

  return (
    <>
      <PageHero
        eyebrow="Events"
        accent="red"
        title="Show up. Skill up."
        description="Technical workshops, bootcamps, hackathons, guest sessions and community meetups — everything happening at GDG on Campus Dr. AIT."
      />

      <section aria-labelledby="event-listing" className="container-site pb-20 sm:pb-28">
        <h2 id="event-listing" className="sr-only">
          Event listing
        </h2>
        <div className="flex flex-col gap-4 rounded-4xl bg-white p-4 shadow-card sm:p-5">
          <FilterChips label="Filter by time" layoutId="events-when" options={whenOptions} value={when} onChange={(v) => update('when', v, 'upcoming')} />
          <div className="h-px bg-ink/10" />
          <FilterChips label="Filter by category" layoutId="events-cat" options={catOptions} value={cat} onChange={(v) => update('category', v, 'all')} />
        </div>

        <p className="mt-8 font-mono text-sm text-ink-muted" aria-live="polite">
          Showing {filtered.length} {filtered.length === 1 ? 'event' : 'events'}
        </p>

        {filtered.length === 0 ? (
          <div className="mt-6">
            <EmptyState
              title={when === 'past' ? 'No previous events published yet' : 'No events match these filters'}
              description={
                when === 'past'
                  ? 'Recaps of past events will be added here by the team.'
                  : 'Try another category, or check back soon for new announcements.'
              }
              action={
                <Button variant="secondary" onClick={() => setParams(new URLSearchParams(), { replace: true })}>
                  Reset filters
                </Button>
              }
            />
          </div>
        ) : (
          <motion.ul layout className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((e, i) => (
                <motion.li
                  key={e.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <EventCard event={e} index={i} />
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </section>

      <JoinCTA title="Never miss an event." />
    </>
  );
}
