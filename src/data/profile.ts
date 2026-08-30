export const profile = {
  name: 'Welinton Guerrero',
  firstName: 'Welinton',
  lastName: 'Guerrero',
  email: 'guerrerozamora213@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/welinton-guerrero',
    githubPersonal: 'https://github.com/GuerreroWelinton',
    githubWork: 'https://github.com/WguerreroZG',
  },
  handles: {
    githubPersonal: '@GuerreroWelinton',
    githubWork: '@WguerreroZG',
  },
  certification: {
    credentialId: '0b05d46a-8af5-4fd6-a7ed-53c593a84c31',
    verifyUrl: 'https://verisignature.miuniversity.edu/CSV',
  },
  cv: {
    en: '/cv/Welinton_Guerrero_CV_EN.pdf',
    es: '/cv/Welinton_Guerrero_CV_ES.pdf',
  },
} as const;

export const images = {
  portrait: '/portrait.webp',
  /*
   * 1200x630 PNG. Deliberately not WebP: several scrapers still ignore it, and
   * this is the one image on the site whose only job is to be read by machines
   * that are not browsers. BaseLayout resolves it against the site URL.
   */
  ogImage: '/og.png',
  projects: {
    sorti365: '/projects/sorti365.webp',
    tecnored: '/projects/tecnored.webp',
    designSystem: '/projects/designSystem.webp',
  },
} as const;

export const stacks = {
  core: ['Angular', 'TypeScript', 'Node.js', 'MongoDB', 'Vitest', 'Docker'],
  frontend: [
    'Angular',
    'RxJS',
    'NgRx',
    'Signals',
    'JavaScript',
    'TypeScript',
    'CSS',
    'React',
    'Storybook',
  ],
  backend: ['Node.js', 'Python', 'PHP', 'MongoDB', 'PostgreSQL', 'MySQL'],
  testing: ['Vitest', 'Testing Library', 'Chromatic'],
  devops: ['Docker', 'GitHub Actions', 'DigitalOcean', 'Seq'],
} as const;

export const sectionIds = {
  work: 'work',
  about: 'about',
  experience: 'experience',
  skills: 'skills',
  contact: 'contact',
} as const;
