import { Link } from 'react-router-dom';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { site } from '@/data/site';
import { domains } from '@/data/domains';
import mark from '@/assets/logos/gdg-mark.png';
import { Button } from '@/components/common/Button';
import { SmartImage } from '@/components/common/SmartImage';
import { Circle, DotCluster, HalfCircle, Plus, QuarterCircle, Ring } from '@/components/common/Shapes';
import { accentStyles } from '@/utils/accent';
import { cn } from '@/utils/cn';

const ease = [0.16, 1, 0.3, 1] as const;

const line: Variants = {
  hidden: { y: '110%' },
  show: (i: number) => ({ y: '0%', transition: { duration: 0.9, ease, delay: 0.15 + i * 0.12 } }),
};

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: (i: number) => ({ opacity: 1, scale: 1, transition: { duration: 0.8, ease, delay: 0.5 + i * 0.1 } }),
};

const float = (d = 0) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' as const, delay: d },
});

function Headline() {
  const words = [
    { w: 'Build', dot: 'text-gblue', indent: '' },
    { w: 'Learn', dot: 'text-gred', indent: 'pl-[0.9em] sm:pl-[1.2em]' },
    { w: 'Innovate', dot: 'text-ggreen', indent: '' },
  ];
  return (
    <h1 className="text-display-xl font-medium" aria-label="Build. Learn. Innovate.">
      {words.map((x, i) => (
        <span key={x.w} className={cn('block overflow-hidden pb-[0.06em]', x.indent)} aria-hidden>
          <motion.span className="relative inline-flex items-center" variants={line} custom={i}>
            {i === 1 && (
              <motion.span variants={pop} custom={0} className="absolute -left-[0.95em] top-1/2 hidden h-[0.62em] w-[0.62em] -translate-y-1/2 sm:-left-[1.15em] sm:block sm:h-[0.75em] sm:w-[0.75em]">
                <HalfCircle className="h-full w-full rotate-90" color="#F9AB00" />
              </motion.span>
            )}
            {x.w}
            <span className={x.dot}>.</span>
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function CodeCard() {
  return (
    <div className="relative h-full overflow-hidden rounded-[2rem] bg-ink p-5 font-mono text-[0.72rem] leading-relaxed text-white/80 sm:text-[0.8rem]">
      <div className="mb-3 flex gap-1.5" aria-hidden>
        <span className="h-2.5 w-2.5 rounded-full bg-gred" />
        <span className="h-2.5 w-2.5 rounded-full bg-gyellow" />
        <span className="h-2.5 w-2.5 rounded-full bg-ggreen" />
      </div>
      <pre className="whitespace-pre" aria-label="Code snippet: const gdg equals build, learn, innovate">
        <span className="text-[#8AB4F8]">const</span> gdg = {'{\n'}
        {'  '}build: <span className="text-[#81C995]">true</span>,{'\n'}
        {'  '}learn: <span className="text-[#81C995]">true</span>,{'\n'}
        {'  '}innovate: <span className="text-[#FDD663]">∞</span>,{'\n'}
        {'};'}
      </pre>
      <Circle className="absolute -bottom-6 -right-6 h-16 w-16 opacity-90" color="#EA4335" />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-28 sm:pt-36 lg:pb-24 lg:pt-40" aria-labelledby="hero-title">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_at_top_left,black_20%,transparent_70%)]" aria-hidden />

      <div className="container-site relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Copy */}
        <motion.div className="lg:col-span-7" initial="hidden" animate="show">
          <motion.p
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white py-1.5 pl-1.5 pr-4 text-sm shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-offwhite">
              <img src={mark} alt="" width={20} height={20} className="h-4 w-auto" />
            </span>
            <span className="font-medium">{site.name}</span>
            <span className="hidden text-ink-muted sm:inline">· {site.city}</span>
          </motion.p>

          <div id="hero-title">
            <Headline />
          </div>

          <motion.p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.55 }}
          >
            {site.description}
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
          >
            <Button to="/about" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
              Explore Our Community
            </Button>
            <Button to="/events" size="lg" variant="secondary" icon={<CalendarDays className="h-5 w-5" />} iconPosition="start">
              Explore Events
            </Button>
          </motion.div>

          <motion.ul
            className="mt-10 flex flex-wrap gap-2"
            aria-label="Our domains"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {domains.map((d) => (
              <li key={d.id}>
                <Link
                  to={`/domains#${d.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink/30 hover:text-ink"
                >
                  <span aria-hidden className={cn('h-2 w-2 rounded-full', accentStyles[d.accent].solid.split(' ')[0])} />
                  {d.shortName}
                </Link>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Visual collage */}
        <div className="relative lg:col-span-5">
          <motion.div className="pointer-events-none absolute -left-6 -top-8 z-0 h-28 w-28 sm:h-36 sm:w-36" variants={pop} custom={1} initial="hidden" animate="show">
            <motion.div className="h-full w-full" {...float(0)}>
              <QuarterCircle className="h-full w-full" color="#F9AB00" />
            </motion.div>
          </motion.div>
          <motion.div className="pointer-events-none absolute -right-3 top-[38%] z-20 h-14 w-14" variants={pop} custom={2} initial="hidden" animate="show">
            <motion.div className="h-full w-full" {...float(1.2)}>
              <Plus className="h-full w-full" color="#EA4335" />
            </motion.div>
          </motion.div>

          <motion.div
            className="relative z-10 grid grid-cols-2 gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.25 }}
          >
            <div className="relative col-span-2 aspect-[5/4] overflow-hidden rounded-[2.5rem] shadow-lift sm:rounded-[3rem]">
              <SmartImage
                src={site.heroImage}
                alt="GDG on Campus Dr. AIT community"
                accent="blue"
                seed={0}
                eager
                placeholderLabel="Community photo placeholder"
                placeholderSublabel="An authentic community photo will appear here"
                className="h-full w-full"
              />
              {!site.heroImage && (
                <div className="pointer-events-none absolute left-1/2 top-[42%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center" aria-hidden>
                  <span className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lift sm:h-28 sm:w-28">
                    <img src={mark} alt="" className="h-12 w-auto sm:h-14" />
                  </span>
                </div>
              )}
            </div>

            <div className="aspect-[4/3.4] sm:aspect-auto sm:h-44">
              <CodeCard />
            </div>

            <Link
              to="/domains"
              className="group relative flex aspect-[4/3.4] flex-col justify-between overflow-hidden rounded-[2rem] bg-gyellow-pastel p-5 transition-colors hover:bg-gyellow sm:aspect-auto sm:h-44"
            >
              <Ring className="absolute -right-8 -top-8 h-28 w-28 transition-transform duration-700 group-hover:rotate-45" color="#34A853" />
              <span className="relative font-mono text-xs uppercase tracking-wider text-ink-soft">Domains</span>
              <span className="relative">
                <span className="block text-5xl font-medium tracking-tight sm:text-6xl">{String(domains.length).padStart(2, '0')}</span>
                <span className="mt-1 flex items-center gap-1 text-sm font-medium">
                  Explore tracks <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </span>
            </Link>
          </motion.div>

          <DotCluster className="pointer-events-none absolute -bottom-8 -left-8 z-0 h-20 w-20 opacity-30" />
          <motion.div className="pointer-events-none absolute -bottom-5 right-10 z-20 h-10 w-10" variants={pop} custom={3} initial="hidden" animate="show">
            <Circle className="h-full w-full" color="#4285F4" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
