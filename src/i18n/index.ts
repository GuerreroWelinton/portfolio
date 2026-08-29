import { en } from './en';
import { es } from './es';
import type { Content, Locale } from './types';

export const content: Record<Locale, Content> = { en, es };

export const getContent = (locale: Locale): Content => content[locale];

export type { Content, Locale };
