import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { gallery } from '@/data/gallery';
import { SectionHeading } from '@/components/common/SectionHeading';
import { Button } from '@/components/common/Button';
import { Reveal } from '@/components/common/Reveal';
import { SmartImage } from '@/components/common/SmartImage';
import { galleryCategoryLabel } from '@/utils/categories';

export function GalleryPreview() {
  const items = gallery.slice(0, 6);
  return (
    <section aria-labelledby="gallery-preview-title" className="py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="Moments"
          title={<span id="gallery-preview-title">Life at GDG on Campus Dr. AIT</span>}
          description="Snapshots from hackathons, workshops, sessions and everything in between."
          action={
            <Button to="/gallery" variant="secondary" icon={<ArrowRight className="h-4 w-4" />}>
              Open gallery
            </Button>
          }
        />
        <ul className="mt-12 columns-2 gap-3 sm:gap-4 lg:columns-3">
          {items.map((g, i) => (
            <Reveal as="li" key={g.id} delay={(i % 3) * 0.06} className="mb-3 break-inside-avoid sm:mb-4">
              <Link to={`/gallery?category=${g.category}`} className="group block overflow-hidden rounded-3xl sm:rounded-4xl" aria-label={`${g.caption} — open in gallery`}>
                <div style={{ aspectRatio: g.ratio }} className="overflow-hidden">
                  <SmartImage
                    src={g.src}
                    alt={g.alt}
                    accent={g.accent}
                    seed={i}
                    placeholderLabel="Photo placeholder"
                    placeholderSublabel={galleryCategoryLabel(g.category)}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
