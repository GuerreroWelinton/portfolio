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
   * Replace with '/og.png' once public/og.png exists. Pointing at a missing
   * file is worse than the placeholder: a 404 gives the card no image at all,
   * where the stub at least renders something.
   *
   * 1200x630, PNG or JPG. Not WebP — several scrapers still ignore it.
   * The layout resolves this against the site URL, so a plain path is enough.
   */
  ogImage: 'https://placehold.co/1200x630/000000/FFFFFF?text=Welinton+Guerrero',
  projects: {
    sorti365: 'https://placehold.co/1600x1000/000000/FFFFFF?text=Sorti365',
    tecnored: 'https://placehold.co/1600x1000/000000/FFFFFF?text=Tecnored+Ecuador',
    designSystem: 'https://placehold.co/1600x1000/F2F2F2/000000?text=%40zgames%2Fui',
    labSystem: 'https://placehold.co/1600x1000/F2F2F2/000000?text=Lab+Booking+System',
    clearFund: 'https://placehold.co/1600x1000/F2F2F2/000000?text=Clear+Fund',
  },
} as const;

export const stacks = {
  core: ['Angular', 'TypeScript', 'NgRx', 'Node.js', 'MongoDB', 'Vitest', 'Docker'],
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
