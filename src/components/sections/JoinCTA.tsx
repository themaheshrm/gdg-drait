import { ArrowRight } from 'lucide-react';
import { site, socials } from '@/data/site';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { GitHubIcon } from '@/assets/icons/BrandIcons';
import { Bracket, Circle, QuarterCircle, Ring } from '@/components/common/Shapes';

export function JoinCTA({ title = 'Ready to build with us?' }: { title?: string }) {
  return (
    <section aria-labelledby="join-cta-title" className="px-3 py-10 sm:px-5 sm:py-16">
      <Reveal className="relative mx-auto max-w-site overflow-hidden rounded-5xl bg-gyellow-pastel px-6 py-16 sm:px-12 sm:py-24 lg:px-20">
        <QuarterCircle className="pointer-events-none absolute -bottom-2 -left-2 h-32 w-32 -rotate-90 sm:h-48 sm:w-48" color="#F9AB00" />
        <Ring className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 sm:h-64 sm:w-64" color="#4285F4" />
        <Circle className="pointer-events-none absolute bottom-10 right-[18%] hidden h-10 w-10 sm:block" color="#EA4335" />
        <div className="pointer-events-none absolute bottom-12 right-8 hidden gap-0 lg:flex" aria-hidden>
          <Bracket direction="left" className="h-20 w-20" color="#34A853" />
          <Bracket direction="right" className="h-20 w-20" color="#1E1E1E" />
        </div>

        <div className="relative max-w-3xl">
          <p className="eyebrow mb-5 text-ink-soft">Join the community</p>
          <h2 id="join-cta-title" className="text-display-lg">
            {title}
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-soft sm:text-xl">
            Beginner or experienced — there’s always something to build together at {site.name}.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to="/join" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Join Us
            </Button>
            {socials.github && (
              <Button href={socials.github} size="lg" variant="light" icon={<GitHubIcon className="h-5 w-5" />} iconPosition="start">
                Follow on GitHub
              </Button>
            )}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
