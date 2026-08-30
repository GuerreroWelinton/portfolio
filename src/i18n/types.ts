export type Locale = 'en' | 'es';

export interface NavItem {
  href: string;
  label: string;
}

export interface ProjectProduct {
  name: string;
  description: string;
  url?: string;
}

export interface Project {
  name: string;
  kind: string;
  year: string;
  context: string;
  summary: string;
  problem?: string;
  solution: string;
  role?: string;
  products?: ProjectProduct[];
  results: string[];
  tech: readonly string[];
  image?: string;
  imageAlt?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export interface ExperienceEntry {
  company: string;
  companyNote: string;
  role: string;
  period: string;
  location: string;
  highlights?: { value: string; label: string }[];
  bullets: string[];
  tech: readonly string[];
  projectHref?: string;
  projectLabel?: string;
}

export interface SkillGroup {
  title: string;
  items: readonly string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  period: string;
  location: string;
}

export interface Content {
  htmlLang: string;
  localeSwitch: { label: string; href: string; code: string; aria: string };
  meta: {
    title: string;
    description: string;
    ogAlt: string;
  };
  themeSwitch: {
    toDark: string;
    toLight: string;
  };
  nav: {
    items: NavItem[];
    menuLabel: string;
    closeLabel: string;
    skipToContent: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    roleLines: string[];
    valueProp: string;
    availability: string[];
    stackLabel: string;
    coreStack: readonly string[];
    ctaPrimary: string;
    ctaSecondary: string;
    ctaResume: string;
    portraitAlt: string;
    scrollHint: string;
  };
  work: {
    title: string;
    labels: {
      context: string;
      problem: string;
      solution: string;
      role: string;
      products: string;
      results: string;
      stack: string;
      year: string;
      visit: string;
      openCase: string;
      repo: string;
      repoPrivate: string;
      close: string;
      inProgress: string;
    };
    projects: Project[];
  };
  about: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  experience: {
    title: string;
    entries: ExperienceEntry[];
  };
  education: {
    title: string;
    degreesTitle: string;
    entries: EducationEntry[];
    certificationTitle: string;
    certification: {
      title: string;
      issuer: string;
      body: string;
      credentialLabel: string;
      verifyLabel: string;
    };
    languagesTitle: string;
    languages: { name: string; level: string }[];
  };
  skills: {
    title: string;
    groups: SkillGroup[];
  };
  contact: {
    title: string;
    body: string;
    emailLabel: string;
    linksLabel: string;
    links: { label: string; value: string; href: string }[];
    resumeLabel: string;
    noScript: string;
  };
  footer: {
    tagline: string;
    builtWith: string;
    rights: string;
    backToTop: string;
  };
}
