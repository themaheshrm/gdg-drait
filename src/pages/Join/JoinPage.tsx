import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Award, BookOpen, Code2, Handshake, Lightbulb, Mic, Network, Users } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { site, socials } from '@/data/site';
import { domains } from '@/data/domains';
import { whatWeDo } from '@/data/about';
import { accentStyles, accentAt } from '@/utils/accent';
import { PageHero } from '@/components/common/PageHero';
import { Reveal } from '@/components/common/Reveal';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { PlaceholderBadge } from '@/components/common/Chip';
import { SocialLinks } from '@/components/common/SocialLinks';
import { GitHubIcon } from '@/assets/icons/BrandIcons';
import { Circle, QuarterCircle, Ring } from '@/components/common/Shapes';
import { cn } from '@/utils/cn';

const benefits = [
  { icon: BookOpen, title: 'Hands-on learning', text: 'Workshops and bootcamps that go beyond the syllabus.' },
  { icon: Code2, title: 'Real projects', text: 'Build portfolio-worthy projects with a team.' },
  { icon: Network, title: 'A wider network', text: 'Meet peers, seniors, alumni and the global GDG community.' },
  { icon: Mic, title: 'Speaking opportunities', text: 'Share what you learn through talks and sessions.' },
  { icon: Award, title: 'Leadership', text: 'Grow into a core team member, co-lead or domain lead.' },
  { icon: Lightbulb, title: 'Hackathon-ready', text: 'Find teammates and ideas for hackathons and competitions.' },
];

const expectations = [
  { icon: Handshake, text: 'Be respectful, inclusive and kind — follow our Code of Conduct.' },
  { icon: Users, text: 'Show up, participate and help others learn.' },
  { icon: Code2, text: 'Share knowledge openly and give credit to others’ work.' },
  { icon: Lightbulb, text: 'Stay curious — ask questions and try new things.' },
];

