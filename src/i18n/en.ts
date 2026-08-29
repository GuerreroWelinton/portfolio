import type { Content } from './types';
import { images, profile, stacks } from '../data/profile';

export const en: Content = {
  htmlLang: 'en',
  localeSwitch: { label: 'Español', href: '/es/', code: 'ES', aria: 'View this site in Spanish' },
  meta: {
    title: 'Welinton Guerrero | Full Stack Developer',
    description:
      'Full Stack Developer in Manta, Ecuador. I build betting platforms, e-commerce and internal tools with Angular, TypeScript and Node.js. Available for remote and freelance work.',
    ogAlt: 'Welinton Guerrero, Full Stack Developer',
  },
  themeSwitch: {
    toDark: 'Switch to dark theme',
    toLight: 'Switch to light theme',
  },
  nav: {
    items: [
      { href: '#skills', label: 'Stack' },
      { href: '#experience', label: 'Experience' },
      { href: '#work', label: 'Work' },
      { href: '#education', label: 'Education' },
      { href: '#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    menuLabel: 'Menu',
    closeLabel: 'Close',
    skipToContent: 'Skip to content',
  },
  hero: {
    eyebrow: 'Manta, Ecuador',
    name: 'Welinton Guerrero',
    roleLines: ['Full Stack', 'Developer'],
    valueProp:
      'I build web platforms that serve several companies from one codebase. 3+ years on betting products, e-commerce and internal tools.',
    availability: ['Available for remote roles', 'Available for freelance projects'],
    stackLabel: 'Core stack',
    coreStack: stacks.core,
    ctaPrimary: 'View work',
    ctaSecondary: 'Get in touch',
    ctaResume: 'Download CV',
    portraitAlt: 'Portrait of Welinton Guerrero',
    scrollHint: 'Scroll',
  },
  work: {
    title: 'Selected work',
    labels: {
      context: 'Where',
      problem: 'Problem',
      solution: 'Solution',
      role: 'Role',
      products: 'Products in the platform',
      results: 'Results',
      stack: 'Stack',
      year: 'Year',
      visit: 'Visit site',
      openCase: 'View details',
      repo: 'Public repository',
      repoPrivate: 'Private repository',
      close: 'Close',
    },
    projects: [
      {
        name: 'One codebase, every brand',
        kind: 'Production, iGaming',
        year: '2023 to now',
        context: 'ZGames Technology',
        summary:
          'A multi-tenant platform for sports betting and casino. One codebase serves several operators, and each one carries its own brand.',
        problem:
          'The brief was a betting and casino platform for one operator. Partway through we saw it could serve other betting houses. Forking the code per client would have made it impossible to maintain.',
        solution:
          'I structured the Angular frontend and its base components so the whole look changes by swapping design tokens. On the backend I wrote the services for users, reports, bets, transactions and account settings.',
        role: 'Full Stack Developer on the team that built it from scratch. Frontend architecture, backend services, provider integrations.',
        products: [
          {
            name: 'Sorti365',
            description:
              'Public betting portal. Sorti365 is the client, and the same portal ships to other operators with different tokens.',
            url: 'https://sorti365.com/',
          },
          {
            name: 'ZGames BackOffice',
            description:
              'Administration for the betting portal. Built once and reused across clients.',
          },
          {
            name: 'SortiCenter',
            description: 'Internal management for the Sorti365 operation.',
          },
        ],
        results: [
          'One codebase ships to several operators, each with its own brand.',
          'Casino and sportsbook integrations tested against real money flows before certification.',
          'Back office and internal management built alongside the public portal.',
        ],
        tech: ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Signals', 'CSS', 'Node.js', 'MongoDB', 'Design Tokens'],
        image: images.projects.sorti365,
        imageAlt: 'Sorti365 betting portal interface (placeholder image)',
        liveUrl: 'https://sorti365.com/',
      },
      {
        name: 'New store, untouched legacy',
        kind: 'Production, e-commerce',
        year: '2025 to now',
        context: 'Freelance',
        summary: 'Online store and admin panel for a company that sells technology equipment.',
        problem:
          'Their stock lived in an old SQL Server that nobody could touch, and the catalogue was updated by hand.',
        solution:
          'I wrote a Python ETL that copies the stock into MySQL without touching the old system. The store and the panel run on PHP and JavaScript, and a bulk import module pulls products from Google Sheets.',
        role: 'Freelance Full Stack Developer. ETL, backend, storefront, admin design.',
        results: [
          'The old system keeps running exactly as it did before.',
          'Prices and offers get updated from a spreadsheet instead of one by one.',
          'Admin panel designed from scratch for categories, brands, galleries and offers.',
        ],
        tech: ['PHP', 'JavaScript', 'Python', 'MySQL', 'SQL Server', 'Google Sheets API'],
        image: images.projects.tecnored,
        imageAlt: 'Tecnored Ecuador e-commerce interface (placeholder image)',
        liveUrl: 'https://tecnoredec.com/',
      },
      {
        name: 'The public version of a private system',
        kind: 'Design system',
        year: '2026',
        context: 'Master thesis, UNIR',
        summary:
          'A component library and the design tokens underneath it, built with the architecture I use at work.',
        solution:
          'Angular library built with the Presentational-Container pattern and Atomic Design. The tokens hold colours, typography and spacing for the whole system.',
        results: [
          'Unit tests with Vitest and visual regression with Chromatic.',
          'Component catalogue in Storybook, releases automated with GitHub Actions.',
        ],
        tech: [
          'Angular',
          'Signals',
          'TypeScript',
          'CSS',
          'Storybook',
          'Vitest',
          'Testing Library',
          'Chromatic',
          'GitHub Actions',
        ],
        image: images.projects.designSystem,
        imageAlt: 'Component library documentation catalogue (placeholder image)',
        liveUrl: 'https://guerrerowelinton.github.io/academic-unir-tesis/storybook/',
        repoUrl: 'https://github.com/GuerreroWelinton/academic-unir-tesis',
      },
      {
        name: 'Another database, the same rules',
        kind: 'Internal platform',
        year: '2024',
        context: 'Engineering thesis, ULEAM',
        summary: 'Platform for booking laboratories, taking attendance and generating reports.',
        solution:
          'Node.js and TypeScript backend with Clean Architecture. The frontend is an Angular SPA organised by features, with NgRx holding the state.',
        results: [
          'Four user roles, each with its own permissions.',
          'Deployed on DigitalOcean with Docker, Docker Compose and Nginx.',
        ],
        tech: ['Angular', 'NgRx', 'Node.js', 'TypeScript', 'Docker', 'DigitalOcean'],
        image: images.projects.labSystem,
        imageAlt: 'Laboratory booking system interface (placeholder image)',
        repoUrl: 'https://github.com/GuerreroWelinton/academic-uleam-tesis',
      },
      {
        name: 'Every balance can be explained',
        kind: 'In development, fintech',
        year: '2026 to now',
        context: 'Personal project',
        summary:
          'Management system for community savings funds. Members contribute monthly, take loans by rounds, and split the profits at year end.',
        problem:
          'A balance nobody can trace back to the movement that produced it cannot be audited. By the time someone notices, the history is already gone.',
        solution:
          'Every balance change comes from a cash movement. There are no manual adjustments and nothing is ever deleted, so corrections are reversals that point back at what they correct. I wrote all 25 features as specifications before writing code, and recorded each architectural decision as a numbered ADR.',
        role: 'Sole developer. Specifications, architecture, implementation and CI.',
        results: [
          '14 numbered ADRs, each with its context, decision and consequences.',
          '5 of 25 features complete, with every status kept in a traceability matrix.',
          'Integration tests run on a real PostgreSQL, because audit immutability is a database trigger no mock can observe.',
        ],
        tech: ['Next.js', 'React', 'TypeScript', 'PostgreSQL', 'Prisma', 'Zod', 'Vitest'],
        image: images.projects.clearFund,
        imageAlt: 'Clear Fund savings management interface (placeholder image)',
        repoUrl: 'https://github.com/GuerreroWelinton/product-clear-fund',
      },
    ],
  },
  about: {
    title: 'About',
    lead: 'Angular is my strongest area, but I rarely stay on one side of the product.',
    paragraphs: [
      'I was going to study accounting until someone told me computing was not for everyone, and I took it personally. Writing my first programs in PSeInt, Java and Visual Basic I found out an idea could turn into something that runs, and that curiosity took me to the engineering degree and later to the master in web interface design.',
      'Today I am an Information Technology Engineer working as a Full Stack Developer. Some days are for building an interface and others for deciding how data moves between services, plugging in an external API, or fixing something in the backend that the user ends up feeling anyway.',
      'I get into the technical decisions on the product and not only the part assigned to me, though a good share of the work is not technical at all. Answering support when something breaks in production, or sitting in a meeting to agree on what comes next, is building the product too.',
    ],
  },
  experience: {
    title: 'Experience',
    entries: [
      {
        company: 'ZGames Technology',
        companyNote: 'ZGames builds technology for the betting industry.',
        role: 'Full Stack Developer',
        period: 'July 2023 to now',
        location: 'Manta, Ecuador. On-site.',
        highlights: [
          { value: '75%', label: 'less time to build a new module' },
          { value: '90%', label: 'fewer inline styles' },
          { value: '+50K', label: 'registered users on the platform' },
        ],
        bullets: [
          'Own the frontend architecture of the public portal and the components the team reuses.',
          'Help set the architectural standards, review code and keep technical debt from piling up.',
          'Integrate casino and sportsbook providers, and test the money flows before certification.',
          'Write backend services in Node.js and TypeScript, with MongoDB queries for reports, user management, bets, transactions and settings.',
          'Add structured logs in Seq to the services and follow how the flows behave in production.',
        ],
        tech: [
          'Angular',
          'TypeScript',
          'RxJS',
          'NgRx',
          'Signals',
          'Node.js',
          'MongoDB',
          'PostgreSQL',
          'Seq',
        ],
        projectHref: '#work',
        projectLabel: 'See the platform',
      },
      {
        company: 'Tecnored Ecuador',
        companyNote: 'Tecnored sells technology equipment through an online store.',
        role: 'Freelance Full Stack Developer',
        period: 'October 2025 to now',
        location: 'Manta, Ecuador. Remote, on demand.',
        bullets: [
          'Built the online store and its admin panel with PHP and JavaScript.',
          'Automated the inventory sync and the bulk catalogue updates.',
          'Maintain the system and take on requests as they come up.',
        ],
        tech: ['PHP', 'JavaScript', 'Python', 'MySQL'],
        projectHref: '#work',
        projectLabel: 'See the store',
      },
      {
        company: 'Empresa Pública Aguas de Manta',
        companyNote: 'Aguas de Manta runs the drinking water and sanitation for the city.',
        role: 'Web Development Intern',
        period: 'May 2023 to June 2023',
        location: 'Manta, Ecuador. On-site.',
        bullets: [
          'Added authentication with OpenID Connect.',
          'Integrated Mapbox so the app could show geographic data.',
        ],
        tech: ['OpenID Connect', 'Mapbox'],
      },
      {
        company: 'Universidad Laica Eloy Alfaro de Manabí',
        companyNote: 'The public university in Manta, where I took the engineering degree.',
        role: 'Teaching Assistant, Mobile Applications',
        period: 'October 2022 to January 2023',
        location: 'Manta, Ecuador. On-site.',
        bullets: [
          'Planned the contents of the course across the term.',
          'Prepared and delivered classes on mobile development with Flutter and React Native, and wrote the supporting material.',
          'Reviewed the code students submitted and gave them feedback on it.',
        ],
        tech: ['Flutter', 'React Native'],
      },
    ],
  },
  education: {
    title: 'Education',
    degreesTitle: 'Degrees',
    entries: [
      {
        degree: 'Master in Web User Interface Design and Development',
        school: 'Universidad Internacional de La Rioja (UNIR)',
        period: 'February 2025 to May 2026',
        location: 'Spain, remote',
      },
      {
        degree: 'Engineering degree in Information Technology',
        school: 'Universidad Laica Eloy Alfaro de Manabí',
        period: 'April 2019 to August 2024',
        location: 'Ecuador, on-site',
      },
    ],
    certificationTitle: 'Certification',
    certification: {
      title: 'Continuing Education Certificate in Leadership',
      issuer: 'MIU City University Miami',
      body: 'Conscious leadership, emotional intelligence, assertive communication and relationship management at work.',
      credentialLabel: 'Credential ID',
      verifyLabel: 'Verify this certificate',
    },
    languagesTitle: 'Languages',
    languages: [
      { name: 'Spanish', level: 'Native' },
      { name: 'English', level: 'B1, intermediate' },
    ],
  },
  skills: {
    title: 'Stack and technologies',
    groups: [
      { title: 'Frontend', items: stacks.frontend },
      { title: 'Backend and databases', items: stacks.backend },
      { title: 'Testing and quality', items: stacks.testing },
      { title: 'DevOps and tools', items: stacks.devops },
    ],
  },
  contact: {
    title: 'Get in touch',
    body: 'Timezone GMT-5, no daylight saving.',
    emailLabel: 'Send me an email',
    linksLabel: 'Elsewhere',
    links: [
      { label: 'LinkedIn', value: 'in/welinton-guerrero', href: profile.links.linkedin },
      {
        label: 'GitHub, personal',
        value: profile.handles.githubPersonal,
        href: profile.links.githubPersonal,
      },
      {
        label: 'GitHub, work',
        value: profile.handles.githubWork,
        href: profile.links.githubWork,
      },
    ],
    resumeLabel: 'Download CV (EN)',
    noScript: 'That button needs JavaScript. You can also reach me through LinkedIn.',
  },
  footer: {
    tagline: 'Full Stack Developer, Manta, Ecuador',
    builtWith: 'Built with Astro.',
    rights: 'All rights reserved.',
    backToTop: 'Back to top',
  },
};
