# welintonguerrero.com

Personal portfolio of **Welinton Guerrero**, Full Stack Developer in Manta, Ecuador.
Bilingual, static, no client-side framework.

**Live:** https://welintonguerrero.com · **Español:** https://welintonguerrero.com/es/

## Stack

[Astro](https://astro.build) with typed i18n and hand-written CSS. No UI library, no
CSS framework. Deployed as a static build on Cloudflare Pages.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the build
```

Node 22, pinned in `.nvmrc`.

## Layout

```
src/
  components/   one .astro per section, styles scoped to each
  data/         locale-independent facts: links, handles, stacks, image paths
  i18n/         en.ts and es.ts, both typed against types.ts
  layouts/      document shell, meta tags, JSON-LD
  styles/       design tokens and global rules
public/
  cv/           the CV PDFs the download buttons serve
```

`src/i18n/types.ts` is the contract for both locales, so a string added to one and
not the other fails the build.

## Licence

© Welinton Guerrero. All rights reserved.

The code is here to be read. The content, copy and images are not for reuse. If
something in the implementation is useful to you, take the idea and write your own.
