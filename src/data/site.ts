import type { NavItem, SocialLinks, Stat } from '@/types';

/**
 * Global site configuration.
 * ➜ Fields set to `null` are placeholders. Replace them with verified
 *   information only — the UI shows a labelled placeholder until then.
 */
export const site = {
  name: 'GDG on Campus Dr. AIT',
  fullName: 'Google Developer Group on Campus – Dr. Ambedkar Institute of Technology',
  college: 'Dr. Ambedkar Institute of Technology',
  city: 'Bengaluru',
  collegeUrl: 'https://drait.edu.in',
  address: 'Dr. Ambedkar Institute of Technology, Outer Ring Road, Mallathahalli, Bengaluru, Karnataka 560056',
  tagline: 'Build. Learn. Innovate.',
  description:
    'Connecting curious minds, empowering developers, and building the future of technology at Dr. Ambedkar Institute of Technology.',

  /** PLACEHOLDER: official contact e-mail of the chapter */
  email: null as string | null,

  /** Official membership / registration form link */
  joinUrl: 'https://gdg.community.dev/gdg-on-campus-dr-ambedkar-institute-of-technology-bengaluru-india/' as string | null,

  /** PLACEHOLDER: hero community photo, e.g. '/images/hero/community.jpg' (put file in /public/images) */
  heroImage: null as string | null,

  /** PLACEHOLDER: year the chapter was founded */
  foundedYear: null as number | null,

  githubOrg: 'gdg-on-campus-drait',
  websiteRepo: 'https://github.com/gdg-on-campus-drait/gdg-on-campus-drait',
} as const;

export const socials: SocialLinks = {
  github: 'https://github.com/gdg-on-campus-drait',
  /** PLACEHOLDER: LinkedIn page URL */
  linkedin: null,
  /** PLACEHOLDER: Instagram profile URL */
  instagram: null,
  /** Chapter page on gdg.community.dev */
  gdgCommunity: 'https://gdg.community.dev/gdg-on-campus-dr-ambedkar-institute-of-technology-bengaluru-india/',
};

/**
 * Community statistics.
 * PLACEHOLDER: keep `value: null` until real numbers are confirmed.
 * Counters animate automatically once a number is supplied.
 */
export const stats: Stat[] = [
  { label: 'Community members', value: null, suffix: '+', accent: 'blue' },
  { label: 'Events conducted', value: null, suffix: '+', accent: 'green' },
  { label: 'Workshops', value: null, suffix: '+', accent: 'yellow' },
  { label: 'Projects built', value: null, suffix: '+', accent: 'red' },
];

export const navItems: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Domains', to: '/domains' },
  { label: 'Events', to: '/events' },
  { label: 'Projects', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Resources', to: '/resources' },
];

export const joinNavItem: NavItem = { label: 'Join Us', to: '/join' };
