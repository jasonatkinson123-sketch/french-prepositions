# Prépositions françaises

An interactive French prepositions game presented as a photographed, well-used student notebook.

The game currently contains ten chapters covering countries, places, movement, position, time, `de`/`à`, verb and adjective constructions, activities, and cumulative review. It includes spoken French after correct answers, regional mastery saved in the browser, responsive landscape layouts, and touch support.

## Run locally

Requirements:

- Node.js 22.13 or later
- Linux or another environment with Bash and standard GNU utilities

```bash
npm ci
npm run dev
```

Then open the local URL printed by Vite.

## Quality checks

```bash
npm test
```

The production build is generated with:

```bash
npm run build
```

## Main project structure

- `app/page.tsx` — game screens, navigation, state, and speech behavior
- `app/chapter-*-data.ts` — lesson question data
- `app/globals.css` — notebook presentation and responsive layouts
- `public/notebook-assets/` — optimized notebook artwork
- `tests/` — rendered-output and artwork checks
