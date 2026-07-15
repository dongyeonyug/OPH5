# TripCanvas

TripCanvas는 지도에서 나라를 고르고, 그 나라의 여행 기억을 사진 카드로 남기는 Ralphthon MVP입니다. 사용자 화면은 한국어 중심이며, 제출/하네스 증거는 앱 화면이 아니라 저장소 문서와 Notion 발표 자료에 분리했습니다.

## Links

- Production: https://dongyeonyug.github.io/OPH5/
- GitHub: https://github.com/dongyeonyug/OPH5
- Notion outline: https://app.notion.com/p/39e08486666c81cda4a5e894f7c486a5

## Local Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Checks

```bash
npm run lint
npm run build
npm run build:pages
```

## Demo Flow

1. Open TripCanvas and confirm the world map is visible.
2. Click a country marker or highlighted country such as Japan, France, Korea, United States, or Brazil.
3. Confirm the selected country opens in the detail surface: right panel on desktop, bottom sheet on mobile.
4. Click a memory card to open the large photo viewer.
5. Click `사진 추가`, select a local image file, fill title/date/note/tags, and save.
6. Refresh, select the same country again, and confirm the saved memory remains in the same browser/device.

## Ralphthon Summary

The project is intentionally small. The scoring story is the autonomous loop: a clear `GOAL.md`, maintained `PLAN.md`/`ATTEMPTS.md`/`NOTES.md`/`QA.md`, a pushed repository, a production deployment, and an editable Korean Notion presentation outline.

## Deployment

Vercel was the preferred target, but the local Vercel token was invalid during execution. The practical fallback is GitHub Pages using a static Next export:

```bash
npm run deploy:pages
```

The repository is public for judge access.
