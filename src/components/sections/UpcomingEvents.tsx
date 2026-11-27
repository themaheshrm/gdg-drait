import { ArrowRight } from 'lucide-react';
import { events } from '@/data/events';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { EmptyState } from '@/components/common/EmptyState';
import { EventCard } from '@/components/cards/EventCard';

export function UpcomingEvents() {
  const upcoming = events
    .filter((e) => e.status !== 'completed')
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
    .slice(0, 3);

  return (
    <section aria-labelledby="upcoming-title" className="bg-white py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Events & workshops"
          title={<span id="upcoming-title">What’s coming up</span>}
          description="Workshops, bootcamps, hackathons and sessions — announced here first."
          action={
            <Button to="/events" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              All events
            </Button>
          }
        />
        {upcoming.length === 0 ? (
          <div className="mt-12">
            <EmptyState title="No upcoming events right now" description="New events are announced regularly. Check back soon!" />
          </div>
        ) : (
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {upcoming.map((e, i) => (
              <Reveal key={e.slug} delay={i * 0.08} className={i === 0 ? 'lg:col-span-2' : ''}>
                <EventCard event={e} index={i} layout={i === 0 ? 'horizontal' : 'vertical'} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
