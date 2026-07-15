<goal>
Build and submit TripCanvas, a Ralphthon-ready MVP web app and harness package.

TripCanvas must be a deployed Next.js travel memory app with Korean-first user-facing UI where a user can select a country from a real visible world-map experience, then see that country's Pinterest-style saved photo board and local-photo input inside a responsive detail surface: a right-side panel on desktop and a bottom panel/sheet on mobile. The selected-country surface must show the saved photo board first, expose photo adding as a clear action, and open a large photo viewer/lightbox when a memory card is clicked. The app must not present the map, board, and form as one long all-in-one scroll page. The app surface must also stay product-pure: no Ralphthon evidence panel, GOAL/PLAN/QA/CONTROL summaries, GitHub/deployment status cards, or Notion/presentation process content should appear in the user-facing TripCanvas UI. New memories must persist after refresh in the same browser/device. The final package must prove Codex autonomous-loop design through maintained working-memory files, GitHub history, deployment evidence, QA evidence, and an editable Korean-language Notion presentation outline for a 3-minute team presentation outside the app surface.
</goal>

<context>
Read these files first if they exist:
- `SPEC.md`
- `GOAL.md`
- `CONTROL.md`
- `PLAN.md`
- `ATTEMPTS.md`
- `NOTES.md`
- `QA.md`
- `README.md`
- `package.json`
- `app/page.tsx` or `src/app/page.tsx`
- `app/globals.css` or `src/app/globals.css`
- `components/`
- `lib/`
- `data/`

Current repository baseline:
- Project path: `/Users/yugdong-yeon/Desktop/OPH5`.
- Branch: `main`.
- Remote: `https://github.com/dongyeonyug/OPH5`.
- The `OPH5` remote repository is currently private. For final submission, make the repository judge-accessible by sharing access or making it public, and record the chosen status in `README.md` and `QA.md`.
- The initial committed harness/spec snapshot has been pushed to the `OPH5` remote. Continue with implementation commits rather than rewriting history.

If starting from an empty directory, create a new repository for TripCanvas and scaffold a Next.js app. Prefer:
- Next.js
- React
- Tailwind CSS
- Framer Motion
- `react-simple-maps`
- IndexedDB for locally selected image data
- localStorage for lightweight metadata or fallback persistence

Use these discovery commands as needed:
- `pwd`
- `git status --short --branch`
- `rg --files`
- `rg -n "TripCanvas|localStorage|IndexedDB|file picker|react-simple-maps|MemoryBoard|WorldMap|MemoryForm"`