export default function JoinPage() {
  useDocumentTitle('Join Us', `Join ${site.name} — learn, build and grow with the developer community at Dr. AIT.`);
  return (
    <>
      <PageHero
        eyebrow="Join us"
        accent="green"
        title={
          <>
            There’s a seat for you <span className="text-ggreen-deep">at the table.</span>
          </>
        }
        description="Open to every curious student at Dr. AIT — no prior experience needed. Come to learn, stay to build."
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          {site.joinUrl ? (
            <Button href={site.joinUrl} size="lg" icon={<ArrowUpRight className="h-5 w-5" />}>
              Register now
            </Button>
          ) : (
            <a href="#how-to-join" className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 font-medium text-white transition-colors hover:bg-gblue-deep sm:h-14 sm:px-7">
              How to join <ArrowRight className="h-5 w-5" aria-hidden />
            </a>
          )}
          {socials.github && (
            <Button href={socials.github} size="lg" variant="secondary" icon={<GitHubIcon className="h-5 w-5" />} iconPosition="start">
              Follow on GitHub
            </Button>
          )}
        </div>
      </PageHero>

      {/* Why join */}
      <section aria-labelledby="why-join" className="container-site pb-20 sm:pb-28">
        <SectionHeading eyebrow="Why join GDG?" title={<span id="why-join">Grow faster, together.</span>} />
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" key={title} delay={(i % 3) * 0.06} className="group rounded-4xl bg-white p-7 shadow-card ring-1 ring-ink/[0.04]">
              <span className={cn('inline-flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:-rotate-6', accentStyles[accentAt(i)].pastel)}>
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-6 text-xl font-medium tracking-tight">{title}</h3>
              <p className="mt-2 text-ink-soft">{text}</p>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* What you can learn */}
      <section aria-labelledby="learn" className="bg-white py-20 sm:py-28">
        <div className="container-site grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-4">What you can learn</p>
            <h2 id="learn" className="text-display-md">
              Five domains to explore.
            </h2>
            <Button to="/domains" variant="secondary" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
              Explore domains
            </Button>
          </Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:col-span-8">
            {domains.map((d, i) => (
              <Reveal as="li" key={d.id} delay={i * 0.05} className={i === domains.length - 1 ? 'sm:col-span-2' : ''}>
                <Link to={`/domains#${d.id}`} className={cn('group flex h-full items-start justify-between gap-4 rounded-4xl p-6 transition-transform hover:-translate-y-0.5', d.accent === 'ink' ? 'bg-offwhite' : accentStyles[d.accent].pastel)}>
                  <span>
                    <span className="block text-xl font-medium tracking-tight">{d.name}</span>
                    <span className="mt-1 block text-sm text-ink-soft">{d.technologies.slice(0, 4).join(' · ')}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:rotate-45" aria-hidden />
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Events & activities */}
      <section aria-labelledby="activities" className="container-site py-20 sm:py-28">
        <SectionHeading
          eyebrow="Events & activities"
          title={<span id="activities">What members get to do</span>}
          action={
            <Button to="/events" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              Browse events
            </Button>
          }
        />
        <ul className="mt-12 flex flex-wrap gap-3">
          {whatWeDo.map((w, i) => (
            <Reveal as="li" key={w.title} delay={i * 0.04}>
              <span className="inline-flex items-center gap-3 rounded-full border border-ink/10 bg-white py-3 pl-3 pr-6 text-lg">
                <span aria-hidden className={cn('h-8 w-8 rounded-full', accentStyles[w.accent].solid.split(' ')[0])} />
                {w.title}
              </span>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* Expectations */}
      <section aria-labelledby="expectations" className="px-3 sm:px-5">
        <div className="relative mx-auto grid max-w-site gap-10 overflow-hidden rounded-5xl bg-ink px-6 py-16 text-white sm:px-12 sm:py-20 lg:grid-cols-12 lg:px-16">
          <Ring className="absolute -right-16 -top-16 h-64 w-64 opacity-90" color="#EA4335" />
          <Reveal className="relative lg:col-span-5">
            <p className="eyebrow mb-4 text-white/60">Community expectations</p>
            <h2 id="expectations" className="text-display-md">
              A safe space to learn.
            </h2>
            <a
              href={`${site.websiteRepo}/blob/main/CODE_OF_CONDUCT.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-ink transition-colors hover:bg-gyellow-pastel"
            >
              Read the Code of Conduct <ArrowUpRight className="h-4 w-4" aria-hidden />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </Reveal>
          <ul className="relative grid gap-3 sm:grid-cols-2 lg:col-span-7">
            {expectations.map(({ icon: Icon, text }, i) => (
              <Reveal as="li" key={text} delay={i * 0.06} className="rounded-3xl bg-white/[0.06] p-6 ring-1 ring-white/10">
                <Icon className="h-5 w-5 text-gyellow" aria-hidden />
                <p className="mt-4 text-lg text-white/90">{text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How to join */}
      <section id="how-to-join" aria-labelledby="how-to-join-title" className="container-site scroll-mt-28 py-20 sm:py-28">
        <div className="relative grid gap-10 overflow-hidden rounded-5xl bg-white p-7 shadow-card sm:p-12 lg:grid-cols-2 lg:p-16">
          <QuarterCircle className="absolute -bottom-3 -right-3 h-36 w-36 -rotate-180 sm:h-48 sm:w-48" color="#CCF6C5" />
          <Circle className="absolute right-12 top-12 hidden h-8 w-8 sm:block" color="#F9AB00" />
          <div className="relative">
            <p className="eyebrow mb-4">How to join</p>
            <h2 id="how-to-join-title" className="text-display-sm">
              Become a member
            </h2>
            {site.joinUrl ? (
              <>
                <p className="mt-4 text-lg text-ink-soft">Fill in the official registration form to become a member.</p>
                <Button href={site.joinUrl} size="lg" className="mt-8" icon={<ArrowUpRight className="h-5 w-5" />}>
                  Open registration form
                </Button>
              </>
            ) : (
              <>
                <p className="mt-4 text-lg text-ink-soft">
                  The official registration link will be published here once membership opens. Meanwhile, follow us to get notified.
                </p>
                <PlaceholderBadge className="mt-6" label="Registration link to be announced" />
              </>
            )}
          </div>
          <div className="relative">
            <h3 className="text-xl font-medium tracking-tight">Stay connected</h3>
            <p className="mt-2 text-ink-soft">Follow our channels for announcements, event registrations and recaps.</p>
            <SocialLinks className="mt-6" showLabels />
            {socials.gdgCommunity ? (
              <a href={socials.gdgCommunity} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-1 font-medium hover:underline">
                Our chapter on GDG Community <ArrowUpRight className="h-4 w-4" aria-hidden />
              </a>
            ) : (
              <p className="mt-6 flex flex-wrap items-center gap-2 text-sm text-ink-soft">
                GDG Community chapter page <PlaceholderBadge label="Link to be added" />
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
