# Aayush Gakhar — Portfolio

Personal portfolio for Aayush Gakhar, a backend software engineer. A single-page, statically-built React app focused on distributed systems, infrastructure and the work behind them.

## Stack

- **React 19** + **TypeScript**
- **Vite 8** (build tooling)
- **Tailwind CSS 4** (CSS-first config in `src/index.css`)
- **Motion** (scroll reveals) + **lucide-react** (icons)

## Getting started

Requires Node.js 22+ (see `.nvmrc`).

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
  components/    reusable UI (Section, Reveal, cards, icons, theme toggle)
  sections/      page sections (Hero, About, Experience, Skills, Projects, ...)
  data/          all content lives in portfolio.ts
  hooks/         useTheme, useActiveSection
  types.ts       shared data types
```

## Editing content

Most copy, experience, skills, projects and achievements are defined in `src/data/portfolio.ts`. Update that file to change the site's content.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and publishes `dist/` to GitHub Pages.