Likely files/modules to create or modify:
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
- `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, `CONTROL.md`: harness evidence files.
</context>

<constraints>
Product name is `TripCanvas`.

Ralphthon strategy:
- Optimize for harness engineering, not maximum feature count.
- The app is the demo artifact; the working-memory files, QA trail, GitHub trail, deployment, and Notion outline are the evidence that Codex executed a strong autonomous loop.
- Minimize direct human code intervention. If human intervention occurs, record it plainly in `ATTEMPTS.md` or `NOTES.md`.

Must-have product behavior:
- First screen is the usable map experience, not a marketing landing page.
- The primary UX is a map-first application shell, not a scroll-first page.
- User-facing app copy is Korean-first, including headings, buttons, form labels, validation hints, empty states, and helper text. Product names, country names, URLs, file names, and proper nouns may remain English where natural.
- A real geographic world map is visible in the app, and a user can select at least 4 sample countries from the map.
- Country selection opens or updates the selected-country detail surface: right-side panel on desktop, bottom panel/sheet on mobile.
- The selected-country detail surface displays the saved photo board first, using seeded and saved travel memories as image-first cards.
- A clear `사진 추가` action inside the selected-country detail surface opens or reveals the add-memory form; the add form should not be the default first thing shown after country click when memories exist.
- Clicking a memory card opens a large photo viewer/lightbox with the selected image and memory details, then returns cleanly to the same board when closed.
- The add-memory form lives inside the selected-country detail surface and accepts country, title, date, local photo file, short note, and tags or mood.
- Local photo file picker is the only user image input; the add-memory UI must not expose an image URL field, paste field, or URL fallback path.
- New memories persist in browser-local storage after refresh. Prefer `IndexedDB` for local image data and use `localStorage` only for small metadata or fallback state.
- Empty countries show a useful empty state.
- Desktop and mobile layouts are coherent and do not overlap controls or text.
- Do not lay out the map, memory board, add-memory form, and process/harness content as separate full-page stacked sections. The memory board and form should appear only in the selected-country responsive detail surface.
- Do not show service-irrelevant harness or competition evidence on the app surface. Ralphthon/GOAL/PLAN/ATTEMPTS/NOTES/QA/CONTROL, GitHub, deployment, and Notion presentation evidence belongs in README, Notion, QA, and repo documents, not in the user-facing TripCanvas product UI.

Design rules:
- Read and apply the project-local `taste-skill` at `.omc/skills/taste-skill/SKILL.md` for visual quality, frontend taste, anti-slop review, responsive layout, Korean copy polish, and final pre-flight checks.
- Treat `taste-skill` as the design guide, not the product authority. It must not weaken the confirmed product requirements: real world map, browser-local persistence, local file-only image input, Korean-first UI, and Ralphthon harness evidence.
- Design read: Korean-first travel memory product for a live Ralphthon demo, with a Pinterest-inspired image-first language, leaning toward a restrained consumer web app rather than a marketing landing page.
- Layout read: first viewport is a usable map canvas with contextual detail, not a top-to-bottom landing page or one-page scroll document.
- Use suggested dials: `DESIGN_VARIANCE: 6`, `MOTION_INTENSITY: 4`, `VISUAL_DENSITY: 5`.
- Follow a Pinterest-inspired visual direction: warm cream surfaces, white canvas, image-first cards, tight masonry-like grid, restrained red accent `#e60023`, rounded 16px cards/buttons, 32px only for larger surfaces, minimal shadows, Inter or similar sans-serif.
- Keep Korean copy concise, natural, and presenter-friendly. Do not ship an English-only app UI or awkward machine-translated Korean.
- Do not overuse red.
- Countries with saved photos should use a restrained neutral/soft visited state. Reserve Pinterest Red for the selected country, primary CTA, and small active accents.
- Do not create a generic dashboard.
- Do not add decorative visual clutter that competes with travel photos.
- Do not create an in-app evidence/process panel like "Ralphthon evidence", "app and loop", "GOAL/PLAN/CONTROL", "ATTEMPTS/NOTES/QA", deployment status, GitHub status, or Notion status. The product should feel like a travel memory service, while the harness story lives in external submission artifacts.

Technical boundaries:
- Deployment is required. Prefer Vercel. If the first deployment path fails, try a practical fallback deployment path and record the attempt in `ATTEMPTS.md`. A local-only demo is not complete.
- GitHub repository creation/push is required. If GitHub auth/tooling is unavailable, record the blocker and do not claim completion.
- Korean-language Notion presentation outline creation is required. If Notion auth/tooling is unavailable, create a local Korean `NOTION_OUTLINE.md`, record the blocker, and do not claim full completion until the Notion page exists.
- Bundled/static sample images or generated placeholder assets are allowed for seeded memories and demo cards.
- Locally selected image files are allowed for MVP browser-local persistence and preview.
- Do not implement authentication.
- Do not implement a real database.
- Do not implement real cloud binary image upload in this MVP. Local file selection must be described honestly as browser-local photo adding, not server upload.
- Do not implement multi-user sharing.
- Do not implement payments, accounts, or social features.
- Do not widen scope after the core demo works; spend remaining time on QA, deployment, GitHub, and Notion evidence.

Allowed fallback:
- If `react-simple-maps` creates setup or rendering friction, use another real SVG/TopoJSON/world-map package. A plain country selector may be used only as a temporary development fallback and does not satisfy final completion.
- If masonry is slow to implement, use CSS columns or responsive CSS grid that visually behaves like masonry.
</constraints>

