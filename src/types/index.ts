/**
 * Shared content types. Every editable piece of website content lives in
 * `src/data/*` and is typed here so contributors get autocomplete + safety.
 *
 * Convention: a value of `null` means "not supplied yet". The UI renders a
 * clearly labelled placeholder instead of inventing information.
 */

export type Accent = 'blue' | 'green' | 'yellow' | 'red' | 'ink';

export type DomainId = 'dsa' | 'web' | 'aiml' | 'cloud' | 'design';

export interface SocialLinks {
  github: string | null;
  linkedin: string | null;
  instagram: string | null;
  /** Official GDG community chapter page (gdg.community.dev). */
  gdgCommunity: string | null;
}

export interface Stat {
  label: string;
  /** Leave `null` until a verified number is available. */
  value: number | null;
  suffix?: string;
  accent: Accent;
}

export interface NavItem {
  label: string;
  to: string;
}

export interface Domain {
  id: DomainId;
  name: string;
  shortName: string;
  accent: Accent;
  tagline: string;
  intro: string;
  learn: string[];
  technologies: string[];
  activities: string[];
  /** Team member ids (see `team.ts`) */
  leadIds: string[];
  /** Resource category ids (see `resources.ts`) shown on the domain section */
  resourceCategory: ResourceCategoryId | null;
}

export type EventCategory = 'workshop' | 'bootcamp' | 'hackathon' | 'guest-session' | 'meetup';

/** `tba` = scheduled but details not yet announced */
export type EventStatus = 'upcoming' | 'ongoing' | 'completed' | 'tba';

export interface GdgEvent {
  slug: string;
  title: string;
  category: EventCategory;
  status: EventStatus;
  /** ISO date `YYYY-MM-DD`, or null when not announced */
  date: string | null;
  endDate?: string | null;
  time?: string | null;
  venue: string | null;
  summary: string;
  description: string[];
  /** Path/URL of a banner image. Null renders a branded placeholder banner. */
  image: string | null;
  registrationUrl: string | null;
  domain?: DomainId | null;
  speakers?: { name: string; role?: string }[];
  agenda?: string[];
  featured?: boolean;
  /** True for template entries that must be replaced with real event data */
  isPlaceholder?: boolean;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  domain: DomainId;
  stack: string[];
  /** Names or GitHub handles of contributors, as supplied by the team */
  contributors: string[];
  githubUrl: string | null;
  demoUrl: string | null;
  featured?: boolean;
  status?: 'active' | 'completed' | 'planned';
  isPlaceholder?: boolean;
}

export type TeamGroup = 'organizer' | 'domain-lead' | 'domain-co-lead' | 'core';

export interface TeamMember {
  id: string;
  /** null = position not yet announced */
  name: string | null;
  role: string;
  group: TeamGroup;
  domain?: DomainId | null;
  bio: string | null;
  photo: string | null;
  github: string | null;
  linkedin: string | null;
}

export type GalleryCategory =
  | 'hackathons'
  | 'workshops'
  | 'bootcamps'
  | 'technical-sessions'
  | 'team-activities'
  | 'community';

export interface GalleryItem {
  id: string;
  src: string | null;
  alt: string;
  caption: string;
  category: GalleryCategory;
  /** width / height — used for masonry layout and placeholder sizing */
  ratio: number;
  accent: Accent;
}

export type ResourceCategoryId = 'dsa' | 'web' | 'aiml' | 'cloud' | 'design' | 'tools' | 'docs' | 'github';

export interface ResourceCategory {
  id: ResourceCategoryId;
  title: string;
  description: string;
  accent: Accent;
}

export interface Resource {
  title: string;
  url: string;
  description: string;
  category: ResourceCategoryId;
  type: 'Course' | 'Docs' | 'Practice' | 'Guide' | 'Repository' | 'Tool' | 'Roadmap';
  free?: boolean;
}
