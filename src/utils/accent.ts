import type { Accent } from '@/types';

/**
 * Static Tailwind class maps per brand accent.
 * Classes are written out in full so Tailwind's JIT can detect them.
 */
export const accentStyles: Record<
  Accent,
  { solid: string; pastel: string; text: string; border: string; ring: string; hex: string; pastelHex: string; softBg: string }
> = {
  blue: {
    solid: 'bg-gblue text-white',
    pastel: 'bg-gblue-pastel',
    text: 'text-gblue-deep',
    border: 'border-gblue',
    ring: 'ring-gblue',
    hex: '#4285F4',
    pastelHex: '#C3ECF6',
    softBg: 'bg-gblue/10',
  },
  green: {
    solid: 'bg-ggreen text-white',
    pastel: 'bg-ggreen-pastel',
    text: 'text-ggreen-deep',
    border: 'border-ggreen',
    ring: 'ring-ggreen',
    hex: '#34A853',
    pastelHex: '#CCF6C5',
    softBg: 'bg-ggreen/10',
  },
  yellow: {
    solid: 'bg-gyellow text-ink',
    pastel: 'bg-gyellow-pastel',
    text: 'text-gyellow-deep',
    border: 'border-gyellow',
    ring: 'ring-gyellow',
    hex: '#F9AB00',
    pastelHex: '#FFE7A5',
    softBg: 'bg-gyellow/15',
  },
  red: {
    solid: 'bg-gred text-white',
    pastel: 'bg-gred-pastel',
    text: 'text-gred-deep',
    border: 'border-gred',
    ring: 'ring-gred',
    hex: '#EA4335',
    pastelHex: '#F8D8D8',
    softBg: 'bg-gred/10',
  },
  ink: {
    solid: 'bg-ink text-white',
    pastel: 'bg-offwhite',
    text: 'text-ink',
    border: 'border-ink',
    ring: 'ring-ink',
    hex: '#1E1E1E',
    pastelHex: '#E4E4E4',
    softBg: 'bg-ink/5',
  },
};

export const accentCycle: Accent[] = ['blue', 'red', 'yellow', 'green'];
export const accentAt = (i: number): Accent => accentCycle[i % accentCycle.length];
