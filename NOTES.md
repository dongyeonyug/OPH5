# NOTES

## Durable Context

- Product name: `TripCanvas`.
- Competition strategy: prioritize Ralph loop/harness design over feature count.
- Required final proof: working deployed app, GitHub source, editable Korean Notion outline, QA evidence, and working-memory trail.
- Deployment is mandatory. A local-only demo is not complete.
- Notion must be written in Korean and should be an editable presenter outline, not a locked polished final page.
- User-added images must come from local file selection only. The app must not expose image URL input, paste, or fallback UI.
- Browser-local storage is confirmed. Prefer IndexedDB for image data and use localStorage only for lightweight metadata or fallback state.
- Final completion requires a real visible world map with clickable countries or country regions.
- Required layout clarification: the final app must be map-first. A country click opens/updates a selected-country detail surface; desktop uses a right-side panel, mobile uses a bottom panel/sheet. Do not implement a single long scroll page where map, board, and form are all stacked.
- Interaction clarification: country click should show the saved photo board first, with `사진 추가` as a clear action rather than making the add form the default first view. Clicking a memory card should open a large photo viewer/lightbox and return to the same board when closed.
- Map visual clarification: countries with saved photos should use a restrained neutral/soft visited state. Pinterest Red should be reserved for the selected country, primary CTA, and small active accents.
- Product-surface boundary: the completed app UI must not show Ralphthon evidence panels, GOAL/PLAN/QA/CONTROL labels, GitHub/deployment status cards, Notion process content, or other service-irrelevant submission metadata. Harness evidence belongs in README, Notion, QA, and repository documents.
- The first `/goal` execution must initialize Git if needed and create an initial commit for the harness/spec state before app implementation begins.

## Chronological Notes

- 2026-07-15 18:30 KST: Read the full pasted `/goal`, `SPEC.md`, `GOAL.md`, `CONTROL.md`, `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `.omc/skills/taste-skill/SKILL.md`.
- 2026-07-15 18:30 KST: Design read is a Korean-first travel memory product for a live demo, Pinterest-inspired and image-first, restrained consumer app, with dials `DESIGN_VARIANCE 6`, `MOTION_INTENSITY 4`, `VISUAL_DENSITY 5`.
- 2026-07-15 18:30 KST: Initially chose Next.js 14 + React 18 because `react-simple-maps@3.0.0` peers against React 16-18.
- 2026-07-15 18:33 KST: Changed course after audit: `react-simple-maps` pulled vulnerable d3 dependencies and Next 14 had active advisories. Moved to latest Next/React and rendered the real TopoJSON map directly with `d3-geo` + `topojson-client`.
- 2026-07-15 18:33 KST: Core app scaffold uses real TopoJSON map data, seeded image cards from stable Picsum seed URLs, local file-only photo input, and IndexedDB with localStorage fallback.
- 2026-07-15 18:40 KST: Local Playwright QA passed for map selection, empty state, validation, local file save, refresh persistence, lightbox, and mobile bottom sheet.
- 2026-07-15 18:52 KST: Vercel preferred deployment failed because the saved Vercel token is invalid. Used GitHub Pages as the practical fallback required by `GOAL.md`.
- 2026-07-15 18:59 KST: GitHub repository was made public for judge access. Production URL is `https://dongyeonyug.github.io/OPH5/`.
