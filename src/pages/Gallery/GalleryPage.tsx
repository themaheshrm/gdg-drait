import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import type { GalleryCategory } from '@/types';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { gallery, galleryCategories } from '@/data/gallery';
import { PageHero } from '@/components/common/PageHero';
import { FilterChips } from '@/components/common/FilterChips';
import { SmartImage } from '@/components/common/SmartImage';
import { Lightbox } from '@/components/common/Lightbox';
import { EmptyState } from '@/components/common/EmptyState';
import { PlaceholderBadge } from '@/components/common/Chip';
import { galleryCategoryLabel } from '@/utils/categories';

type Cat = GalleryCategory | 'all';

export default function GalleryPage() {
  useDocumentTitle('Gallery', 'Photos from GDG on Campus Dr. AIT hackathons, workshops, bootcamps and community moments.');
  const [params, setParams] = useSearchParams();
  const cat = (galleryCategories.some((c) => c.id === params.get('category')) ? params.get('category') : 'all') as Cat;
  const [open, setOpen] = useState<number | null>(null);

  const items = useMemo(() => gallery.filter((g) => cat === 'all' || g.category === cat), [cat]);
  const hasPlaceholders = gallery.some((g) => !g.src);

  const options = [
    { id: 'all' as Cat, label: 'All', count: gallery.length },
    ...galleryCategories.map((c) => ({ id: c.id as Cat, label: c.label, count: gallery.filter((g) => g.category === c.id).length })),
  ];

  const onClose = useCallback(() => setOpen(null), []);

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        accent="yellow"
        title="Moments worth remembering."
        description="Hackathon nights, workshop breakthroughs and everything in between — captured by our community."
      >
        {hasPlaceholders && (
          <p className="flex flex-wrap items-center gap-2 text-sm text-ink-soft">
            <PlaceholderBadge /> Authentic photos from the GDG team will replace these placeholders.
          </p>
        )}
      </PageHero>

      <section aria-label="Photo gallery" className="container-site pb-24">
        <div className="rounded-4xl bg-white p-4 shadow-card sm:p-5">
          <FilterChips
            label="Filter photos by category"
            layoutId="gallery-cat"
            options={options}
            value={cat}
            onChange={(v) => {
              const next = new URLSearchParams(params);
              if (v === 'all') next.delete('category');
              else next.set('category', v);
              setParams(next, { replace: true });
            }}
          />
        </div>

        {items.length === 0 ? (
          <div className="mt-8">
            <EmptyState title="No photos in this category yet" />
          </div>
        ) : (
          <motion.ul layout className="mt-8 columns-1 gap-4 min-[480px]:columns-2 lg:columns-3 xl:columns-4">
            <AnimatePresence mode="popLayout">
              {items.map((g, i) => (
                <motion.li
                  key={g.id}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.3) }}
                  className="mb-4 break-inside-avoid"
                >
                  <button
                    type="button"
                    onClick={() => setOpen(i)}
                    className="group relative block w-full overflow-hidden rounded-4xl text-left"
                    aria-label={`Open “${g.caption}” in lightbox`}
                  >
                    <div style={{ aspectRatio: g.ratio }}>
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
                    <span className="absolute right-3 top-3 inline-flex h-10 w-10 scale-90 items-center justify-center rounded-full bg-white/95 opacity-0 shadow transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100">
                      <Expand className="h-4 w-4" aria-hidden />
                    </span>
                  </button>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        )}
      </section>

      <Lightbox items={items} index={open} onClose={onClose} onChange={setOpen} />
    </>
  );
}
