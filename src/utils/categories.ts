import type { Accent, EventCategory, GalleryCategory } from '@/types';
import { eventCategories } from '@/data/events';
import { galleryCategories } from '@/data/gallery';

export const eventCategoryAccent: Record<EventCategory, Accent> = {
  workshop: 'blue',
  bootcamp: 'green',
  hackathon: 'red',
  'guest-session': 'yellow',
  meetup: 'ink',
};

export const eventCategoryLabel = (c: EventCategory) => eventCategories.find((x) => x.id === c)?.label.replace(/s$/, '') ?? c;

export const galleryCategoryLabel = (c: GalleryCategory) => galleryCategories.find((x) => x.id === c)?.label ?? c;
