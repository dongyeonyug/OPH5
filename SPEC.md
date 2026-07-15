# TripCanvas Ralphthon SPEC

## 1. Project Intent

TripCanvas is a Ralphthon-oriented MVP that demonstrates Codex autonomous-loop design through a small but polished travel memory web app.

The app is intentionally modest: a world map lets users select a country, then view or add travel memories as Pinterest-style photo cards inside a contextual detail surface. On desktop that surface should appear as a right-side panel; on mobile it should appear as a bottom panel or sheet. The app should not become one long page where the map, board, and form are all stacked as full-width sections. The real competition strategy is not to maximize feature count, but to prove that Codex can autonomously plan, implement, verify, document, and prepare a 3-minute presentation within a 45-50 minute loop.

Primary presentation frame:

> We did not just build a travel app. We designed a Codex harness that can turn a structured goal into a working MVP, QA evidence, GitHub history, and Notion presentation material with minimal human coding intervention.

## 2. Ralphthon Strategy

The competition scoring favors harness engineering:

- Task instruction clarity and structure: 15 points
- Agent autonomy and minimal direct intervention: 15 points
- Verification and loop design: 10 points
- Live demo completeness: 25 points
- Creativity and originality: 20 points
- Practicality and expandability: 10 points

Therefore, the project should optimize for these outputs:

- A clear `GOAL.md` contract that Codex can execute.
- Working-memory files that show how Codex planned, retried, and verified work.
- A small app that works reliably during a 3-minute live demo.
- A Korean-language Notion page that presents the idea, process, screenshots, QA evidence, and demo script.
- A GitHub repository with readable commits and open-source source code.

Current repository baseline as of the Tighten pass:

- Local project path: `/Users/yugdong-yeon/Desktop/OPH5`.
- Git is already initialized on branch `main`.
- GitHub remote exists at `https://github.com/dongyeonyug/OPH5`.
- The `OPH5` remote repository is currently private. Before final submission, make it judge-accessible by sharing access or making it public.
- The initial committed harness/spec snapshot has been pushed to the `OPH5` remote before app implementation.
- No final app implementation exists yet. The next `/goal` run should continue from this repository state, not assume an empty folder unless the files have been removed.

## 3. Product Concept

Name: TripCanvas

Name status: confirmed as the initial competition name.

One-line description:

> A map-first travel memory board where clicking a country opens a responsive detail panel with Pinterest-style photos, notes, dates, and tags.

Core user story:

> As a traveler, I want to click a country on a world map and have that country's memories appear beside or below the map, so that my travel history feels spatial, visual, and easy to revisit without losing the map context.

Target demo flow:

1. Open the app and see a warm, Pinterest-inspired travel map with Korean-first UI copy.
2. Click a highlighted country such as Japan, France, or Korea.
3. See that country's saved photo board first in the contextual detail surface: right-side panel on desktop, bottom panel/sheet on mobile.
4. Click a memory card and open a large photo viewer/lightbox for a more emotional visual moment.
5. Add a new memory through a Korean form inside that same detail surface, using a local photo file plus title, note, date, and tags.
6. Refresh or switch countries and confirm the entry persists through local storage.
7. Show responsive layout briefly on a narrow viewport and confirm the country detail surface moves to the bottom instead of becoming a long stacked page.

## 4. MVP Scope

### Must Have

- Next.js app with a polished first screen.
- Korean-first user-facing app UI, including headings, buttons, form labels, validation hints, empty states, and helper text. Product names, country names, URLs, file names, and proper nouns may remain English where natural.
- Interactive world map rendered from real geographic map data, not a decorative static illustration or a plain button list.
- At least 4 sample countries with distinct seeded travel memories.
- Clickable country selection.
- Selected-country detail panel/sheet, not a full-page stacked section.
- Desktop layout: the map remains the primary surface and selected-country memories/form appear in a right-side panel.
- Mobile layout: the map remains visible and selected-country memories/form appear in a bottom panel or sheet.
- Country click defaults to the saved photo board view first, with a clear `사진 추가` action available inside the detail surface.
- Clicking a memory card opens a large photo viewer/lightbox rather than only expanding text inline.
- Pinterest-style masonry or masonry-like image grid.
- Add-memory form with:
  - country
  - title
  - date
  - local photo file picker as the only user image input
  - short note
  - tags or mood
