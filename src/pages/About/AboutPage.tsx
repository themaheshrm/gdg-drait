import { ArrowRight, Check } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { site } from '@/data/site';
import { culture, journey, mission, pillars, vision, whatWeDo, whyGdg } from '@/data/about';
import { accentStyles, accentAt } from '@/utils/accent';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { SectionHeading } from '@/components/common/SectionHeading';
import { SmartImage } from '@/components/common/SmartImage';
import { PlaceholderBadge } from '@/components/common/Chip';
import { Button } from '@/components/common/Button';
import { Circle, QuarterCircle, Ring } from '@/components/common/Shapes';
import { JoinCTA } from '@/components/sections/JoinCTA';
import { cn } from '@/utils/cn';

export default function AboutPage() {
  useDocumentTitle('About', `About ${site.name}: our vision, mission, learning culture and journey.`);
  return (
    <>
      <PageHero
        eyebrow="About us"
        accent="blue"
        title={
          <>
            Where developers <span className="text-gblue-deep">learn</span>, <span className="text-gred-deep">build</span> and{' '}
            <span className="text-ggreen-deep">grow</span> together.
          </>
        }
        description={`${site.name} is the Google Developer Group on Campus chapter at ${site.college}, ${site.city} — a student-led community for anyone curious about technology.`}
      />

      {/* Intro + image */}
      <section aria-labelledby="about-community" className="container-site pb-20 sm:pb-28">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="relative lg:col-span-6">
            <QuarterCircle className="absolute -left-4 -top-4 z-0 h-24 w-24" color="#F9AB00" />
            <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-lift">
              <SmartImage src={null} alt="GDG on Campus Dr. AIT members at a session" accent="green" seed={1} placeholderLabel="Community photo placeholder" className="h-full w-full" />
            </div>
            <Circle className="absolute -bottom-4 right-10 z-20 h-12 w-12" color="#4285F4" />
          </Reveal>
          <Reveal className="lg:col-span-6" delay={0.1}>
            <h2 id="about-community" className="text-display-sm">
              About our community
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink-soft">
              <p>
                We bring together passionate minds to explore technology, build real-world projects and contribute to open source. Our
                goal is to create an ecosystem where everyone can learn, collaborate, share knowledge and turn ideas into meaningful
                solutions.
              </p>
              <p>
                Whether you are writing your first line of code or shipping your tenth project, there is a place for you here — as a
                learner, a mentor, a speaker or a builder.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Vision & mission */}
      <section aria-label="Vision and mission" className="container-site pb-20 sm:pb-28">
        <div className="grid gap-4 lg:grid-cols-5">
          <Reveal className="relative overflow-hidden rounded-5xl bg-ink p-8 text-white sm:p-12 lg:col-span-2">
            <Ring className="absolute -bottom-16 -right-16 h-56 w-56 opacity-90" color="#4285F4" />
            <p className="eyebrow relative text-white/60">Vision</p>
            <p className="relative mt-6 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">{vision}</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-5xl bg-white p-8 shadow-card sm:p-12 lg:col-span-3">
            <p className="eyebrow">Mission</p>
            <ul className="mt-6 space-y-5">
              {mission.map((m, i) => (
                <li key={m} className="flex gap-4">
                  <span className={cn('mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full', accentStyles[accentAt(i)].pastel)}>
                    <Check className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="text-lg text-ink-soft">{m}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* What we do */}
      <section aria-labelledby="what-we-do" className="bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading
            eyebrow="What we do"
            title={<span id="what-we-do">Learn together. Build together. Make an impact.</span>}
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 0.06} className="rounded-4xl border border-ink/[0.08] bg-offwhite/60 p-6">
                <span aria-hidden className={cn('block h-2.5 w-full rounded-full', accentStyles[p.accent].solid.split(' ')[0])} />
                <h3 className="mt-10 text-2xl font-medium uppercase tracking-tight">{p.title}</h3>
                <p className="mt-2 text-ink-soft">{p.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Why GDG */}
      <section aria-labelledby="why-gdg" className="container-site py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">Why GDG?</p>
            <h2 id="why-gdg" className="text-display-md">
              More than a club.
            </h2>
            <p className="mt-5 text-lg text-ink-soft">A community that grows you as a developer and as a person.</p>
          </Reveal>
          <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:col-span-8">
            {whyGdg.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 0.06} className="border-t-2 border-ink pt-6">
                <span className="font-mono text-sm text-ink-muted">0{i + 1}</span>
                <h3 className="mt-3 text-2xl font-medium tracking-tight">{w.title}</h3>
                <p className="mt-2 text-ink-soft">{w.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Learning culture */}
      <section aria-labelledby="culture" className="px-3 sm:px-5">
        <div className="relative mx-auto max-w-site overflow-hidden rounded-5xl bg-ggreen-pastel px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
          <QuarterCircle className="absolute -right-4 -top-4 h-40 w-40 rotate-90" color="#34A853" />
          <Reveal className="relative max-w-2xl">
            <p className="eyebrow mb-4 text-ink-soft">Our learning culture</p>
            <h2 id="culture" className="text-display-md">
              How we learn
            </h2>
          </Reveal>
          <ul className="relative mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((c, i) => (
              <Reveal as="li" key={c.title} delay={i * 0.06} className="rounded-4xl bg-white p-6">
                <h3 className="text-xl font-medium tracking-tight">{c.title}</h3>
                <p className="mt-2 text-ink-soft">{c.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Activities */}
      <section aria-labelledby="activities" className="container-site py-20 sm:py-28">
        <SectionHeading
          eyebrow="Community activities"
          title={<span id="activities">Something for every kind of learner</span>}
          action={
            <Button to="/events" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              See events
            </Button>
          }
        />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-4xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {whatWeDo.map((w, i) => (
            <Reveal as="li" key={w.title} delay={(i % 3) * 0.06} className="group relative bg-white p-7 sm:p-8">
              <span aria-hidden className={cn('absolute right-6 top-6 h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-[2]', accentStyles[w.accent].solid.split(' ')[0])} />
              <h3 className="text-2xl font-medium tracking-tight">{w.title}</h3>
              <p className="mt-2 text-ink-soft">{w.text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Journey */}
      <section aria-labelledby="journey" className="bg-white py-20 sm:py-28">
        <div className="container-site">
          <SectionHeading eyebrow="Our journey" title={<span id="journey">The story so far</span>} description="Milestones from our chapter’s history." />
          <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
            <span aria-hidden className="absolute left-[11px] top-2 h-[calc(100%-1rem)] w-0.5 bg-ink/10 md:left-0 md:top-[11px] md:h-0.5 md:w-full" />
            {journey.map((j, i) => (
              <Reveal as="li" key={j.title} delay={i * 0.08} className="relative pl-10 md:pl-0 md:pt-12">
                <span aria-hidden className={cn('absolute left-0 top-0 h-6 w-6 rounded-full border-4 border-white shadow', accentStyles[accentAt(i)].solid.split(' ')[0])} />
                <p className="font-mono text-sm text-ink-muted">{j.when ?? 'Date TBA'}</p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{j.title}</h3>
                <p className="mt-2 text-ink-soft">{j.text}</p>
                {j.isPlaceholder && <PlaceholderBadge className="mt-3" />}
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <JoinCTA title="Be part of the next chapter." />
    </>
  );
}
