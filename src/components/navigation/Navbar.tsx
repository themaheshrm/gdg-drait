import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Menu } from 'lucide-react';
import { joinNavItem, navItems } from '@/data/site';
import { useScrolled } from '@/hooks/useScrolled';
import { Logo } from '@/components/common/Logo';
import { Button } from '@/components/common/Button';
import { cn } from '@/utils/cn';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const scrolled = useScrolled(12);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const menuButton = useRef<HTMLButtonElement>(null);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [location.pathname]);

  const close = () => {
    setOpen(false);
    menuButton.current?.focus();
  };

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <nav
          aria-label="Primary"
          className={cn(
            'mx-auto flex h-16 max-w-site items-center justify-between gap-4 rounded-full pl-5 pr-2 transition-[background-color,box-shadow,border-color] duration-300 sm:h-[4.25rem] sm:pl-6',
            scrolled || open ? 'border border-ink/[0.06] bg-white/85 shadow-card backdrop-blur-xl' : 'border border-transparent bg-transparent',
          )}
        >
          <Logo className="h-7 sm:h-8" />

          <ul className="hidden items-center gap-0.5 xl:flex">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    cn(
                      'relative inline-flex h-10 items-center rounded-full px-3.5 text-[0.93rem] font-medium transition-colors',
                      isActive ? 'text-ink' : 'text-ink-soft hover:bg-ink/[0.04] hover:text-ink',
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-offwhite ring-1 ring-ink/[0.06]"
                          transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                        />
                      )}
                      <span className="relative">{item.label}</span>
                      {isActive && <span aria-hidden className="absolute bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gblue" />}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Button to={joinNavItem.to} size="sm" className={cn('hidden h-11 px-5 sm:inline-flex', location.pathname === joinNavItem.to && 'bg-gblue-deep ring-2 ring-gblue/30 ring-offset-2 ring-offset-white')} icon={<ArrowRight className="h-4 w-4" />}>
              {joinNavItem.label}
            </Button>
            <button
              ref={menuButton}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Open menu"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-gblue-deep xl:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </nav>
      </header>
      <AnimatePresence>{open && <MobileMenu onClose={close} />}</AnimatePresence>
    </>
  );
}
