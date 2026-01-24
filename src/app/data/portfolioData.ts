export const portfolioData = {
  basics: {
    name: 'Seif Akmal',
    label: 'Frontend Developer',
    summary:
      'I’m a Frontend Developer specializing in Angular I enjoy turning designs and ideas into clean, responsive web interfaces. I focus on writing maintainable code, working with real APIs, and building user-friendly applications that actually make sense to use.',
    location: {
      city: 'El-Shorouk',
      region: 'Cairo',
      country: 'Egypt',
    },
    contact: {
      email: 'seifakmal5@gmail.com',
      phone: '+201013499043',
      linkedin: 'https://www.linkedin.com/in/seif-akmal/',
      github: 'https://github.com/SeifAkmal',
    },
  },
  skills: {
    technical: [
      'Angular',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'SCSS',
      'RxJS',
      'Angular Signals',
      'NgRx (Basics)',
      'REST APIs',
      'Angular Material',
      'PrimeNG',
      'Tailwind CSS',
      'Bootstrap',
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
      technologies: ['Angular 18', 'TypeScript', 'REST APIs', 'RxJS', 'SCSS'],
      links: {
        github: 'https://github.com/SeifAkmal/Spinal.git',
        live: 'Coming soon',
      },
    },
    {
      name: 'Minto Store',
      type: 'E-Commerce Web Application',
      description:
        'An Angular e-commerce application featuring product listing, search and filtering, cart management, and a simulated checkout flow. Built with clean state handling and real-world application logic.',
      technologies: [
        'Angular 18',
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
        'A lightweight Angular application for tracking daily meals and calorie intake, providing simple statistics such as total, average, and highest calorie values using local storage.',
      technologies: ['Angular 18', 'TypeScript', 'SCSS'],
      links: {
        github: 'https://github.com/SeifAkmal/Mini-Calories-Tracker.git',
        live: 'https://mini-calories-tracker.netlify.app',
      },
    },
  ],
  education: [
    {
      institution: 'Route Academy',
      studyType: 'Diploma',
      area: 'Frontend Web Development',
      startDate: '2024',
      endDate: '',
    },
    {
      institution: 'El-Shorouk Academy',
      studyType: "Bachelor's Degree",
      area: 'Information Systems',
      startDate: '2022 - ',
      endDate: '2025',
    },
  ],
  certifications: [
    {
      name: 'Frontend Web Development Diploma',
      issuer: 'Route Academy',
    },
    {
      name: 'CS50: Introduction to Computer Science',
      issuer: 'Harvard University (Online)',
    },
  ],
};
