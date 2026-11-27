import type { DomainId, TeamGroup, TeamMember } from '@/types';

export const teamGroups: { id: TeamGroup; title: string; description: string }[] = [
  { id: 'organizer', title: 'Organizers', description: 'Lead the chapter, set direction and keep the community running.' },
  { id: 'domain-lead', title: 'Domain Leads', description: 'Own the learning roadmap, sessions and projects of each technical domain.' },
  { id: 'domain-co-lead', title: 'Domain Co-Leads', description: 'Partner with domain leads to mentor members and run activities.' },
  { id: 'core', title: 'Core Team', description: 'Make every event happen — operations, outreach, content and design.' },
];

/**
 * TEAM — update every academic year.
 *
 * Every slot below is a PLACEHOLDER (`name: null`). Fill in real details only
 * with the member's consent:
 *   name     – full name as the member wants it shown
 *   photo    – put a square image in /public/images/team/ and use
 *              '/images/team/<file>.jpg' (min 400×400, ≤ 150 KB)
 *   github   – full profile URL
 *   linkedin – full profile URL
 * Add or remove slots freely; ids only need to be unique.
 */
const slot = (
  id: string,
  role: string,
  group: TeamGroup,
  domain: DomainId | null = null,
): TeamMember => ({ id, name: null, role, group, domain, bio: null, photo: null, github: null, linkedin: null });

export const team: TeamMember[] = [
  slot('organizer-1', 'Organizer', 'organizer'),
  slot('organizer-2', 'Co-Organizer', 'organizer'),

  slot('lead-dsa', 'DSA Lead', 'domain-lead', 'dsa'),
  slot('lead-web', 'Web Development Lead', 'domain-lead', 'web'),
  slot('lead-aiml', 'AI / ML Lead', 'domain-lead', 'aiml'),
  slot('lead-cloud', 'Cloud Computing Lead', 'domain-lead', 'cloud'),
  slot('lead-design', 'Design & Creativity Lead', 'domain-lead', 'design'),

  slot('colead-dsa', 'DSA Co-Lead', 'domain-co-lead', 'dsa'),
  slot('colead-web', 'Web Development Co-Lead', 'domain-co-lead', 'web'),
  slot('colead-aiml', 'AI / ML Co-Lead', 'domain-co-lead', 'aiml'),
  slot('colead-cloud', 'Cloud Computing Co-Lead', 'domain-co-lead', 'cloud'),
  slot('colead-design', 'Design & Creativity Co-Lead', 'domain-co-lead', 'design'),

  slot('core-1', 'Core Team — Operations', 'core'),
  slot('core-2', 'Core Team — Outreach', 'core'),
  slot('core-3', 'Core Team — Content', 'core'),
  slot('core-4', 'Core Team — Social Media', 'core'),
];

/** Academic year the current team list refers to. PLACEHOLDER until confirmed. */
export const teamYear: string | null = null;

export const getMember = (id: string) => team.find((m) => m.id === id);
