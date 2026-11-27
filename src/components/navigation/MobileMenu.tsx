import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { joinNavItem, navItems, site } from '@/data/site';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { Logo } from '@/components/common/Logo';
import { SocialLinks } from '@/components/common/SocialLinks';
import { cn } from '@/utils/cn';

const dot = ['bg-gblue', 'bg-gred', 'bg-gyellow', 'bg-ggreen'];

/** Full-screen mobile navigation sheet with focus management and Esc to close. */
export function MobileMenu({ onClose }: { onClose: () => void }) {
  useLockBodyScroll(true);
  const panel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    panel.current?.querySelector<HTMLElement>('a, button')?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab' && panel.current) {
        const focusables = panel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  const items = [...navItems, joinNavItem];

  return (
    <motion.div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
      ref={panel}
      className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-offwhite xl:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex h-16 items-center justify-between px-5 pt-3 sm:h-[4.25rem] sm:px-8 sm:pt-4">
        <Logo className="h-7 sm:h-8" onClick={onClose} />
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>

      <nav aria-label="Mobile" className="flex-1 px-5 pb-8 pt-6 sm:px-8">
        <ul className="divide-y divide-ink/10 border-y border-ink/10">
          {items.map((item, i) => (
            <motion.li
              key={item.to}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * i + 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <NavLink
                to={item.to}
                end={item.to === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  cn('group flex items-center justify-between py-3.5 text-[1.75rem] font-medium tracking-tight sm:text-4xl', isActive ? 'text-ink' : 'text-ink/60')
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-3">
                      <span aria-hidden className={cn('h-2.5 w-2.5 rounded-full transition-transform', dot[i % 4], isActive ? 'scale-100' : 'scale-0 group-hover:scale-100')} />
                      {item.label}
                    </span>
                    <span className="font-mono text-xs text-ink-muted">{String(i + 1).padStart(2, '0')}</span>
                  </>
                )}
              </NavLink>
            </motion.li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-5">
          <SocialLinks />
          <a
            href={site.collegeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-ink"
          >
            {site.college}, {site.city} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
          </a>
        </div>
      </nav>
    </motion.div>
  );
}
