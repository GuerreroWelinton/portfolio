# welintonguerrero.com

Personal portfolio of **Welinton Guerrero**, Software Engineer · Full Stack Developer in
Manta, Ecuador. Bilingual, static, no client-side framework.

**Live:** https://welintonguerrero.com · **Español:** https://welintonguerrero.com/es/

## Decisions worth reading

The site is small on purpose. These are the choices that shape it.

### Typed i18n as a contract

`src/i18n/types.ts` defines a single `Content` interface, and both `en.ts` and `es.ts`
are typed against it. A string added to one locale and not the other fails the build
instead of shipping a blank section. Locale-independent facts (links, handles, stacks,
image paths, years of experience) live once in `src/data/profile.ts`, so the two
languages cannot drift on them.

### Design tokens, not ad-hoc values

`src/styles/tokens.css` holds about 80 custom properties: colour roles, a fluid type
scale built on `clamp()`, spacing, tracking, borders and motion durations. Components
consume roles such as `--color-accent` or `--text-h2` rather than raw values, so dark mode
is a redefinition of the colour roles rather than a second stylesheet.

### Theming without a flash

Light and dark follow `prefers-color-scheme` by default, with a manual override stored in
`localStorage`. A small inline script applies the stored theme in `<head>`, before the
first paint, and keeps `theme-color` in sync so the browser chrome matches.

### No framework on the client

Everything renders at build time. The only JavaScript shipped is a handful of small
scripts, each scoped to its component: the theme toggle, the mobile navigation, the case
study dialogs (native `<dialog>`), and a scroll reveal that is skipped entirely under
`prefers-reduced-motion`.

### Built to be found and read correctly

- `@astrojs/sitemap` with `hreflang`, so `/` and `/es/` are read as translations of the
  same page rather than duplicates. The 404 page is excluded from it.
- Canonical URLs, `hreflang` alternates, Open Graph and Twitter cards on every page.
- A `schema.org` `Person` in JSON-LD, generated from the same data the page renders.

### Accessibility basics

Skip link, `:focus-visible` styles, labelled controls and reduced-motion support. Fonts
are self-hosted (Archivo and IBM Plex Mono, both OFL), with the primary face preloaded to
avoid a late swap.

### Measured

Lighthouse lab scores from [PageSpeed Insights](https://pagespeed.web.dev/analysis?url=https://welintonguerrero.com)
on 2026-10-29:

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| Mobile | 97 | 100 | 100 | 100 |
| Desktop | 100 | 100 | 100 | 100 |

Field data (Core Web Vitals) is not available yet: the site does not have enough real
traffic for the Chrome UX Report to publish it.

## Stack

[Astro](https://astro.build) 7 with TypeScript and hand-written CSS. No UI library, no
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
  styles/       design tokens, fonts and global rules
public/
  cv/           the CV PDFs the download buttons serve
  fonts/        self-hosted woff2 files and their licences
```

## Licence

© Welinton Guerrero. All rights reserved.

The code is here to be read. The content, copy and images are not for reuse. If
something in the implementation is useful to you, take the idea and write your own.
