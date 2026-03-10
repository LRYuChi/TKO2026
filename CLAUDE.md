# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Taiwan Kendama Open 2026 (TKO2026) — a single-page React event website. All content is in Traditional Chinese.

## Commands

```bash
npm run dev      # Start dev server (Vite, port 5173, hot reload)
npm run build    # Production build → dist/
npm run preview  # Preview production build (port 4173)
npx tsc --noEmit # Type-check without emitting
```

No test framework or linter is configured.

## Architecture

Single-page app: `index.html` → `index.tsx` → `App.tsx` → 7 section components in `components/`.

Component render order in App.tsx: Navbar → Hero → EventDetails → Registration → RulesSection → Schedule → Footer.

**RulesSection.tsx** is the most complex component (~445 lines) with tabbed UI and stateful logic. All other components are mostly presentational.

No routing, no state management library, no backend. All data is inline.

## Tech Stack

- React 19 + TypeScript + Vite 6
- Tailwind CSS via CDN (configured in `index.html` with custom theme)
- Icons: lucide-react

## Styling

Custom Tailwind colors defined in `index.html` script block:

| Token | Hex |
|-------|-----|
| tko-yellow | #FF9B24 |
| tko-green | #008A40 |
| tko-red | #FF3033 |
| tko-black | #121212 |
| tko-dark | #1D1D1D |
| tko-gray | #2A2A2A |
| tko-light | #F3F4F6 |

Fonts: IBM Plex Sans TC (body), Oswald (headings). Dark theme throughout.

## Build Notes

- `vite.config.ts` uses `base: './'` for subdirectory deployment support.
- JSX containing literal `->` must be escaped as `{'->'}`  (see ARROW_FIX_DEBUG.md).
