import type { CSSProperties } from 'react';
import { cn } from '@/utils/cn';

/**
 * Geometric graphic elements inspired by the GDG on Campus brand language:
 * circles, quarter/half circles, pills, rings, plus signs and dot grids.
 * Purely decorative — always aria-hidden.
 */

interface ShapeProps {
  className?: string;
  color?: string;
  style?: CSSProperties;
}

export function Circle({ className, color = '#4285F4', style }: ShapeProps) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className} style={style}>
      <circle cx="50" cy="50" r="50" fill={color} />
    </svg>
  );
}

export function Ring({ className, color = '#34A853', style }: ShapeProps) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className} style={style}>
      <circle cx="50" cy="50" r="40" fill="none" stroke={color} strokeWidth="20" />
    </svg>
  );
}

export function QuarterCircle({ className, color = '#F9AB00', style }: ShapeProps) {
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className} style={style}>
      <path d="M0 0 H100 A100 100 0 0 1 0 100 Z" fill={color} />
    </svg>
  );
}

export function HalfCircle({ className, color = '#EA4335', style }: ShapeProps) {
  return (
    <svg aria-hidden viewBox="0 0 100 50" className={className} style={style}>
      <path d="M0 50 A50 50 0 0 1 100 50 Z" fill={color} />
    </svg>
  );
}

export function Pill({ className, color = '#EA4335', style }: ShapeProps) {
  return (
    <svg aria-hidden viewBox="0 0 120 40" className={className} style={style}>
      <rect width="120" height="40" rx="20" fill={color} />
    </svg>
  );
}

export function Plus({ className, color = '#1E1E1E', style }: ShapeProps) {
  return (
    <svg aria-hidden viewBox="0 0 40 40" className={className} style={style}>
      <rect x="15" y="0" width="10" height="40" rx="5" fill={color} />
      <rect x="0" y="15" width="40" height="10" rx="5" fill={color} />
    </svg>
  );
}

export function Squiggle({ className, color = '#1E1E1E', style }: ShapeProps) {
  return (
    <svg aria-hidden viewBox="0 0 160 40" className={className} style={style} fill="none">
      <path d="M6 20 Q 26 0 46 20 T 86 20 T 126 20 T 154 20" stroke={color} strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

export function DotCluster({ className, color = '#1E1E1E', style }: ShapeProps) {
  const dots = [];
  for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) dots.push(<circle key={`${r}-${c}`} cx={6 + c * 16} cy={6 + r * 16} r="3.5" fill={color} />);
  return (
    <svg aria-hidden viewBox="0 0 60 60" className={className} style={style}>
      {dots}
    </svg>
  );
}

/** A rounded bracket stroke — echoes the "< >" code motif without redrawing the logo. */
export function Bracket({ className, color = '#4285F4', direction = 'left', style }: ShapeProps & { direction?: 'left' | 'right' }) {
  const d = direction === 'left' ? 'M70 14 L30 50 L70 86' : 'M30 14 L70 50 L30 86';
  return (
    <svg aria-hidden viewBox="0 0 100 100" className={className} style={style} fill="none">
      <path d={d} stroke={color} strokeWidth="22" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Four-colour dots used as a tiny brand signature. */
export function BrandDots({ className }: { className?: string }) {
  return (
    <span aria-hidden className={cn('inline-flex items-center gap-1', className)}>
      <span className="h-2 w-2 rounded-full bg-gblue" />
      <span className="h-2 w-2 rounded-full bg-gred" />
      <span className="h-2 w-2 rounded-full bg-gyellow" />
      <span className="h-2 w-2 rounded-full bg-ggreen" />
    </span>
  );
}
