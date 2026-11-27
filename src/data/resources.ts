import type { Resource, ResourceCategory } from '@/types';

export const resourceCategories: ResourceCategory[] = [
  { id: 'dsa', title: 'DSA', description: 'Practice platforms and references for problem solving.', accent: 'blue' },
  { id: 'web', title: 'Web Development', description: 'Learn the web platform and modern frameworks.', accent: 'green' },
  { id: 'aiml', title: 'AI / ML', description: 'Courses and docs for machine learning and AI.', accent: 'red' },
  { id: 'cloud', title: 'Cloud Computing', description: 'Cloud platforms, containers and DevOps.', accent: 'yellow' },
  { id: 'design', title: 'Design', description: 'UI/UX, design systems and visual design.', accent: 'ink' },
  { id: 'tools', title: 'Development Tools', description: 'Everyday tools every developer should know.', accent: 'blue' },
  { id: 'docs', title: 'Documentation', description: 'Official developer documentation hubs.', accent: 'green' },
  { id: 'github', title: 'Useful GitHub Repos', description: 'Open-source repositories worth starring.', accent: 'red' },
];

/**
 * A curated starter list of well-known, free public resources.
 * Domain leads: review, extend and replace with your own recommendations.
 */
export const resources: Resource[] = [
  // DSA
  { title: 'CP-Algorithms', url: 'https://cp-algorithms.com/', description: 'In-depth explanations of algorithms and data structures used in competitive programming.', category: 'dsa', type: 'Guide', free: true },
  { title: 'LeetCode', url: 'https://leetcode.com/', description: 'Interview-style problems with discussions, contests and topic tags.', category: 'dsa', type: 'Practice' },
  { title: 'Codeforces', url: 'https://codeforces.com/', description: 'Regular competitive programming contests and a huge problem archive.', category: 'dsa', type: 'Practice', free: true },
  { title: 'VisuAlgo', url: 'https://visualgo.net/en', description: 'Animated visualisations of data structures and algorithms.', category: 'dsa', type: 'Tool', free: true },
  { title: 'USACO Guide', url: 'https://usaco.guide/', description: 'A structured, free curriculum from beginner to advanced competitive programming.', category: 'dsa', type: 'Course', free: true },

  // Web
  { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/', description: 'The reference for HTML, CSS, JavaScript and Web APIs.', category: 'web', type: 'Docs', free: true },
  { title: 'web.dev Learn', url: 'https://web.dev/learn', description: 'Google’s courses on HTML, CSS, accessibility, performance and more.', category: 'web', type: 'Course', free: true },
  { title: 'React Docs', url: 'https://react.dev/learn', description: 'Official React documentation with interactive examples.', category: 'web', type: 'Docs', free: true },
  { title: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/', description: 'Official guide to typing your JavaScript.', category: 'web', type: 'Docs', free: true },
  { title: 'freeCodeCamp', url: 'https://www.freecodecamp.org/learn', description: 'Free, project-based curriculum for web development.', category: 'web', type: 'Course', free: true },

  // AI / ML
  { title: 'Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course', description: 'Google’s fast-paced, practical introduction to machine learning.', category: 'aiml', type: 'Course', free: true },
  { title: 'Kaggle Learn', url: 'https://www.kaggle.com/learn', description: 'Short hands-on courses in Python, pandas, ML and deep learning.', category: 'aiml', type: 'Course', free: true },
  { title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials', description: 'Official tutorials for building models with TensorFlow and Keras.', category: 'aiml', type: 'Docs', free: true },
  { title: 'Gemini API Docs', url: 'https://ai.google.dev/', description: 'Build with Google’s generative AI models.', category: 'aiml', type: 'Docs', free: true },
  { title: 'Hugging Face Learn', url: 'https://huggingface.co/learn', description: 'Free courses on NLP, transformers, diffusion and agents.', category: 'aiml', type: 'Course', free: true },

  // Cloud
  { title: 'Google Cloud Skills Boost', url: 'https://www.cloudskillsboost.google/', description: 'Hands-on labs and learning paths for Google Cloud.', category: 'cloud', type: 'Course' },
  { title: 'Google Cloud Documentation', url: 'https://cloud.google.com/docs', description: 'Official docs, quickstarts and architecture guides.', category: 'cloud', type: 'Docs', free: true },
  { title: 'Firebase Documentation', url: 'https://firebase.google.com/docs', description: 'Build and ship apps with Firebase.', category: 'cloud', type: 'Docs', free: true },
  { title: 'Docker Get Started', url: 'https://docs.docker.com/get-started/', description: 'Learn containers from the official Docker guide.', category: 'cloud', type: 'Guide', free: true },
  { title: 'Kubernetes Basics', url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/', description: 'Interactive introduction to Kubernetes concepts.', category: 'cloud', type: 'Guide', free: true },

  // Design
  { title: 'Material Design 3', url: 'https://m3.material.io/', description: 'Google’s open-source design system: guidelines, components and tools.', category: 'design', type: 'Docs', free: true },
  { title: 'Figma Help Center', url: 'https://help.figma.com/', description: 'Official tutorials for designing and prototyping in Figma.', category: 'design', type: 'Guide' },
  { title: 'Laws of UX', url: 'https://lawsofux.com/', description: 'A collection of psychology principles for designing interfaces.', category: 'design', type: 'Guide', free: true },
  { title: 'Google Fonts', url: 'https://fonts.google.com/', description: 'Free, open-source fonts with pairing and typography knowledge.', category: 'design', type: 'Tool', free: true },

  // Tools
  { title: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2', description: 'The complete free book on Git.', category: 'tools', type: 'Guide', free: true },
  { title: 'GitHub Docs — Get Started', url: 'https://docs.github.com/en/get-started', description: 'Learn repositories, branches, pull requests and collaboration.', category: 'tools', type: 'Docs', free: true },
  { title: 'VS Code Docs', url: 'https://code.visualstudio.com/docs', description: 'Get the most out of Visual Studio Code.', category: 'tools', type: 'Docs', free: true },
  { title: 'Chrome DevTools', url: 'https://developer.chrome.com/docs/devtools', description: 'Debug, profile and inspect web apps in Chrome.', category: 'tools', type: 'Docs', free: true },
  { title: 'roadmap.sh', url: 'https://roadmap.sh/', description: 'Community-built learning roadmaps for developer roles.', category: 'tools', type: 'Roadmap', free: true },

  // Docs
  { title: 'Google for Developers', url: 'https://developers.google.com/', description: 'Documentation hub for Google developer products.', category: 'docs', type: 'Docs', free: true },
  { title: 'Android Developers', url: 'https://developer.android.com/', description: 'Official docs and courses for Android development.', category: 'docs', type: 'Docs', free: true },
  { title: 'Flutter Docs', url: 'https://docs.flutter.dev/', description: 'Build cross-platform apps with Flutter.', category: 'docs', type: 'Docs', free: true },
  { title: 'Python Docs', url: 'https://docs.python.org/3/', description: 'Official Python language and standard library reference.', category: 'docs', type: 'Docs', free: true },

  // GitHub
  { title: 'developer-roadmap', url: 'https://github.com/kamranahmedse/developer-roadmap', description: 'Interactive roadmaps and guides for developers.', category: 'github', type: 'Repository', free: true },
  { title: 'coding-interview-university', url: 'https://github.com/jwasham/coding-interview-university', description: 'A complete computer science study plan.', category: 'github', type: 'Repository', free: true },
  { title: 'TheAlgorithms / Python', url: 'https://github.com/TheAlgorithms/Python', description: 'All algorithms implemented in Python, for learning.', category: 'github', type: 'Repository', free: true },
  { title: 'first-contributions', url: 'https://github.com/firstcontributions/first-contributions', description: 'Make your very first open-source contribution.', category: 'github', type: 'Repository', free: true },
  { title: 'public-apis', url: 'https://github.com/public-apis/public-apis', description: 'A list of free APIs for your next project.', category: 'github', type: 'Repository', free: true },
  { title: 'Google Engineering Practices', url: 'https://github.com/google/eng-practices', description: 'Google’s guides to code review.', category: 'github', type: 'Repository', free: true },
];
