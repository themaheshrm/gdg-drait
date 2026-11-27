import type { Project } from '@/types';

/**
 * Community projects.
 * Add a project by copying an entry. Only list contributors who agreed to be
 * credited. Leave `githubUrl` / `demoUrl` as `null` if not available — the
 * card hides those buttons automatically.
 */
export const projects: Project[] = [
  {
    slug: 'gdg-drait-website',
    name: 'GDG on Campus Dr. AIT Website',
    description:
      'The official website of our community — the one you are looking at. Built with React, Vite and TypeScript, styled with the GDG on Campus brand system, and open to contributions from every domain team.',
    domain: 'web',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    contributors: ['GDG on Campus Dr. AIT community'],
    githubUrl: 'https://github.com/gdg-on-campus-drait/gdg-on-campus-drait',
    demoUrl: null,
    featured: true,
    status: 'active',
  },
  {
    slug: 'placeholder-dsa-project',
    name: 'DSA Project Slot',
    description: 'Placeholder for a project from the DSA domain — for example a visualiser, a practice tracker or a contest tool.',
    domain: 'dsa',
    stack: ['To be added'],
    contributors: [],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    status: 'planned',
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-aiml-project',
    name: 'AI / ML Project Slot',
    description: 'Placeholder for a project from the AI/ML domain. Add the model, dataset and results once the project is published.',
    domain: 'aiml',
    stack: ['To be added'],
    contributors: [],
    githubUrl: null,
    demoUrl: null,
    featured: true,
    status: 'planned',
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-cloud-project',
    name: 'Cloud Project Slot',
    description: 'Placeholder for a project from the Cloud Computing domain — deployments, automation or infrastructure work.',
    domain: 'cloud',
    stack: ['To be added'],
    contributors: [],
    githubUrl: null,
    demoUrl: null,
    status: 'planned',
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-design-project',
    name: 'Design Project Slot',
    description: 'Placeholder for a case study from the Design & Creativity domain — UI/UX redesigns, design systems or brand work.',
    domain: 'design',
    stack: ['To be added'],
    contributors: [],
    githubUrl: null,
    demoUrl: null,
    status: 'planned',
    isPlaceholder: true,
  },
  {
    slug: 'placeholder-web-project',
    name: 'Web Project Slot',
    description: 'Placeholder for another Web Development project built by members.',
    domain: 'web',
    stack: ['To be added'],
    contributors: [],
    githubUrl: null,
    demoUrl: null,
    status: 'planned',
    isPlaceholder: true,
  },
];
