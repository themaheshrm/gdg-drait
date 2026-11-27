import type { EventStatus } from '@/types';

const fmt = new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

/** Parse `YYYY-MM-DD` as a local date (avoids timezone shifts). */
export function parseISODate(iso: string) {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, (m ?? 1) - 1, d ?? 1);
}

export function formatDate(iso: string | null | undefined, end?: string | null) {
  if (!iso) return 'Date to be announced';
  const start = fmt.format(parseISODate(iso));
  if (end && end !== iso) return `${start} – ${fmt.format(parseISODate(end))}`;
  return start;
}

export function dateParts(iso: string | null | undefined) {
  if (!iso) return null;
  const d = parseISODate(iso);
  return {
    day: d.getDate().toString().padStart(2, '0'),
    month: d.toLocaleString('en-IN', { month: 'short' }),
    year: d.getFullYear(),
  };
}

export const statusLabel: Record<EventStatus, string> = {
  upcoming: 'Upcoming',
  ongoing: 'Happening now',
  completed: 'Completed',
  tba: 'To be announced',
};

export function initials(name: string | null) {
  if (!name) return '';
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join('');
}
