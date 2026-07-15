# PLAN

## Goal

Build and submit TripCanvas as a deployed Ralphthon MVP plus autonomous-loop evidence package.

## Current Strategy

Keep the product small and reliable, with a map-first UI where clicking a country opens a responsive detail panel/sheet instead of a one-page stacked scroll layout. Then use the harness artifacts, GitHub history, deployment, QA trail, and editable Korean Notion outline to maximize the Ralphthon AI-agent-utilization score.

Current phase: Phase 2 core product implementation. The app is being scaffolded as a Next.js App Router project on the latest safe Next/React path, with the real world map rendered directly from TopoJSON using `d3-geo` and `topojson-client`.

## Phases

- [x] Inspect target repo, existing files, and tool availability.
- [x] Verify existing Git history and OPH5 remote.
- [x] Read project-local taste-skill and apply design read.
- [x] Scaffold or update the Next.js app.
- [ ] Implement the TripCanvas core demo flow with desktop right-side detail panel and mobile bottom detail panel/sheet.
- [ ] Add browser-local persistence with IndexedDB preferred and localStorage fallback.
- [x] Apply Pinterest-inspired visual polish.
- [x] Run fast feedback checks.
- [ ] Push final main source to GitHub.
- [x] Deploy to production.
- [x] Create editable Korean Notion presentation outline.
- [ ] Run final verification and update `QA.md`.

## Open Decisions

- None. Product name is `TripCanvas`; deployment is required; Notion must be Korean and editable; user-added images are local-file-only with no image URL input or fallback; layout must be map-first with country details in a desktop right panel and mobile bottom panel/sheet, not a single stacked scroll page. Country click shows the saved photo board first, `사진 추가` is an explicit action, memory-card click opens a large photo viewer/lightbox, visited-country map styling stays understated, and service-irrelevant Ralphthon/GOAL/QA/GitHub/Notion evidence must not appear on the user-facing app surface.

## Next Action

- Create the Notion outline page, commit and push final source, then run the final done_when audit.
