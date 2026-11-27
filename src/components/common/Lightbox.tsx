import { useEffect, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { GalleryItem } from '@/types';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { galleryCategoryLabel } from '@/utils/categories';
import { PlaceholderArt } from './PlaceholderArt';

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onChange: (i: number) => void;
}

/** Accessible image lightbox: Esc closes, ←/→ navigate, focus is trapped and restored. */
export function Lightbox({ items, index, onClose, onChange }: LightboxProps) {
  const open = index !== null && items[index] !== undefined;
  useLockBodyScroll(open);
  const dialog = useRef<HTMLDivElement>(null);
  const opener = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;
    opener.current = document.activeElement as HTMLElement;
    dialog.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus();
    return () => opener.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open || index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') onChange((index + 1) % items.length);
      else if (e.key === 'ArrowLeft') onChange((index - 1 + items.length) % items.length);
      else if (e.key === 'Tab' && dialog.current) {
        const f = dialog.current.querySelectorAll<HTMLElement>('button');
        const first = f[0];
        const last = f[f.length - 1];
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
  }, [open, index, items.length, onClose, onChange]);

  const item = open ? items[index!] : null;

  return (
    <AnimatePresence>
      {item && index !== null && (
        <motion.div
          ref={dialog}
          role="dialog"
          aria-modal="true"
          aria-label={`Image ${index + 1} of ${items.length}: ${item.caption}`}
          className="fixed inset-0 z-[70] flex flex-col bg-ink/95 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex items-center justify-between px-4 py-4 text-white sm:px-8">
            <p className="font-mono text-sm text-white/70">
              {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
            </p>
            <button
              type="button"
              data-autofocus
              onClick={onClose}
              aria-label="Close lightbox"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-ink"
            >
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-4 sm:px-24" onClick={onClose}>
            <AnimatePresence mode="wait">
              <motion.figure
                key={item.id}
                className="flex max-h-full w-full max-w-5xl flex-col items-center"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div
                  className="w-full overflow-hidden rounded-3xl"
                  style={{ aspectRatio: item.ratio, maxHeight: 'calc(100vh - 12rem)', maxWidth: `calc((100vh - 12rem) * ${item.ratio})` }}
                >
                  {item.src ? (
                    <img src={item.src} alt={item.alt} className="h-full w-full object-contain" />
                  ) : (
                    <div role="img" aria-label={item.alt} className="h-full w-full">
                      <PlaceholderArt accent={item.accent} seed={index} label="Photo placeholder" sublabel={galleryCategoryLabel(item.category)} />
                    </div>
                  )}
                </div>
                <figcaption className="mt-4 text-center text-white">
                  <span className="block text-lg">{item.caption}</span>
                  <span className="font-mono text-xs uppercase tracking-wider text-white/60">{galleryCategoryLabel(item.category)}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={() => onChange((index - 1 + items.length) % items.length)}
                aria-label="Previous image"
                className="absolute bottom-6 left-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105 sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden />
              </button>
              <button
                type="button"
                onClick={() => onChange((index + 1) % items.length)}
                aria-label="Next image"
                className="absolute bottom-6 right-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-ink transition-transform hover:scale-105 sm:bottom-auto sm:right-6 sm:top-1/2 sm:-translate-y-1/2"
              >
                <ChevronRight className="h-5 w-5" aria-hidden />
              </button>
            </>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
