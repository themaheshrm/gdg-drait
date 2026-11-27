import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { domains } from '@/data/domains';
import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { AboutPreview } from '@/components/sections/AboutPreview';
import { DomainsPreview } from '@/components/sections/DomainsPreview';
import { UpcomingEvents } from '@/components/sections/UpcomingEvents';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { TeamPreview } from '@/components/sections/TeamPreview';
import { GalleryPreview } from '@/components/sections/GalleryPreview';
import { JoinCTA } from '@/components/sections/JoinCTA';
import { Marquee } from '@/components/common/Marquee';

export default function HomePage() {
  useDocumentTitle();
  return (
    <>
      <Hero />
      <div className="border-y border-ink/10 bg-white py-5 sm:py-6">
        <Marquee items={domains.map((d) => d.name).concat(['Open Source', 'Community'])} />
      </div>
      <Stats />
      <AboutPreview />
      <UpcomingEvents />
      <DomainsPreview />
      <TeamPreview />
      <FeaturedProjects />
      <GalleryPreview />
      <JoinCTA />
    </>
  );
}
