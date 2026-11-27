import type { Accent } from '@/types';

/** Copy for the About page and home "About" preview. */

export const pillars: { title: string; text: string; accent: Accent }[] = [
  { title: 'Build', text: 'Create real-world projects and practical solutions.', accent: 'blue' },
  { title: 'Explore', text: 'Learn emerging technologies and developer tools.', accent: 'green' },
  { title: 'Contribute', text: 'Participate in open-source development.', accent: 'yellow' },
  { title: 'Collaborate', text: 'Connect with developers, seniors, alumni and mentors.', accent: 'red' },
];

export const vision =
  'To build a thriving, inclusive developer ecosystem at Dr. AIT where every student can explore technology, grow with confidence and create solutions that matter.';

export const mission = [
  'Make learning technology accessible to every student, regardless of branch or experience.',
  'Bridge classroom theory and industry practice through hands-on workshops, bootcamps and projects.',
  'Encourage open-source contribution and collaborative, peer-to-peer learning.',
  'Connect students with mentors, alumni and the wider Google developer community.',
];

export const whatWeDo: { title: string; text: string; accent: Accent }[] = [
  { title: 'Workshops', text: 'Hands-on sessions where you build something real in a few hours.', accent: 'blue' },
  { title: 'Bootcamps', text: 'Structured multi-session tracks that take you from basics to a finished project.', accent: 'green' },
  { title: 'Hackathons', text: 'Team up, prototype fast and solve real problems under a deadline.', accent: 'red' },
  { title: 'Guest sessions', text: 'Learn from industry professionals, alumni and community experts.', accent: 'yellow' },
  { title: 'Study jams', text: 'Learn together through guided courses on Google technologies.', accent: 'blue' },
  { title: 'Open source', text: 'Contribute to real codebases and grow through code review.', accent: 'green' },
];

export const whyGdg: { title: string; text: string }[] = [
  {
    title: 'A global network',
    text: 'Google Developer Groups on Campus are university-based communities for students interested in Google developer technologies — connecting you to a worldwide network of peers.',
  },
  {
    title: 'Learning by doing',
    text: 'Every activity is designed around building. You learn faster when you ship something you care about.',
  },
  {
    title: 'Peer-to-peer growth',
    text: 'Seniors mentor juniors, juniors bring fresh ideas, and everyone levels up together.',
  },
  {
    title: 'Real-world skills',
    text: 'Teamwork, communication, Git workflows and project ownership — the skills that matter beyond exams.',
  },
];

export const culture: { title: string; text: string }[] = [
  { title: 'Curiosity first', text: 'No question is too basic. We celebrate asking “why?” and “how?”.' },
  { title: 'Build in public', text: 'We share work early, learn from feedback and document what we build.' },
  { title: 'Everyone teaches', text: 'If you learned something this week, you can teach it next week.' },
  { title: 'Inclusive by default', text: 'Welcoming to every branch, every year and every background.' },
];

/**
 * Chapter timeline. PLACEHOLDER — replace `when` and `text` with verified
 * milestones (founding date, first event, etc.). Do not invent dates.
 */
export const journey: { when: string | null; title: string; text: string; isPlaceholder?: boolean }[] = [
  { when: null, title: 'The beginning', text: 'Founding of GDG on Campus Dr. AIT — date and story to be added.', isPlaceholder: true },
  { when: null, title: 'First community event', text: 'Details of our first session will be added here.', isPlaceholder: true },
  { when: null, title: 'Domains take shape', text: 'DSA, Web, AI/ML, Cloud and Design domains formed with dedicated leads.', isPlaceholder: true },
  { when: null, title: 'What’s next', text: 'More workshops, hackathons and open-source projects — built with you.', isPlaceholder: true },
];