- Browser-local persistence for memories and locally selected images. Prefer `IndexedDB` for local image data and use `localStorage` only for small metadata or fallback state.
- Responsive desktop and mobile layouts.
- No final implementation where map, board, add-memory form, and process/harness content are all displayed as one top-to-bottom scroll page.
- No service-irrelevant harness or competition evidence panel on the app surface. Ralphthon/GOAL/PLAN/QA/Notion/GitHub process information belongs in README, Notion, QA, and repo documents, not in the user-facing travel product UI.
- Basic empty state for countries without memories.
- Production deployment, preferably Vercel, with the deployed URL included in the GitHub README and Notion presentation outline.
- GitHub repository initialized, committed, and pushed.
- Korean-language Notion presentation page generated with:
  - project summary
  - Ralph loop strategy
  - scoring alignment
  - demo script
  - QA checklist
  - future expansion ideas

### Should Have

- Subtle Framer Motion transitions for country selection and card appearance.
- Clear visual distinction between visited and unvisited countries.
- Screenshot or visual evidence attached or linked in Notion.
- A compact process summary in README or Notion. Do not surface it inside the app itself.

### Nice To Have

- Search/filter by tag or mood.
- Export memories as JSON.
- Prettier country detail panel animation.

## 5. Non-Goals

These are intentionally out of scope for the Ralphthon MVP:

- User authentication.
- Real database integration.
- Real cloud/server-side binary image upload.
- Multi-user sharing.
- Complex map editing.
- Full country coverage with perfect geographic metadata.
- Native mobile app.
- AI-generated travel recommendations.
- Payment, account, or social features.

Allowed simplification:

- Bundled/static sample images or generated placeholder assets are allowed for seeded travel memories and demo cards.
- Locally selected image files are allowed for MVP browser-local persistence and preview.

File-only image policy:

- The MVP should let users choose a photo file from their device and preview/save it into the travel card.
- The add-memory UI must not expose an image URL input, paste field, or URL fallback path.
- This is not real cloud upload: locally selected images only persist in the same browser/device unless a future storage backend is added.

Rationale: these features would increase failure risk without improving the main scoring target, which is autonomous agent harness design plus a reliable live demo.

## 6. Recommended Stack

Preferred stack:

- Next.js
- React
- Tailwind CSS
- Framer Motion
- react-simple-maps
- IndexedDB for locally selected image data
- localStorage for lightweight metadata or fallback persistence

Likely files and modules:

- `package.json`: scripts and dependencies.
- `README.md`: setup, deployed URL, Ralphthon summary, local run instructions.
- `app/page.tsx` or `src/app/page.tsx`: primary map-first shell and responsive country detail experience.
- `app/layout.tsx` or `src/app/layout.tsx`: metadata and global shell.
- `app/globals.css` or `src/app/globals.css`: Tailwind and design tokens.
- `components/WorldMap.tsx`: interactive map.
- `components/CountryDetailPanel.tsx`: selected-country memories and add-memory form in a desktop right panel and mobile bottom panel/sheet.
- `components/MemoryBoard.tsx`: selected-country card board.
- `components/MemoryForm.tsx`: add-memory form.
- `components/HarnessPanel.tsx`: compact process/evidence panel if included.
- `lib/storage.ts`: browser-local persistence helpers for metadata and local images.
- `data/seedMemories.ts`: sample country memories and bundled/static sample image references.
- `docs` or root markdown files: `GOAL.md`, `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, `CONTROL.md`.

Acceptable substitutions:

- If `react-simple-maps` causes setup or rendering friction, use another real SVG/TopoJSON/world-map package. A plain country selector may be used only as a temporary development fallback and does not satisfy final completion.
- If masonry layout is slow to implement, use CSS columns or responsive CSS grid that visually behaves like masonry.
- Deployment is required. Prefer Vercel. If the first deployment path fails, Codex must try a practical fallback deployment path and record the attempt in `ATTEMPTS.md`. A local-only demo is not enough for completion.

## 7. Design Direction

Use the provided Pinterest-inspired design direction:

- Warm cream surfaces.
- White canvas.
- Korean-first product copy that feels friendly, short, and demo-ready for Korean presenters and users.
- Pinterest Red `#e60023` only for primary CTAs, active state, and small brand accents.
- Countries with saved photos should use a restrained neutral/soft visited state; reserve Pinterest Red for the selected country, primary CTA, and small active accents.
- Image-first cards with 16px radius.
- Larger feature surfaces may use 32px radius.
- Masonry-style photo grid with tight gaps.
- Minimal shadows.
- Typography based on Inter or a similar sans-serif.
- The interface should get out of the photos' way.

