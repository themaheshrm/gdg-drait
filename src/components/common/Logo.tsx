import { Link } from 'react-router-dom';
import lockup from '@/assets/logos/gdg-lockup.png';
import mark from '@/assets/logos/gdg-mark.png';
import { cn } from '@/utils/cn';

/**
 * Official GDG on Campus Dr. AIT logo (from the chapter's lockup asset).
 * Always rendered at its natural aspect ratio — never stretched or recoloured.
 */
export function Logo({
  className,
  variant = 'lockup',
  linked = true,
  onClick,
}: {
  className?: string;
  variant?: 'lockup' | 'mark';
  linked?: boolean;
  onClick?: () => void;
}) {
  const img =
    variant === 'lockup' ? (
      <img src={lockup} alt="GDG on Campus Dr. AIT" width={900} height={130} className={cn('h-8 w-auto sm:h-9', className)} />
    ) : (
      <img src={mark} alt="GDG on Campus Dr. AIT" width={256} height={256} className={cn('h-10 w-auto', className)} />
    );
  if (!linked) return img;
  return (
    <Link to="/" onClick={onClick} aria-label="GDG on Campus Dr. AIT — home" className="inline-flex shrink-0 items-center rounded-lg">
      {img}
    </Link>
  );
}