<scorecard>
Primary metric:
TripCanvas is successful when it demonstrates both a working deployed MVP and auditable Codex autonomous-loop design evidence.

Passing threshold:
- Core app demo flow passes end to end.
- Korean-first app UI is present and understandable for Korean users.
- `npm run build` passes.
- Production deployment URL opens the app and supports the core demo flow.
- GitHub repository exists and contains pushed source code.
- Editable Korean-language Notion presentation outline exists.
- `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `CONTROL.md` exist and reflect the run.
- No known blocking runtime, layout, deployment, GitHub, or Notion issue remains.

Ralphthon scoring checklist:
- Task instruction, 15 points: `GOAL.md` contains clear goal, context, constraints, scorecard, done_when, feedback_loop, workflow, working_memory, human_control_surface, verification_loop, execution_rules, and output_contract.
- Autonomy, 15 points: `ATTEMPTS.md`, commits, and notes show Codex performed the build with minimal human code intervention.
- Verification/loop design, 10 points: `QA.md` records automated checks, manual checks, deployment check, visual check, failures, and fixes.
- Live demo completeness, 25 points: map opens, country click opens the right/bottom detail surface, memory can be added inside that surface, refresh preserves memory, deployed URL works.
- Creativity, 20 points: world-map navigation plus visual memory board plus explicit autonomous-build story.
- Practicality, 10 points: Notion outline and README explain extensions such as real uploads, auth, shared trips, and database-backed journals.

Regression checks:
- Existing working demo flow must remain working after each polish step.
- Local file photo adding, file validation, and browser-local persistence must remain working after form or storage changes.
- Deployment URL must be rechecked after the final production deployment.
- Mobile layout must remain coherent after visual polish.
- Korean app copy must remain Korean-first after feature or polish changes.
- The Notion outline must be written in Korean and remain editable and presenter-friendly, not an over-polished locked artifact.

Scoring method:
- Inspect `QA.md` for the scorecard checklist and verification evidence.
- Inspect production URL manually.
- Inspect `README.md` for deployment URL and local run instructions.
- Inspect GitHub remote and latest commit.
- Inspect Notion page or exported outline.

Stop condition:
Stop feature work once the passing threshold is met. Use remaining time only for QA evidence, screenshots, README clarity, GitHub push, deployment reliability, and Notion presentation cleanup.
</scorecard>

<done_when>
This goal is complete only when all of the following are true:

1. `npm run build` completes successfully.
2. The app provides this user-observable demo flow: a real visible world map opens, country click opens or updates the selected-country detail surface with the saved photo board first, a memory card opens a large photo viewer/lightbox, a memory can be added through an explicit `사진 추가` action with a local photo file, and the memory persists after refresh in the same browser/device.
3. The app uses a map-first responsive layout: on desktop the selected country's memories and form appear in a right-side panel; on mobile/narrow viewports they appear in a bottom panel or sheet. The final UI must not be a single scroll page where map, board, and form are all stacked as full-page sections.
4. The app UI is Korean-first and does not feel like an English-only product; headings, buttons, form labels, validation hints, empty states, and helper text are in natural Korean except product names, country names, URLs, file names, and proper nouns.
5. The add-memory form exposes no image URL input or URL fallback path, and invalid or oversized file cases show readable Korean validation or fallback UI.
6. The visual design follows the Pinterest-inspired direction: warm cream surfaces, image-first cards, restrained red CTA/accent, rounded cards, and masonry-like grid.
7. The user-facing app surface contains only TripCanvas travel-memory product UI, with no Ralphthon evidence panel, GOAL/PLAN/QA/CONTROL cards, GitHub/deployment status, or Notion/presentation process content.
8. `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `CONTROL.md` exist and document the autonomous loop.
9. A GitHub repository exists with source code pushed.
10. A production deployment URL exists and opens the app.
11. The production deployment URL supports the core demo flow, not merely a static placeholder.
12. A Korean-language Notion presentation outline exists with project summary, harness strategy, scoring alignment, demo script, QA evidence, and future expansion.
13. The Notion presentation outline is written in Korean and is easy for the presenter to edit.
14. `README.md` includes local run instructions, the production URL, the GitHub/repo context, and a short Ralphthon explanation.
15. `QA.md` records the final automated build result, manual demo result, real-world-map interaction result, responsive detail panel/sheet result, local photo add/persistence result, file validation result, mobile/desktop visual result, deployment result, GitHub result, Notion result, Korean UI review result, photo lightbox result, and product-surface boundary review.
16. No known blocker remains for a 3-minute live demo.
</done_when>

