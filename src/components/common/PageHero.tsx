import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import type { Accent } from '@/types';
import { accentStyles } from '@/utils/accent';
import { cn } from '@/utils/cn';
import { Circle, DotCluster, QuarterCircle, Ring } from './Shapes';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  accent?: Accent;
  children?: ReactNode;
}

const secondary: Record<Accent, string> = {
  blue: '#F9AB00',
  green: '#EA4335',
  yellow: '#4285F4',
  red: '#34A853',
  ink: '#4285F4',
};

/** Shared editorial header for inner pages, with an accent-coloured geometric cluster. */
export function PageHero({ eyebrow, title, description, accent = 'blue', children }: PageHeroProps) {
  const a = accentStyles[accent];
  const primary = accent === 'ink' ? '#EA4335' : a.hex;
  return (
    <header className="relative overflow-hidden pb-12 pt-28 sm:pb-16 sm:pt-36 lg:pb-20">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:linear-gradient(to_bottom,black,transparent)]" aria-hidden />
      <div className="container-site relative grid items-end gap-10 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-8"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow mb-5 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5">
            <span aria-hidden className={cn('h-2 w-2 rounded-full', accent === 'ink' ? 'bg-ink' : a.solid.split(' ')[0])} />
            {eyebrow}
          </p>
          <h1 className="text-display-lg">{title}</h1>
          {description && <div className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft sm:text-xl">{description}</div>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
        <div className="relative hidden h-56 lg:col-span-4 lg:block" aria-hidden>
          <motion.div
            className="absolute right-24 top-0 h-36 w-36"
            initial={{ scale: 0.6, opacity: 0, rotate: -30 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <QuarterCircle className="h-full w-full" color={primary} />
          </motion.div>
          <motion.div
            className="absolute right-0 top-16 h-28 w-28"
            initial={{ scale: 0.4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            <Ring className="h-full w-full" color={secondary[accent]} />
          </motion.div>
          <motion.div
            className="absolute bottom-0 right-40 h-14 w-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            <Circle className="h-full w-full" color={accent === 'ink' ? '#34A853' : '#1E1E1E'} />
          </motion.div>
          <DotCluster className="absolute -bottom-6 right-0 h-14 w-14 opacity-30" />
        </div>
      </div>
    </header>
  );
}
