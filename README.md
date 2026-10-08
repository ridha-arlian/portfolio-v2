# Ridha Arlian - Portfolio

Personal portfolio website of Ridha Arlian. Built with Nuxt 4 and Tailwind CSS v4.

**Live:** https://ridhaarlian.my.id

## Tech Stack

- [Nuxt](https://nuxt.com/) 4 + [Vue](https://vuejs.org/) 3.5 (SSR)
- [Tailwind CSS](https://tailwindcss.com/) v4 (via `@tailwindcss/vite`)
- [shadcn-nuxt](https://www.shadcn-vue.com/) / [Reka UI](https://reka-ui.com/) components, [Lucide](https://lucide.dev/) icons
- [@nuxtjs/i18n](https://i18n.nuxtjs.org/) 10 - English (default) + Indonesian (`/id` prefix)
- [@nuxtjs/sitemap](https://nuxtseo.com/sitemap) 8 - prerendered sitemap (`zeroRuntime`)
- [@nuxtjs/color-mode](https://color-mode.nuxtjs.org/) - dark / light mode
- Package manager: [pnpm](https://pnpm.io/) (Node.js 20+ required)

## Features

- **Graph node navigation** - homepage is an interactive node graph; hover a node on desktop to preview, tap a node on mobile to visit. Node labels adapt their placement (and simplify to one line on mobile) so nothing gets clipped.
- **Bilingual (EN/ID)** - English by default, Indonesian under the `/id` prefix with `prefix_except_default` strategy. Language toggle lives in the header on desktop and in the footer on mobile. The choice is remembered via the `i18n_redirected` cookie.
- **Dark / light mode** - system-aware toggle with smooth color transitions across all elements (disabled automatically for `prefers-reduced-motion`).
- **SEO** - per-page titles/descriptions/OG tags in both locales, canonical + `hreflang` (`en`/`id`/`x-default`) cluster, prerendered `sitemap.xml` (index + per-locale sitemaps), `robots.txt` with sitemap directive, JSON-LD `Person` schema and OG image on the homepage.

## Getting Started

Prerequisites: Node.js 20+ and pnpm.

```bash
# Install dependencies
pnpm install

# Start the dev server (http://localhost:3000)
pnpm dev

# Generate Nuxt types (.nuxt)
pnpm exec nuxi prepare

# Build for production
pnpm build

# Preview the production build locally
pnpm preview
```

## Project Structure

```
app/
├── pages/            # index, about, skills, experiences, projects, contact
├── components/       # GraphNav, NetworkLines, LocaleToggle, ColorModeToggle, LocalTime
│   └── ui/           # shadcn-vue primitives (button, tooltip, scroll-area, ...)
├── composables/      # useNetworkNodes (graph layout + mobile detection)
├── data/             # navigation, skills, experiences, projects (static content)
├── layouts/          # default layout (header / footer)
└── assets/css/       # tailwind.css (theme tokens, base transitions)
i18n/locales/         # en.json, id.json — all translatable copy
public/               # robots.txt, og-image.png, logo.svg
nuxt.config.ts        # modules, i18n, sitemap, site URL, global head tags
```

## Working with i18n

- All user-facing copy lives in `i18n/locales/en.json` and `id.json` (same key structure) and is rendered via `$t()` / `useI18n()`.
- Array content (experiences, projects, skill groups) is translated per index, e.g. `$t('experiences.items[' + i + '].role')` - keep the order of locale arrays in sync with `app/data/*`.
- Internal links must go through `localePath()` / `switchLocalePath()` so they stay inside the active locale.
- **Do not use `|` inside locale strings** - vue-i18n parses it as a plural separator and truncates the message (use `-` instead).
- After adding the `@nuxtjs/i18n` module or new locale files, restart the dev server (locale hashes are read at startup).

## SEO & Deployment

- Production URL is pinned in `nuxt.config.ts` (`site.url`, `i18n.baseUrl`, canonical/hreflang, `og:image`): `https://ridhaarlian.my.id`.
- After deploying, submit `sitemap.xml` in Google Search Console and request indexing for `/` and key pages. The sitemap is prerendered at build time, so crawlers always get an instant `200`.

## Troubleshooting

- **Stale dev server** - config, dependency, and locale-file changes require a dev server restart (and sometimes `pnpm exec nuxi prepare`).
- **Stuck in Indonesian on `/`** - the `i18n_redirected` cookie remembers a previous manual switch to ID; delete it (or use an incognito window) to see the English default.
- **Port already in use** - make sure only one `pnpm dev` instance is running (`localhost:3000` vs. leftover processes on other ports).