<feedback_loop>
Fast representative loop:
- Command/check: run the fastest available focused check after each major phase. Prefer `npm run lint` if configured, then `npm run build` at phase gates.
- Expected runtime: under 2 minutes once dependencies are installed.
- Cadence: after app scaffold, after map/country selection, after form/localStorage, after visual polish, after deployment-related changes.
- Proxy validity: lint/build catches syntax, type, dependency, rendering, and production-readiness issues early enough for this MVP.

Manual representative loop:
- Open the local app.
- Select a sample country such as Japan, Korea, France, or United States.
- Confirm the selected-country detail surface opens or updates.
- On desktop, confirm memories and the add-memory form appear in a right-side panel without turning the page into a full-length stacked scroll.
- On mobile/narrow viewport, confirm memories and the add-memory form appear in a bottom panel/sheet without covering essential map controls.
- Add a memory with a local photo file, date, note, and tags.
- Switch countries.
- Refresh.
- Confirm the new memory and image persist in the same browser/device.

Visual loop:
- Check a desktop viewport and a mobile/narrow viewport.
- Confirm the desktop map plus right-side detail panel and the mobile map plus bottom panel/sheet do not overlap or clip text.
- Confirm the UI is not one long page that displays all country details and the form at once below the map.
- Confirm the UI is image-first and not dashboard-like.
- Confirm user-facing app text is Korean-first and comfortable for Korean users.

Slower final loop:
- `npm run build`
- Production deployment
- Open production URL and run the demo flow
- Confirm GitHub push
- Confirm Notion outline exists, is written in Korean, and is editable
- Update `QA.md` with evidence before completion
</feedback_loop>

