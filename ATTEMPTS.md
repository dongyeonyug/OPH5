# ATTEMPTS

| Time | Attempt | Evidence | Result | Next Adjustment |
| --- | --- | --- | --- | --- |
| TBD | Initial goal compiled from tightened SPEC. | `SPEC.md`, `GOAL.md` | Ready for execution | Start with repo/tool inspection. |
| 2026-07-15 18:30 KST | Scaffolded TripCanvas Next.js app and core components. | Added `package.json`, App Router files, map/detail panel, memory board, local file form, IndexedDB/localStorage helpers. | Pending dependency install and build verification. | Run `npm install`, then lint/build and fix errors. |
| 2026-07-15 18:33 KST | Replaced `react-simple-maps` with direct `d3-geo` + `topojson-client` rendering. | `npm audit --audit-level=moderate` reported high vulnerabilities through `react-simple-maps` and older Next chain. | Kept the real TopoJSON world-map requirement while reducing dependency risk and enabling latest Next/React. | Reinstall dependencies, rerun audit, lint, and build. |
| 2026-07-15 18:40 KST | Ran local browser QA. | Playwright confirmed 5 map markers, 5 country paths, France selection, empty state, validation, local file save, refresh persistence, lightbox, and mobile bottom sheet. | Core local demo flow passed. | Deploy and verify production URL. |
| 2026-07-15 18:52 KST | Tried Vercel production deployment. | `npx vercel --prod --yes` failed with `The specified token is not valid`. | Vercel auth blocked. | Use required practical fallback deployment path. |
| 2026-07-15 18:59 KST | Deployed static export to GitHub Pages. | `npm run deploy:pages`; GitHub Pages URL `https://dongyeonyug.github.io/OPH5/`; production Playwright QA passed. | Production deployment is live. | Update README, QA, Notion, then push main source. |
| 2026-07-15 19:00 KST | Created editable Korean Notion outline. | Notion URL: `https://app.notion.com/p/39e08486666c81cda4a5e894f7c486a5`. | Notion requirement satisfied. | Commit and push final main source. |
