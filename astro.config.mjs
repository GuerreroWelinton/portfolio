// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://welintonguerrero.com',
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