<workflow>
Phase 0: Orientation
- Check current directory and git status.
- Read `CONTROL.md`, `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and existing app files if present.
- If no app exists, scaffold TripCanvas as a new Next.js app in the target repository.
- Update `PLAN.md` with the current phase and strategy.

Phase 1: Harness setup
- Create or update `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `CONTROL.md`.
- Record the accepted scope and constraints.
- Initialize Git only if it is not already initialized.
- If a GitHub remote already exists, verify it and continue from it. Do not recreate the repository or rewrite commit history.
- Before app implementation begins, verify there is an initial commit containing the harness/spec state: `SPEC.md`, `GOAL.md`, `CONTROL.md`, `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `.omc/skills/taste-skill/SKILL.md` if present. If that commit is missing, create it before writing app implementation code.
- After scaffolding is stable, create a second commit for the app scaffold.

Phase 2: Core product
- Build the app shell and visual system.
- Implement a map-first responsive shell: desktop map with right-side selected-country panel, mobile map with bottom selected-country panel/sheet.
- Implement interactive country selection.
- Seed at least 4 countries with distinct travel memories and bundled/static sample image references.
- Implement selected-country memory board inside the responsive detail surface.
- Run the fast feedback check.
- Record results in `ATTEMPTS.md` and `QA.md`.

Phase 3: User action and persistence
- Implement add-memory form inside the selected-country detail surface.
- Implement local file photo picker with preview.
- Implement browser-local persistence with graceful fallback. Prefer `IndexedDB` for local image data and use `localStorage` only for lightweight metadata or fallback state.
- Implement empty state and form validation.
- Run manual representative loop locally.
- Record results and any fixes.

Phase 4: Polish and responsive QA
- Apply Pinterest-inspired visual polish.
- Add Framer Motion transitions if they do not threaten reliability.
- Verify desktop and mobile layouts.
- Avoid adding nice-to-have scope unless all must-have checks are already green.

Phase 5: GitHub and deployment
- Ensure repository is clean enough for submission.
- Commit meaningful changes.
- Create or use a GitHub repository and push source code.
- Deploy to production, preferably Vercel.
- If deployment fails, record the failure in `ATTEMPTS.md`, try a practical fallback, and do not mark complete until a production URL works.
- Add production URL to `README.md`.

Phase 6: Notion presentation outline
- Create an editable Korean-language Notion presentation outline.
- Include project summary, harness strategy, scoring alignment, demo script, QA evidence, deployment URL, GitHub URL, and future expansion.
- Keep it presenter-editable: Korean headings, concise Korean bullets, and no over-polished locked formatting.

Phase 7: Final verification
- Run `npm run build`.
- Open the production URL and run the core demo flow.
- Check desktop and mobile layouts.
- Confirm GitHub push.
- Confirm Notion outline is written in Korean and editable.
- Update `QA.md` with final evidence.
- Check `done_when` item by item before final response.
</workflow>

<working_memory>
Create and maintain these files in the target repository root:

- `PLAN.md`: current strategy, phase checklist, next action, open blockers.
- `ATTEMPTS.md`: each meaningful attempt, command/result evidence, result, next adjustment.
- `NOTES.md`: durable discoveries, decisions, external constraints, and human interventions.
- `QA.md`: automated, manual, visual, deployment, GitHub, and Notion verification evidence.
- `CONTROL.md`: compact human operator panel.

Update cadence:
- Update `PLAN.md` before starting a new phase and after any strategic change.
- Update `ATTEMPTS.md` after every meaningful implementation attempt, failed check, deployment attempt, or successful scorecard improvement.
- Update `NOTES.md` whenever a discovery or blocker should survive context compaction.
- Update `QA.md` after each verification run.
- Reread `CONTROL.md` before phase changes, deployment, GitHub push, Notion creation, or any strategic pivot.
</working_memory>

<human_control_surface>
Create and maintain `CONTROL.md` as the compact human operator panel for this goal.

Initial required knobs:
- `scope_mode`: `mvp_only`
- `deployment_mode`: `required_try_vercel_then_practical_fallback`
- `intervention_policy`: `avoid_direct_code_edits_unless_blocked`
- `presentation_priority`: `harness_story_first`
- `time_budget_minutes`: `50`
- `stop_if_core_demo_passes`: `true`
- `image_policy`: `browser_local_file_only_no_url_input_no_cloud_upload`
- `notion_mode`: `editable_korean_presenter_outline`
- `product_name`: `TripCanvas`
- `layout_mode`: `map_first_responsive_detail_panel_desktop_right_mobile_bottom`

Before each phase change, strategic pivot, deployment attempt, GitHub push, Notion creation, expensive step, or sidecar ingestion, reread `CONTROL.md`. If it changed, summarize the relevant change in `PLAN.md` and adapt before proceeding.

Decision gates requiring explicit approval:
- Removing required deployment.
- Replacing Notion with local-only outline.
- Dropping GitHub push.
- Adding authentication, database, binary upload, or multi-user scope.
- Direct human code intervention beyond small unblockers.
- Any destructive command or unrelated file rewrite.

Do not treat `CONTROL.md` as permission to ignore `GOAL.md`; it can narrow priorities, pause work, or require approval, but it cannot silently weaken `done_when` or scorecard thresholds.
</human_control_surface>

<verification_loop>
Automated checks:
- Install dependencies using the repository's package manager.
- Run `npm run lint` if available.
- Run `npm run build`.
- If a script is missing, add a reasonable script or document why it is unavailable in `QA.md`; `npm run build` must ultimately pass.

Manual local checks:
- Start the app locally.
- Open the app without runtime error.
- Select at least two sample countries and confirm the selected-country detail surface changes.
- Confirm country selection shows the saved photo board first, with `사진 추가` as the explicit add action.
- Click a memory card and confirm a large photo viewer/lightbox opens and closes without losing board state.
- On desktop, confirm the detail surface is a right-side panel containing memories and the add-memory form.
- On mobile/narrow viewport, confirm the detail surface is a bottom panel/sheet containing memories and the add-memory form.
- Add a memory with a local photo file.
- Refresh and confirm the new memory and local image persist in the same browser/device.
- Confirm empty state for an unseeded or cleared country.
- Confirm validation for missing required fields.
- Confirm validation or fallback behavior for non-image files, oversized images, and unavailable browser storage.

Visual checks:
- Desktop viewport: map, right-side panel, memory cards, and form are coherent and image-first.
- Mobile/narrow viewport: map and bottom panel/sheet are coherent with no overlap, clipped text, or forced full-page stacked board/form.
- Red accent is restrained and used for primary CTA/active state only.
- Countries with saved memories use an understated visited-state treatment; the selected country and primary action carry the strongest red accent.
- Product-surface boundary review: app UI does not show Ralphthon evidence panels, GOAL/PLAN/QA/CONTROL labels, GitHub/deployment status, Notion process content, or other service-irrelevant submission metadata.
- Korean UI review: headings, buttons, form labels, validation hints, empty states, and helper text are Korean-first and natural.

Deployment checks:
- Deploy to production.
- Open the production URL.
- Run the core demo flow on the production URL.
- Record the URL and result in `README.md` and `QA.md`.

GitHub checks:
- Confirm remote repository exists.
- Confirm the commit history includes an initial harness/spec commit before implementation commits.
- Confirm source code is pushed.
- Confirm the repository is judge-accessible before final submission. A private repository is acceptable only if the judges or presenter have access.
- Record repository URL in `README.md`, `QA.md`, and Notion outline.

Notion checks:
- Create editable Korean-language Notion outline.
- Confirm it contains Korean project summary, Korean harness strategy, Korean scoring alignment, Korean 3-minute demo script, QA evidence, deployment URL, GitHub URL, and future expansion.
- Confirm the main Notion document body is written in Korean except unavoidable product names, code/file names, commands, URLs, and proper nouns.
- Record Notion URL in `QA.md` if available.

Completion audit:
- Inspect changed files for placeholder TODOs, `test.skip`, `.only`, stubbed branches, or fake completion notes.
- If found, implement them or explicitly record the blocker; do not claim completion while blockers remain.
</verification_loop>

<execution_rules>
- Check git status before edits.
- Preserve unrelated user changes.
- Prefer `rg` over `grep` when available.
- Use the runtime's patch/edit tool for manual edits when available.
- Read context files before implementation.
- Batch independent file reads in parallel when the runtime supports it.
- Keep the goal scorecard current: know the primary metric, passing threshold, regression checks, scoring method, and stop condition.
- Use the fastest representative feedback check while iterating; reserve slower checks for escalation points and final verification.
- Maintain `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, and `CONTROL.md`.
- Update `ATTEMPTS.md` after each meaningful approach so future iterations do not repeat work without new evidence.
- Run focused tests before broad tests.
- Do not paper over failures.
- Do not widen scope.
- Do not claim local-only completion because deployment is required.
- Do not claim completion before GitHub push and Notion outline are done.
- During goal execution, initialize Git only if needed. If Git already exists, preserve history, verify the existing harness/spec commit, and commit implementation work on top of it.
- Keep the final answer concise.
</execution_rules>

<output_contract>
Final artifacts must include:
- Working TripCanvas source code.
- `README.md` with local run instructions, production URL, GitHub URL, and Ralphthon summary.
- `PLAN.md`
- `ATTEMPTS.md`
- `NOTES.md`
- `QA.md`
- `CONTROL.md`
- Production deployment URL.
- GitHub repository URL.
- Editable Korean-language Notion presentation outline URL.

Final response must be concise and include:
- Production URL.
- GitHub URL.
- Korean Notion outline URL.
- Verification summary: build, production demo flow, mobile/desktop visual check, persistence check.
- Any residual risks or explicit blockers.

Completion signal:
Only report completion when every `done_when` item is satisfied. If deployment, GitHub, or Notion is blocked by missing authentication/tooling, report the blocker and do not claim the goal is complete.
</output_contract>
