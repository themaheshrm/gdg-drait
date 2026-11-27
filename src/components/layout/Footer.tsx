import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { joinNavItem, navItems, site, socials } from '@/data/site';
import { Logo } from '@/components/common/Logo';
import { SocialLinks } from '@/components/common/SocialLinks';
import { PlaceholderBadge } from '@/components/common/Chip';
import { Circle, QuarterCircle, Ring } from '@/components/common/Shapes';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-8 px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative mx-auto max-w-site overflow-hidden rounded-5xl bg-white px-6 pb-8 pt-14 shadow-card sm:px-10 lg:px-14 lg:pt-20">
        <QuarterCircle className="pointer-events-none absolute -bottom-4 -right-4 hidden h-48 w-48 rotate-180 lg:block" color="#FFE7A5" />
        <Ring className="pointer-events-none absolute bottom-32 right-48 hidden h-16 w-16 xl:block" color="#C3ECF6" />
        <Circle className="pointer-events-none absolute right-10 top-10 hidden h-5 w-5 sm:block" color="#34A853" />

        <div className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo className="h-9 sm:h-10" />
            <p className="mt-6 max-w-sm text-ink-soft">
              {site.fullName}, {site.city}. A student-led community to learn, build and grow together.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h2 className="eyebrow mb-4">Explore</h2>
              <ul className="space-y-2.5">
                {navItems.map((n) => (
                  <li key={n.to}>
                    <Link to={n.to} className="link-underline text-ink-soft hover:text-ink">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="eyebrow mb-4">Community</h2>
              <ul className="space-y-2.5">
                <li>
                  <Link to={joinNavItem.to} className="link-underline text-ink-soft hover:text-ink">
                    Join the community
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="link-underline text-ink-soft hover:text-ink">
                    Upcoming events
                  </Link>
                </li>
                {socials.github && (
                  <li>
                    <a href={socials.github} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 text-ink-soft hover:text-ink">
                      GitHub organization <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                    </a>
                  </li>
                )}
                <li>
                  <a href={`${site.websiteRepo}/blob/main/CONTRIBUTING.md`} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 text-ink-soft hover:text-ink">
                    Contribute to this site <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <h2 className="eyebrow mb-4">Contact</h2>
              <address className="space-y-4 not-italic text-ink-soft">
                <p className="flex gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gred" aria-hidden />
                  <span>{site.address}</span>
                </p>
                <p className="flex items-start gap-2">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gblue" aria-hidden />
                  {site.email ? (
                    <a href={`mailto:${site.email}`} className="link-underline hover:text-ink">
                      {site.email}
                    </a>
                  ) : (
                    <span className="flex flex-col items-start gap-1.5">
                      <span>Contact e-mail</span>
                      <PlaceholderBadge label="To be added" />
                    </span>
                  )}
                </p>
                <a href={site.collegeUrl} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1 hover:text-ink">
                  drait.edu.in <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </a>
              </address>
            </div>
          </nav>
        </div>

        <p aria-hidden className="relative mt-16 select-none text-[clamp(2.75rem,7vw,6.25rem)] font-medium leading-[0.95] sm:whitespace-nowrap tracking-[-0.04em] text-ink">
          Build<span className="text-gblue">.</span> Learn<span className="text-gred">.</span> Innovate<span className="text-ggreen">.</span>
        </p>

        <div className="relative mt-10 flex flex-col gap-3 border-t border-ink/10 pt-6 text-sm text-ink-muted md:flex-row md:items-center md:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="max-w-xl md:text-right">
            GDG on Campus Dr. AIT is a student community. Activities and opinions shared here are the community’s own and should not be linked to Google.
          </p>
        </div>
      </div>
    </footer>
  );
}