Design ownership:

- Use the project-local `taste-skill` at `.omc/skills/taste-skill/SKILL.md` as the visual quality guide for the app's frontend surfaces.
- Apply `taste-skill` to visual hierarchy, map/board composition, card rhythm, form states, Korean copy polish, responsive layout, and final pre-flight checks.
- Do not let `taste-skill` override confirmed product behavior: real world map, browser-local persistence, local file-only image input, Korean-first UI, and Ralphthon harness evidence remain the source of truth.
- Design read: Korean-first travel memory product for a live Ralphthon demo, with a Pinterest-inspired image-first language, leaning toward a restrained consumer web app rather than a marketing landing page.
- Suggested dials: `DESIGN_VARIANCE: 6`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 5`.

Design constraints:

- Do not ship an English-only user interface.
- Avoid awkward machine-translated Korean; keep copy concise and natural.
- Do not overuse red.
- Do not create a generic dashboard look.
- Do not bury the product behind a marketing landing page.
- First screen must be the usable map experience.
- Do not ship a one-page scroll layout where the map, selected board, form, and process panel are all visible as stacked sections.
- Preserve map context after country selection: desktop uses a right-side detail panel; mobile uses a bottom detail panel/sheet.
- Do not show Ralphthon evidence cards, GOAL/PLAN/CONTROL labels, QA summaries, deployment status, GitHub status, or Notion/presentation process content in the product surface. The completed app should feel like TripCanvas, not a submission dashboard.

## 7.5 Edge Cases

- Country has no seeded or saved memories: show a useful empty state and invite the user to add one.
- User submits the form with missing required fields: block creation and show a visible validation hint.
- User selects a non-image file or oversized image: block or warn with a natural Korean validation message.
- Browser storage such as IndexedDB/localStorage is unavailable or throws: keep the app usable in-memory for the current session and surface a small persistence warning.
- Map package fails or geographic data cannot load: keep the app from crashing and record the blocker, but final completion requires a real visible world map.
- Mobile viewport is narrow: selected-country memories and form move into a bottom panel/sheet with no overlapping controls or clipped text.
- Desktop viewport is wide: selected-country memories and form appear in a right-side panel while the map remains usable.
- Country selection is cleared or switched: the detail surface updates predictably without leaving stale cards or form state for the previous country.
- User clicks a saved memory card: open a large photo viewer/lightbox with the selected image, title, date, note, and close control; closing returns to the same country board without losing state.

## 8. Harness Architecture

The project should be executed as a Codex `/goal` loop with explicit supporting files.

Required working-memory files:

- `GOAL.md`: final execution contract.
- `PLAN.md`: phase checklist, status, and next action.
- `ATTEMPTS.md`: failed checks, fixes, and retry notes.
- `NOTES.md`: implementation discoveries and decisions.
- `QA.md`: verification evidence and manual test checklist.
- `CONTROL.md`: small human steering surface.

Recommended `CONTROL.md` knobs:

- `scope_mode`: `mvp_only` by default.
- `deployment_mode`: `required_try_vercel_then_practical_fallback`.
- `intervention_policy`: `avoid_direct_code_edits_unless_blocked`.
- `presentation_priority`: `harness_story_first`.
- `time_budget_minutes`: `50`.
- `stop_if_core_demo_passes`: `true`.
- `layout_mode`: `map_first_responsive_detail_panel_desktop_right_mobile_bottom`.

## 9. Scorecard

Primary score:

The goal is complete when the harness can show a working MVP plus evidence that Codex autonomously planned, implemented, verified, and documented the project.

Scoring checklist:

- 15/15 task instruction: `GOAL.md` contains clear goal, constraints, workflow, scorecard, done_when, feedback loop, verification, and output contract.
- 15/15 autonomy: implementation commits and notes show Codex performed the work with minimal direct human code intervention.
- 10/10 verification loop: `QA.md` records build/lint/manual checks, failures, fixes, and final evidence.
- 25/25 demo completeness: the app supports the target demo flow without runtime errors.
- 20/20 creativity: the app combines world-map navigation, visual memory boards, and an explicit autonomous-build narrative.
- 10/10 practicality: Notion page explains extensions such as real uploads, auth, shared trips, and database storage.

Passing threshold:

- Core demo flow passes end to end.
- `GOAL.md`, `PLAN.md`, `ATTEMPTS.md`, `QA.md`, and Korean Notion presentation are present.
- GitHub repository is public or shareable.
- A production deployment URL is available and opens the app.
- No known blocking runtime error remains.

Stop condition:

- Stop feature work once the core demo passes and documentation/presentation evidence is complete.
- Use remaining time for QA, screenshots, commit cleanup, and Notion presentation.

## 10. Feedback Loop

Fast loop:

- Run lint/type/build check after each major implementation phase.
- Expected runtime: under 2 minutes if dependencies are installed.
- Cadence: after setup, after map interaction, after form/persistence, after visual polish.

Representative manual check:

- Open app locally.
- Click sample country.
- Confirm the country detail panel/sheet opens or updates.
- Add memory.
- Switch countries.
- Refresh page.
- Confirm persisted data and layout.

Visual check:

- Desktop screenshot.
- Mobile-width screenshot.
- Confirm desktop map plus right-side detail panel do not overlap.
- Confirm mobile map plus bottom panel/sheet do not overlap or force a full-page stacked layout.

Final loop:

- Build app.
- Run final manual demo script.
- Confirm GitHub push.
- Confirm production deployment URL opens the app.
- Confirm Korean-language Notion presentation outline is created and editable by the presenter.

## 11. Execution Phases

Phase 1: Harness setup

- Create repository.
- Create `GOAL.md`, `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `CONTROL.md`.
- Initialize app stack.

