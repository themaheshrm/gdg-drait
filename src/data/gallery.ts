import type { GalleryCategory, GalleryItem } from '@/types';

export const galleryCategories: { id: GalleryCategory; label: string }[] = [
  { id: 'hackathons', label: 'Hackathons' },
  { id: 'workshops', label: 'Workshops' },
  { id: 'bootcamps', label: 'Bootcamps' },
  { id: 'technical-sessions', label: 'Technical Sessions' },
  { id: 'team-activities', label: 'Team Activities' },
  { id: 'community', label: 'Community Memories' },
];

/**
 * GALLERY — authentic photographs only.
 *
 * Every item below is a PLACEHOLDER (`src: null`). To add a real photo:
 *   1. Export it as .webp or .jpg (longest side ≤ 1600px, ideally < 300 KB).
 *   2. Put it in /public/images/gallery/.
 *   3. Set `src: '/images/gallery/<file>.webp'`, write a meaningful `alt`
 *      and set `ratio` to width / height of the image.
 * Get consent from people who are clearly identifiable in photos.
 */
export const gallery: GalleryItem[] = [
  { id: 'g1', src: null, alt: 'Hackathon photo placeholder', caption: 'Hackathon — photo coming soon', category: 'hackathons', ratio: 4 / 5, accent: 'blue' },
  { id: 'g2', src: null, alt: 'Workshop photo placeholder', caption: 'Workshop — photo coming soon', category: 'workshops', ratio: 4 / 3, accent: 'green' },
  { id: 'g3', src: null, alt: 'Bootcamp photo placeholder', caption: 'Bootcamp — photo coming soon', category: 'bootcamps', ratio: 1, accent: 'yellow' },
  { id: 'g4', src: null, alt: 'Technical session photo placeholder', caption: 'Technical session — photo coming soon', category: 'technical-sessions', ratio: 3 / 4, accent: 'red' },
  { id: 'g5', src: null, alt: 'Team activity photo placeholder', caption: 'Team activity — photo coming soon', category: 'team-activities', ratio: 16 / 10, accent: 'blue' },
  { id: 'g6', src: null, alt: 'Community memory photo placeholder', caption: 'Community memory — photo coming soon', category: 'community', ratio: 1, accent: 'green' },
  { id: 'g7', src: null, alt: 'Hackathon photo placeholder', caption: 'Hackathon — photo coming soon', category: 'hackathons', ratio: 4 / 3, accent: 'red' },
  { id: 'g8', src: null, alt: 'Workshop photo placeholder', caption: 'Workshop — photo coming soon', category: 'workshops', ratio: 4 / 5, accent: 'yellow' },
  { id: 'g9', src: null, alt: 'Technical session photo placeholder', caption: 'Technical session — photo coming soon', category: 'technical-sessions', ratio: 4 / 3, accent: 'blue' },
  { id: 'g10', src: null, alt: 'Bootcamp photo placeholder', caption: 'Bootcamp — photo coming soon', category: 'bootcamps', ratio: 3 / 4, accent: 'green' },
  { id: 'g11', src: null, alt: 'Community memory photo placeholder', caption: 'Community memory — photo coming soon', category: 'community', ratio: 16 / 10, accent: 'red' },
  { id: 'g12', src: null, alt: 'Team activity photo placeholder', caption: 'Team activity — photo coming soon', category: 'team-activities', ratio: 1, accent: 'yellow' },
];
