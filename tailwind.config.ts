import type { Config } from 'tailwindcss';

/**
 * GDG on Campus Dr. AIT design tokens.
 * Core + pastel colours come from the official GDG on Campus brand guide.
 * `*-deep` shades are accessible text variants (≥ 4.5:1 on white) used where
 * a brand colour has to carry small text.
 */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: { center: true },
    extend: {
      colors: {
        gblue: { DEFAULT: '#4285F4', deep: '#1967D2', pastel: '#C3ECF6' },
        ggreen: { DEFAULT: '#34A853', deep: '#137333', pastel: '#CCF6C5' },
        gyellow: { DEFAULT: '#F9AB00', deep: '#A35200', pastel: '#FFE7A5' },
        gred: { DEFAULT: '#EA4335', deep: '#C5221F', pastel: '#F8D8D8' },
        offwhite: '#F0F0F0',
        ink: { DEFAULT: '#1E1E1E', soft: '#4A4A4A', muted: '#5F6368' },
        line: '#DADCE0',
      },
      fontFamily: {
        sans: ['"Google Sans"', '"Google Sans Text"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['"Google Sans Code"', '"Google Sans Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      fontSize: {
        // Fluid display scale
        'display-xl': ['clamp(3.75rem, 9vw, 8rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-lg': ['clamp(2.75rem, 6.5vw, 5.5rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'display-md': ['clamp(2.25rem, 4.6vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-sm': ['clamp(1.75rem, 3vw, 2.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.75rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(30,30,30,0.04), 0 8px 24px -12px rgba(30,30,30,0.12)',
        lift: '0 2px 4px rgba(30,30,30,0.04), 0 24px 48px -20px rgba(30,30,30,0.22)',
      },
      maxWidth: { site: '80rem' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        'spin-slow': { to: { transform: 'rotate(360deg)' } },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        'spin-slow': 'spin-slow 30s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
