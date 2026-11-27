import type { ReactNode } from 'react';
import { Circle, QuarterCircle } from './Shapes';

export function EmptyState({ title, description, action }: { title: string; description?: ReactNode; action?: ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-4xl border border-dashed border-ink/20 bg-white px-6 py-14 text-center">
      <QuarterCircle className="absolute -left-2 -top-2 h-16 w-16 opacity-80" color="#FFE7A5" />
      <Circle className="absolute -bottom-6 -right-6 h-20 w-20" color="#C3ECF6" />
      <div className="relative mx-auto max-w-md">
        <p className="text-xl font-medium">{title}</p>
        {description && <div className="mt-2 text-ink-soft">{description}</div>}
        {action && <div className="mt-6 flex justify-center">{action}</div>}
      </div>
    </div>
  );
}
