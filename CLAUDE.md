# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev       # Start development server at localhost:3000
pnpm build     # Build for production
pnpm start     # Start production server
pnpm lint      # Run ESLint
```

Use `pnpm` (not npm or yarn) — a `pnpm-lock.yaml` is present.

## Architecture

This is a **Next.js 16 site** (App Router) for Radio Ravioli Records — a music production/recording/mixing organization run by Joris Saïdani.

**Tech stack**: Next.js 16, React 19, TypeScript, Tailwind CSS v4, FontAwesome icons, React Compiler enabled. Package manager: **pnpm**.

### App Router structure

- `app/layout.tsx` — Root layout: Roboto via `next/font/google`, favicon metadata, `bg-black text-white` body
- `app/page.tsx` — Home page (server component): centered container, Records grid, Contact
- `app/joris/layout.tsx` — Adds Cormorant Garamond + Space Mono font CSS variables for the joris page
- `app/joris/page.tsx` — Joris Saïdani resume page (server component): hero, audio player, drummer credits

### Component structure

Components live in `components/` — server components by default; add `'use client'` only when needed.

- `Record/` — Card for a single music release: title, artist, cover image, details, external link, tags
- `Records/` — Hardcoded list of all production credits as a flex grid of `Record` cards
- `Contact/` — `'use client'` — Email + Instagram (FontAwesome requires it)
- `AudioPlayer.tsx` — `'use client'` — Custom audio player with track list, timeline, and controls
- `Wip/` / `Wips/` — Work-in-progress cards (exists but commented out)

### Data

**Records are hardcoded** in `components/Records/Records.tsx` — no CMS. To add a new release, prepend a `<Record ... />` entry at the top.

**Audio tracks** for the `/joris` player are defined in `app/joris/page.tsx` as `featureTracks`. Set the `src` field to a file path or URL to enable playback (currently empty — player UI shows but play is disabled).

Cover images go in `public/records/` and are referenced by filename string (`cover: 'ARTIST_TITLE.jpg'`). The `Record` and `AudioPlayer` components prefix `/records/` automatically.

### Styling

Global styles in `styles/globals.css` use Tailwind v4's `@import 'tailwindcss'` syntax. Custom utilities added at the bottom: `.grain` (film noise overlay), `.no-scrollbar`, and animation classes (`anim-slide-up-0`, `anim-slide-up-1`, `anim-fade-in`, `anim-fade-in-2`) used on the joris page.

Each page manages its own layout — the home page wraps itself in the container div; the joris page is full-bleed. Page-specific fonts are injected via nested layouts (`app/joris/layout.tsx`) using CSS variables (`--font-cormorant`, `--font-space-mono`).
