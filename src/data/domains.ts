import type { Domain } from '@/types';

/**
 * Technical domains of GDG on Campus Dr. AIT.
 * Domain leads should keep their section's `learn`, `technologies` and
 * `activities` lists up to date each semester.
 */
export const domains: Domain[] = [
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    shortName: 'DSA',
    accent: 'blue',
    tagline: 'Think clearly. Solve efficiently.',
    intro:
      'The problem-solving core of the community. We build strong fundamentals in data structures, algorithmic thinking and complexity analysis — the skills behind clean code, competitive programming and technical interviews.',
    learn: [
      'Arrays, strings, linked lists, stacks and queues',
      'Trees, graphs, heaps and hashing',
      'Recursion, backtracking and dynamic programming',
      'Greedy techniques, sorting and searching',
      'Time and space complexity analysis',
      'Interview-style problem solving and communication',
    ],
    technologies: ['C++', 'Java', 'Python', 'STL', 'LeetCode', 'Codeforces'],
    activities: ['Weekly problem-solving sessions', 'Topic-wise practice sheets', 'Peer code reviews', 'Mock interviews', 'Coding contests'],
    leadIds: ['lead-dsa', 'colead-dsa'],
    resourceCategory: 'dsa',
  },
  {
    id: 'web',
    name: 'Web Development',
    shortName: 'Web',
    accent: 'green',
    tagline: 'Ship experiences people love to use.',
    intro:
      'From the first HTML page to production-grade full-stack apps. Members learn modern frontend and backend engineering, accessibility, performance and how to collaborate on real codebases with Git and GitHub.',
    learn: [
      'Semantic HTML, modern CSS and responsive layouts',
      'JavaScript, TypeScript and the browser platform',
      'Component-driven UIs with React',
      'APIs, Node.js and backend fundamentals',
      'Accessibility, performance and web best practices',
      'Git workflows, code review and deployment',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Firebase'],
    activities: ['Hands-on build workshops', 'Project sprints', 'Open-source contribution drives', 'Portfolio reviews', 'UI clone challenges'],
    leadIds: ['lead-web', 'colead-web'],
    resourceCategory: 'web',
  },
  {
    id: 'aiml',
    name: 'Artificial Intelligence & Machine Learning',
    shortName: 'AI / ML',
    accent: 'red',
    tagline: 'Teach machines. Stay curious.',
    intro:
      'Explore how machines learn from data. We move from mathematical intuition to practical models, covering classical ML, deep learning and generative AI — always with a focus on responsible, real-world applications.',
    learn: [
      'Python for data science: NumPy, pandas, Matplotlib',
      'Supervised and unsupervised learning',
      'Neural networks and deep learning',
      'Computer vision and natural language processing',
      'Building with generative AI and LLM APIs',
      'Responsible AI and model evaluation',
    ],
    technologies: ['Python', 'TensorFlow', 'Keras', 'PyTorch', 'scikit-learn', 'Kaggle', 'Gemini API', 'Colab'],
    activities: ['Study jams', 'Kaggle-style challenges', 'Paper reading circles', 'Model-building workshops', 'AI project showcases'],
    leadIds: ['lead-aiml', 'colead-aiml'],
    resourceCategory: 'aiml',
  },
  {
    id: 'cloud',
    name: 'Cloud Computing',
    shortName: 'Cloud',
    accent: 'yellow',
    tagline: 'Deploy, scale and automate.',
    intro:
      'Learn how modern software runs in production. Members get hands-on with cloud platforms, containers, CI/CD and infrastructure fundamentals — taking projects from a laptop to the world.',
    learn: [
      'Cloud fundamentals: compute, storage and networking',
      'Google Cloud and Firebase services',
      'Linux, shell scripting and the command line',
      'Containers with Docker and orchestration basics',
      'CI/CD pipelines with GitHub Actions',
      'Monitoring, security and cost awareness',
    ],
    technologies: ['Google Cloud', 'Firebase', 'Docker', 'Kubernetes', 'Linux', 'GitHub Actions', 'Terraform'],
    activities: ['Cloud study jams', 'Hands-on labs', 'Deploy-your-project days', 'DevOps workshops', 'Certification prep groups'],
    leadIds: ['lead-cloud', 'colead-cloud'],
    resourceCategory: 'cloud',
  },
  {
    id: 'design',
    name: 'Design & Creativity',
    shortName: 'Design',
    accent: 'ink',
    tagline: 'Make it useful. Make it beautiful.',
    intro:
      'Where technology meets people. The design domain explores UI/UX, visual design, branding and storytelling — and crafts the visual identity of every GDG on Campus Dr. AIT event.',
    learn: [
      'UI/UX fundamentals and design thinking',
      'Wireframing and prototyping in Figma',
      'Typography, colour and layout systems',
      'Design systems and Material Design',
      'Event branding, posters and social media creatives',
      'User research and usability testing',
    ],
    technologies: ['Figma', 'Material Design 3', 'Canva', 'Adobe Illustrator', 'Google Fonts'],
    activities: ['Design critiques', 'Figma workshops', 'Redesign challenges', 'Event creative sprints', 'Portfolio sessions'],
    leadIds: ['lead-design', 'colead-design'],
    resourceCategory: 'design',
  },
];

export const getDomain = (id: string | null | undefined) => domains.find((d) => d.id === id);
