import { useState } from 'react';
import type { Accent } from '@/types';
import { cn } from '@/utils/cn';
import { PlaceholderArt } from './PlaceholderArt';

interface SmartImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  imgClassName?: string;
  accent?: Accent;
  seed?: number;
  placeholderLabel?: string;
  placeholderSublabel?: string;
  eager?: boolean;
}

/** Lazy-loaded image that falls back to a labelled branded placeholder. */
export function SmartImage({ src, alt, className, imgClassName, accent, seed, placeholderLabel, placeholderSublabel, eager }: SmartImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  if (!src || failed) {
    return (
      <div className={cn('relative', className)} role="img" aria-label={alt}>
        <PlaceholderArt accent={accent} seed={seed} label={placeholderLabel} sublabel={placeholderSublabel} />
      </div>
    );
  }
  return (
    <div className={cn('relative overflow-hidden bg-offwhite', className)}>
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setFailed(true)}
        className={cn('h-full w-full object-cover transition-opacity duration-500', loaded ? 'opacity-100' : 'opacity-0', imgClassName)}
      />
    </div>
  );
}
