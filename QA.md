# QA

## Automated Checks

| Check | Status | Evidence |
| --- | --- | --- |
| `npm run lint` | Pass | `eslint .` completed with 0 errors. |
| `npm run build` | Pass | Next.js 16.2.10 production build completed successfully. |
| `npm run build:pages` | Pass | Static export for GitHub Pages completed successfully. |
| `npm audit --audit-level=moderate` | Pass | `found 0 vulnerabilities`. |

## Manual Demo Checks

| Check | Status | Evidence |
| --- | --- | --- |
| App opens without runtime error | Pass | Local Playwright opened `http://localhost:3000`. |
| Country selection opens or updates detail panel/sheet | Pass | Local QA selected France from the world map marker and panel changed to `프랑스`. |
| Desktop detail surface is right-side panel, not full-page stacked section | Pass | Desktop screenshot shows map surface plus right panel. |
| Mobile detail surface is bottom panel/sheet, not long stacked page | Pass | Mobile QA: aside y=408.625, bottom sheet visible below map. |
| Add-memory form creates card inside selected-country detail surface | Pass | Local QA saved `검증 기억 ...` and card count returned 1. |
| New memory persists after refresh | Pass | Local and production QA reselected France after refresh and found the saved memory. |
| Empty state works | Pass | Local QA selected Brazil and confirmed `브라질의 첫 기억` empty state. |
| Missing required fields validation | Pass | Local QA confirmed `제목을 입력해 주세요.` appears. |
| Non-image file validation | Pass | Local QA uploaded `.txt` and confirmed `이미지 파일만 선택할 수 있어요.` appears. |
| Photo lightbox opens | Pass | Local and production QA confirmed the saved card opens an article lightbox. |

## Visual Checks

| Check | Status | Evidence |
| --- | --- | --- |
| Desktop map plus right-side panel coherent | Pass | Playwright screenshot captured map-first desktop with right panel. |
| Mobile map plus bottom panel/sheet coherent | Pass | Playwright screenshot captured map-first mobile with bottom sheet and no floating add-button overlap. |
| Final UI is not one all-in-one scroll page | Pass | Board/form live inside the selected-country detail surface only. |
| Pinterest-inspired design recognizable | Pass | Warm cream surface, red CTA, image cards, masonry-like board. |
| Product-surface boundary | Pass | No GOAL/PLAN/QA/GitHub/deployment/Notion evidence appears in the app UI. |
| Korean UI review | Pass | Headings, buttons, labels, validation, empty state, and helper copy are Korean-first. |

## Submission Checks

| Check | Status | Evidence |
| --- | --- | --- |
| GitHub repository pushed | Partial | `gh-pages` deployment branch pushed. Main source push pending final commit. Repository is public at `https://github.com/dongyeonyug/OPH5`. |
| Production deployment URL opens | Pass | `curl -I -L https://dongyeonyug.github.io/OPH5/` returned HTTP 200. |
| Production URL supports core demo | Pass | Production Playwright QA confirmed map markers 5, country paths 5, France selection, local image save, refresh persistence, lightbox, mobile bottom sheet. |
| Editable Korean Notion outline exists | Pass | Created Notion page: `https://app.notion.com/p/39e08486666c81cda4a5e894f7c486a5`. |
| Main Notion body is Korean | Pass | Notion page content was created from Korean presenter outline covering summary, strategy, scoring, demo script, QA evidence, and expansion. |

## Final Verdict

Not complete until final main source push and final done_when audit are complete.
