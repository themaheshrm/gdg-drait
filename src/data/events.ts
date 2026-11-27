import type { EventCategory, GdgEvent } from '@/types';

export const eventCategories: { id: EventCategory; label: string }[] = [
  { id: 'workshop', label: 'Workshops' },
  { id: 'bootcamp', label: 'Bootcamps' },
  { id: 'hackathon', label: 'Hackathons' },
  { id: 'guest-session', label: 'Guest Sessions' },
  { id: 'meetup', label: 'Community Meetups' },
];

/**
 * Events.
 *
 * ⚠️ The entries below are TEMPLATE PLACEHOLDERS (`isPlaceholder: true`).
 * They show how an event is structured and are clearly labelled on the site.
 * Replace them with real events — never publish invented dates, venues or
 * speakers. Copy one block, fill in the fields, and set `isPlaceholder: false`
 * (or remove the line).
 *
 * Example of a real entry:
 * {
 *   slug: 'intro-to-react-2027',
 *   title: 'Intro to React',
 *   category: 'workshop',
 *   status: 'upcoming',
 *   date: '2027-01-20',
 *   time: '2:00 PM – 5:00 PM',
 *   venue: 'Seminar Hall, Dr. AIT',
 *   summary: 'One-line summary…',
 *   description: ['Paragraph 1…', 'Paragraph 2…'],
 *   image: '/images/events/intro-to-react.jpg',
 *   registrationUrl: 'https://gdg.community.dev/…',
 *   domain: 'web',
 *   featured: true,
 * }
 */
export const events: GdgEvent[] = [
  {
    slug: 'placeholder-web-workshop',
    title: 'Web Development Workshop',
    category: 'workshop',
    status: 'tba',
    date: null,
    venue: null,
    summary: 'Placeholder for an upcoming hands-on web development workshop. Details will be announced by the Web Development domain.',
    description: [
      'This is a placeholder entry. When the Web Development team announces its next workshop, replace this text with the real description, agenda, venue and registration link.',
      'Workshops are hands-on sessions where members build something real in a few hours, guided by domain leads and mentors.',
    ],
    image: null,
    registrationUrl: null,
    domain: 'web',
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-hackathon',
    title: 'Community Hackathon',
    category: 'hackathon',
    status: 'tba',
    date: null,
    venue: null,
    summary: 'Placeholder for a community hackathon. Theme, dates, prizes and registration will be published once confirmed.',
    description: [
      'This is a placeholder entry for a hackathon. Replace it with the official theme, timeline, judging criteria and registration link once announced.',
      'Hackathons bring together designers, developers and problem-solvers to prototype solutions in teams.',
    ],
    image: null,
    registrationUrl: null,
    domain: null,
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-aiml-bootcamp',
    title: 'AI / ML Bootcamp',
    category: 'bootcamp',
    status: 'tba',
    date: null,
    venue: null,
    summary: 'Placeholder for a multi-day AI/ML bootcamp. Curriculum and schedule to be announced.',
    description: [
      'This is a placeholder entry. Replace it with the bootcamp curriculum, session dates, prerequisites and registration details.',
      'Bootcamps are structured, multi-session learning tracks that take members from fundamentals to a finished project.',
    ],
    image: null,
    registrationUrl: null,
    domain: 'aiml',
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-cloud-study-jam',
    title: 'Cloud Study Jam',
    category: 'workshop',
    status: 'tba',
    date: null,
    venue: null,
    summary: 'Placeholder for a guided cloud learning session with hands-on labs.',
    description: [
      'This is a placeholder entry. Replace it with the study jam details, lab tracks and registration information.',
    ],
    image: null,
    registrationUrl: null,
    domain: 'cloud',
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-guest-session',
    title: 'Guest Speaker Session',
    category: 'guest-session',
    status: 'tba',
    date: null,
    venue: null,
    summary: 'Placeholder for a talk by an industry professional or alumnus. Speaker to be announced.',
    description: [
      'This is a placeholder entry. Add the confirmed speaker, topic, date and venue here — do not publish a speaker before they have confirmed.',
    ],
    image: null,
    registrationUrl: null,
    domain: null,
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-dsa-contest',
    title: 'DSA Coding Contest',
    category: 'meetup',
    status: 'tba',
    date: null,
    venue: null,
    summary: 'Placeholder for a community coding contest and problem-solving meetup.',
    description: ['This is a placeholder entry. Replace it with the contest format, platform link and schedule.'],
    image: null,
    registrationUrl: null,
    domain: 'dsa',
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-design-meetup',
    title: 'Design Jam Meetup',
    category: 'meetup',
    status: 'tba',
    date: null,
    venue: null,
    summary: 'Placeholder for a design critique and Figma jam meetup.',
    description: ['This is a placeholder entry. Replace it with real meetup details once announced.'],
    image: null,
    registrationUrl: null,
    domain: 'design',
    isPlaceholder: true,
  },
];

export const getEvent = (slug: string | undefined) => events.find((e) => e.slug === slug);

/** Past events: status `completed`. */
export const isPastEvent = (e: GdgEvent) => e.status === 'completed';
