import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils/cn';

type Variant = 'primary' | 'secondary' | 'blue' | 'ghost' | 'light';
type Size = 'md' | 'lg' | 'sm';

const base =
  'group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,color,box-shadow,transform,border-color] duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-ink text-white hover:bg-gblue-deep shadow-[0_1px_0_rgba(255,255,255,0.1)_inset]',
  blue: 'bg-gblue-deep text-white hover:bg-ink',
  secondary: 'border border-ink/15 bg-white text-ink hover:border-ink hover:bg-white',
  ghost: 'text-ink hover:bg-ink/5',
  light: 'bg-white text-ink hover:bg-gyellow-pastel',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-[0.95rem]',
  lg: 'h-12 px-6 text-base sm:h-14 sm:px-7',
};

interface CommonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  icon?: ReactNode;
  iconPosition?: 'start' | 'end';
  'aria-label'?: string;
}

type ButtonProps = CommonProps &
  (
    | { to: string; href?: never; onClick?: never; type?: never }
    | { href: string; to?: never; onClick?: never; type?: never }
    | { onClick: () => void; to?: never; href?: never; type?: 'button' | 'submit' }
  );

/**
 * One button for every action:
 *  - `to`      → internal route (react-router Link)
 *  - `href`    → external link (new tab, rel="noopener noreferrer")
 *  - `onClick` → in-page action
 */
export function Button({ children, variant = 'primary', size = 'md', className, icon, iconPosition = 'end', ...rest }: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);
  const content = (
    <>
      {icon && iconPosition === 'start' && <span aria-hidden className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'end' && (
        <span aria-hidden className="shrink-0 transition-transform duration-200 group-hover/btn:translate-x-0.5">
          {icon}
        </span>
      )}
    </>
  );

  if ('to' in rest && rest.to) {
    return (
      <Link to={rest.to} className={classes} aria-label={rest['aria-label']}>
        {content}
      </Link>
    );
  }
  if ('href' in rest && rest.href) {
    return (
      <a href={rest.href} target="_blank" rel="noopener noreferrer" className={classes} aria-label={rest['aria-label']}>
        {content}
        {!icon && <ArrowUpRight aria-hidden className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />}
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    );
  }
  const { onClick, type } = rest as { onClick: () => void; type?: 'button' | 'submit' };
  return (
    <button type={type ?? 'button'} onClick={onClick} className={classes} aria-label={rest['aria-label']}>
      {content}
    </button>
  );
}
