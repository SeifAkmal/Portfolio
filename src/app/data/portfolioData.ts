export const portfolioData = {
  basics: {
    name: 'Seif Akmal',
    label: 'Frontend Engineer',
    summary: `As a Frontend Engineer, I build scalable, high-performance web applications using Angular, React, and Next.js.

I am fully prepared to own the frontend lifecycle of a SaaS application—from architecture design to final deployment.

I focus on writing maintainable code, handling complex user workflows, and performance optimization.

For me, a great frontend balances clean code under the hood with a flawless user experience.`,
    location: {
      city: 'El-Shorouk',
      region: 'Cairo',
      country: 'Egypt',
    },
    contact: {
      email: 'seif.akmal.dev@outlook.com',
      phone: '+201013499043',
      linkedin: 'https://www.linkedin.com/in/seif-akmal/',
      github: 'https://github.com/SeifAkmal',
      cv: '/Seif_Akmal_Frontend_Engineer.pdf',
    },
  },
  skills: {
    technical: [
      // Frameworks & Core Libraries
      'Angular',
      'React.js',
      'Next.js',

      // Core Languages
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'SCSS',

      // State Management & Reactivity
      'RxJS',
      'Angular Signals',
      'NgRx (Basics)',
      'Zustand / Redux Toolkit',

      // Async Data & Forms
      'REST APIs',
      'TanStack Query (React Query)',
      'React Hook Form',

      // UI Components & Styling
      'Tailwind CSS',
      'MUI (Material UI)',
      'Angular Material',
      'PrimeNG',
      'Bootstrap',

      // Tools
      'Git',
      'GitHub',
      'Figma',
    ],
  },
  projects: [
    {
      name: 'AI Spinal Condition Diagnosis',
      type: 'Web Application',
      description:
        'An Angular frontend integrated with a real REST API, handling authentication, medical data, and diagnostic reports. Built as part of a team-based project with a focus on clean architecture and scalability.',
      technologies: ['Angular', 'TypeScript', 'REST APIs', 'RxJS', 'SCSS'],
      links: {
        github: 'https://github.com/SeifAkmal/Spinal.git',
        live: 'Coming soon',
      },
    },
    {
      name: 'Minto Store',
      type: 'E-Commerce Web Application',
      description: ` Built a responsive Angular & TypeScript e-commerce frontend with a dynamic cart and checkout flow.
Used Angular Signals for high-performance, reactive state management.
Integrated REST APIs with offline fallback mechanisms to ensure a seamless user experience.`,
      technologies: [
        'Angular',
        'TypeScript',
        'RxJS',
        'Mock REST API',
        'Angular Signals',
        'Bootstrap 5',
        'SCSS',
      ],
      links: {
        github: 'https://github.com/SeifAkmal/Major-Minto-Store',
        live: 'https://major-minto-store.netlify.app',
      },
    },
    {
      name: 'Calories Tracker',
      type: 'Web Application',
      description:
        'Developed a lightweight Angular Single Page Application (SPA) for real-time calorie tracking.',
      technologies: ['Angular', 'TypeScript', 'SCSS'],
      links: {
        github: 'https://github.com/SeifAkmal/Mini-Calories-Tracker.git',
        live: 'https://mini-calories-tracker.netlify.app',
      },
    },
  ],
  education: [
    {
      institution: 'Route Academy',
      studyType: 'Professional Diploma',
      area: 'Front-End Web Development Diploma ',
      startDate: '2022',
      endDate: '',
    },
    {
      institution: 'El-Shorouk Academy',
      studyType: "Bachelor's Degree",
      area: 'Management Information Systems (MIS)',
      startDate: '2022 - ',
      endDate: '2025',
    },
  ],
  certifications: [
    {
      name: 'Fullstack Web Development Diploma',
      issuer: 'Route Academy',
    },
    {
      name: 'CS50: Introduction to Computer Science (Online)',
      issuer: 'Harvard University ',
    },
  ],
};