Phase 2: Core product

- Build app shell and visual system.
- Add interactive map.
- Add seeded country memories.
- Add selected-country board inside a responsive detail panel/sheet.

Phase 3: User action

- Add memory form inside the selected-country detail panel/sheet.
- Add local photo file picker with preview.
- Add browser-local persistence. Prefer IndexedDB for local image data and localStorage for lightweight metadata or fallback state.
- Add empty and reset states.

Phase 4: Polish and reliability

- Responsive layout.
- Motion transitions.
- Accessibility labels.
- Error handling for non-image files, oversized images, unavailable browser storage, or missing fields.

Phase 5: Verification

- Run build/lint checks.
- Run manual demo checklist.
- Capture screenshots or summarize visual checks.
- Fix any blocking issue.

Phase 6: Submission package

- Commit and push to GitHub.
- Deploy the app and record the production URL.
- Create an editable Korean-language Notion presentation outline.
- Include 3-minute speaker script.
- Include demo link and local run instructions.

## 12. Verification Criteria

Automated checks:

- `npm run lint` or equivalent.
- `npm run build` or equivalent.

Manual checks:

- App opens without runtime error.
- At least 4 sample countries are visible or selectable.
- Country selection opens or updates the selected-country detail panel/sheet.
- Country selection shows the saved photo board first, not the add form or process evidence first.
- Clicking a memory card opens a large photo viewer/lightbox and returns cleanly to the board when closed.
- Desktop layout shows selected-country memories/form in a right-side panel, not below the map as a full-page section.
- Mobile layout shows selected-country memories/form in a bottom panel/sheet, not as a long stacked page.
- Add-memory form creates a new card from a local photo file.
- New card and image persist after refresh in the same browser/device.
- Desktop layout is coherent.
- Mobile layout is coherent.
- Production deployment URL opens and supports the core demo flow.
- Notion presentation outline exists in Korean, matches the 3-minute story, and is easy for the presenter to edit.
- GitHub repository contains source code and final commit.

