# Shreya Jaiswal — portfolio

Personal site. React + TypeScript + Vite, plain CSS (no UI library), no tracking.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build / deploy

```bash
npm run build      # type-checks, then outputs static files to dist/
npm run preview    # serve the production build locally
```

Deploy anywhere that hosts static files. On **Vercel** or **Netlify** just import the repo — they detect Vite
automatically (build command `npm run build`, output directory `dist`).

## Editing content

Everything textual lives in **`src/data.ts`** — intro, "currently" lines, projects, experience, education,
skills, links. Components in `src/components/` only render that data.

Project cards show a real screenshot from `public/screens/<slug>.png` (slugs: `pcb`, `velocity`, `fraud`, `pmu`,
`fittrack`) inside a browser-window frame. If the file is missing, the card falls back to the hand-drawn illustration
in `src/components/ProjectArt.tsx`. Aim for ~1440×900 PNGs of the most interesting screen, not the login page.

## Before publishing

- [ ] Put your resume at `public/Shreya_Jaiswal_Resume.pdf` — the Resume buttons link to it.
- [ ] Read the project bullets in `src/data.ts` and rewrite anything that isn't in your own words.
- [ ] Update the "currently" lines in `data.ts` and the "Last updated" text in `src/components/Footer.tsx`
      every few months.
- [ ] `dist/` is now git-ignored (it's a build output). If the old `dist/` files are still tracked, run
      `git rm -r --cached dist` once.

## Stack notes

- Dark theme by default, light theme via the toggle (remembers your choice).
- Scroll-reveal, typewriter, marquee and card spotlight are ~60 lines of plain CSS/JS — no animation library.
- Fonts: Inter, Sora, JetBrains Mono from Google Fonts. Remove the `<link>` tags in `index.html` to go fully
  self-hosted (the CSS falls back to system fonts).
