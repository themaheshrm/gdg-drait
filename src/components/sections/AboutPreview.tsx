import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { pillars } from '@/data/about';
import { accentStyles } from '@/utils/accent';
import { cn } from '@/utils/cn';

export function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-title" className="container-site py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-6">
          <p className="eyebrow mb-5">About the community</p>
          <h2 id="about-preview-title" className="text-display-sm leading-[1.15]">
            We are a student-led developer community at Dr. AIT where ideas meet{' '}
            <span className="rounded-xl bg-gblue-pastel px-2 box-decoration-clone">innovation</span>, beginners become{' '}
            <span className="rounded-xl bg-ggreen-pastel px-2 box-decoration-clone">builders</span>, and everyone learns{' '}
            <span className="rounded-xl bg-gyellow-pastel px-2 box-decoration-clone">together</span>.
          </h2>
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Part of the Google Developer Groups on Campus programme, we create an ecosystem to learn, collaborate, share knowledge
            and turn ideas into meaningful solutions.
          </p>
          <Button to="/about" variant="secondary" className="mt-8" icon={<ArrowRight className="h-4 w-4" />}>
            More about us
          </Button>
        </Reveal>

        <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-6">
          {pillars.map((p, i) => {
            const a = accentStyles[p.accent];
            return (
              <Reveal as="li" key={p.title} delay={i * 0.08} className={cn('group rounded-4xl bg-white p-6 shadow-card ring-1 ring-ink/[0.04]', i % 2 === 1 && 'sm:translate-y-8')}>
                <span aria-hidden className={cn('block h-2 w-16 rounded-full transition-[width] duration-500 group-hover:w-full', a.solid.split(' ')[0])} />
                <h3 className="mt-8 text-2xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 text-ink-soft">{p.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