## 13. Candidate Done When Criteria

These criteria are approved for compiling into `GOAL.md`.

- `npm run build` completes successfully.
- The app provides a user-observable demo flow: a real visible world map opens, country click opens or updates the selected-country detail panel/sheet, a memory can be added there with a local photo file, and the memory persists after refresh in the same browser/device.
- The selected-country detail surface shows the saved photo board first, provides `사진 추가` as the explicit add action, and memory cards open a large photo viewer/lightbox.
- The app uses a map-first responsive layout: desktop right-side detail panel and mobile bottom detail panel/sheet. It is not a single scroll page with map, board, and form stacked as full-page sections.
- The add-memory form intentionally supports local image files only and exposes no image URL input.
- The visual design follows the Pinterest-inspired direction closely enough to be recognizable: warm cream surfaces, image-first cards, restrained red CTA, rounded cards, and masonry-like grid.
- The user-facing app surface contains only TripCanvas travel-memory product UI. Ralphthon evidence, GOAL/PLAN/QA/CONTROL summaries, GitHub/deployment status, and Notion presentation process content are kept out of the app UI and documented only in submission materials.
- `GOAL.md`, `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `CONTROL.md` exist and document the autonomous loop.
- A GitHub repository exists with source code pushed.
- A production deployment URL exists and opens the app.
- A Korean-language Notion presentation outline exists with project summary, harness strategy, scoring alignment, demo script, QA evidence, and future expansion, while remaining easy for the presenter to edit.
- No known blocker remains for a 3-minute live demo.

## 14. Open Decisions

No open product decisions remain before compiling `GOAL.md`.

Confirmed decisions:

- Product name is `TripCanvas`.
- Deployment is required.
- Notion should be an editable Korean-language presentation outline, not an over-polished locked final page.
- File-only browser-local image input is confirmed: local photo file selection is the only user image path, image URL input is removed, and real cloud upload is out of scope for this MVP.
- Real world map requirement is confirmed: final completion requires an actual visible geographic world map with clickable countries or country regions.
- Layout requirement is confirmed: clicking a country must reveal/update a responsive detail surface, with desktop right panel and mobile bottom panel/sheet. The previous one-page scroll interpretation is rejected.
- Interaction requirement is confirmed: country click should show the saved photo board first, `사진 추가` is an explicit action, memory-card click opens a large photo viewer/lightbox, and visited-country map styling should be understated while red is reserved for the selected country/primary action.
- Product-surface boundary is confirmed: final app UI must not include service-irrelevant Ralphthon evidence panels or GOAL/PLAN/QA/GitHub/Notion process cards. Those belong in repository and presentation artifacts.

## 15. Recommended Presentation Script

0:00-0:25

Introduce the problem and concept: travel memories are visual and spatial, but most note tools are list-based. TripCanvas turns a world map into a visual memory board.

0:25-1:10

Show the app: click a country, open the right-side or bottom detail panel, add a memory, refresh, and show persistence.

1:10-2:10

Explain the Ralph loop harness: `GOAL.md` defined the contract, `PLAN.md` tracked phases, `ATTEMPTS.md` captured retries, `QA.md` recorded verification, and Notion/GitHub were produced as submission artifacts.

2:10-2:40

Map to scoring: structured instruction, autonomous execution, verification loop, working demo, creative visual metaphor, and practical expansion path.

2:40-3:00

Close with future expansion: real uploads, auth, shared trips, database-backed travel journals, and public trip boards.
