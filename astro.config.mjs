// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://welintonguerrero.com',
  integrations: [
    sitemap({
      // The whole reason for a sitemap on a two-page site: the pages are the
      // same content in two languages, and without hreflang a crawler is free
      // to read them as duplicates and pick one.
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', es: 'es' },
      },
      // 404 is a real page in the build but must never be offered for indexing.
      filter: (page) => !page.endsWith('/404/') && !page.endsWith('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
