import type { Accent } from '@/types';
import { accentStyles } from '@/utils/accent';
import { cn } from '@/utils/cn';
import { ImageIcon } from 'lucide-react';

interface PlaceholderArtProps {
  accent?: Accent;
  /** Changes the composition so neighbouring placeholders don't look identical */
  seed?: number;
  label?: string;
  sublabel?: string;
  className?: string;
  showLabel?: boolean;
}

const others: Record<Accent, string[]> = {
  blue: ['#F9AB00', '#34A853', '#EA4335'],
  green: ['#4285F4', '#F9AB00', '#EA4335'],
  yellow: ['#EA4335', '#4285F4', '#34A853'],
  red: ['#4285F4', '#34A853', '#F9AB00'],
  ink: ['#4285F4', '#EA4335', '#F9AB00'],
};

/**
 * Branded, clearly-labelled stand-in for photos that haven't been supplied yet.
 * Geometric composition on a pastel field — never mistaken for a real photo.
 */
export function PlaceholderArt({ accent = 'blue', seed = 0, label = 'Photo placeholder', sublabel, className, showLabel = true }: PlaceholderArtProps) {
  const a = accentStyles[accent];
  const [c1, c2, c3] = others[accent];
  const v = seed % 4;
  return (
    <div className={cn('relative h-full w-full overflow-hidden', a.pastel, className)}>
      <div className="dot-grid absolute inset-0 opacity-50" aria-hidden />
      <svg aria-hidden viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full">
        {v === 0 && (
          <>
            <circle cx="320" cy="70" r="70" fill={a.hex} />
            <path d="M0 300 V180 A120 120 0 0 1 120 300 Z" fill={c1} />
            <rect x="170" y="200" width="150" height="44" rx="22" fill={c2} transform="rotate(-18 245 222)" />
          </>
        )}
        {v === 1 && (
          <>
            <path d="M400 0 H260 A140 140 0 0 0 400 140 Z" fill={a.hex} />
            <circle cx="90" cy="210" r="60" fill="none" stroke={c3} strokeWidth="22" />
            <rect x="200" y="190" width="44" height="44" rx="10" fill={c1} transform="rotate(20 222 212)" />
          </>
        )}
        {v === 2 && (
          <>
            <path d="M60 300 A140 140 0 0 1 340 300 Z" fill={a.hex} />
            <circle cx="80" cy="70" r="28" fill={c2} />
            <rect x="250" y="40" width="120" height="40" rx="20" fill={c3} />
          </>
        )}
        {v === 3 && (
          <>
            <rect x="-30" y="40" width="240" height="70" rx="35" fill={a.hex} transform="rotate(-12 90 75)" />
            <path d="M400 300 H290 A110 110 0 0 1 400 190 Z" fill={c1} />
            <circle cx="200" cy="230" r="26" fill={c2} />
          </>
        )}
      </svg>
      {showLabel && (
        <div className="absolute inset-x-3 bottom-3 flex items-center gap-2 rounded-2xl bg-white/90 px-3 py-2 text-left shadow-sm backdrop-blur-sm sm:inset-x-4 sm:bottom-4">
          <ImageIcon aria-hidden className="h-4 w-4 shrink-0 text-ink-muted" />
          <div className="min-w-0">
            <p className="truncate font-mono text-[0.68rem] uppercase tracking-wider text-ink-soft">{label}</p>
            {sublabel && <p className="truncate text-xs text-ink-muted">{sublabel}</p>}
          </div>
        </div>
      )}
    </div>
  );
}
