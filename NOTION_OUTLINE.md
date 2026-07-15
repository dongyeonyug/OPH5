# TripCanvas Ralphthon 발표 아웃라인

## 1. 한 줄 소개

TripCanvas는 세계 지도에서 나라를 선택하고, 그 나라의 여행 기억을 사진 카드로 저장하는 한국어 중심 여행 보드입니다.

## 2. 데모에서 보여줄 장면

- Production URL: https://dongyeonyug.github.io/OPH5/
- GitHub URL: https://github.com/dongyeonyug/OPH5
- Notion URL: https://app.notion.com/p/39e08486666c81cda4a5e894f7c486a5
- 지도에서 일본, 프랑스, 한국, 미국, 브라질 중 하나를 선택합니다.
- 선택한 나라는 데스크톱에서 오른쪽 패널, 모바일에서 하단 시트로 열립니다.
- 저장된 사진 보드가 먼저 보이고, `사진 추가` 버튼으로 로컬 사진을 추가합니다.
- 카드를 클릭하면 큰 사진 보기 화면이 열립니다.
- 새로고침 후 같은 나라를 다시 선택하면 저장한 사진이 남아 있습니다.

## 3. Ralph loop 전략

- 앱은 작게 만들고 실패 가능성을 낮췄습니다.
- 핵심 점수는 기능 수가 아니라 Codex가 목표를 읽고, 계획하고, 검증하고, 배포하고, 발표 자료까지 남긴 흐름입니다.
- `GOAL.md`, `PLAN.md`, `ATTEMPTS.md`, `NOTES.md`, `QA.md`, `CONTROL.md`를 작업 메모리로 유지했습니다.
- 앱 화면에는 제출 증거를 넣지 않았고, 여행 서비스처럼 보이게 유지했습니다.

## 4. 점수표 연결

- Task instruction: `GOAL.md`에 목표, 제약, 검증 루프, 완료 조건을 명확히 정리했습니다.
- Autonomy: 구현 선택, 실패 기록, fallback 배포까지 `ATTEMPTS.md`와 커밋으로 추적합니다.
- Verification: lint, build, audit, 로컬 Playwright QA, production Playwright QA 결과를 `QA.md`에 기록합니다.
- Live demo: 지도 선택, 사진 보드, 로컬 파일 저장, 새로고침 persistence, 모바일 하단 시트를 확인했습니다.
- Creativity: 여행 지도와 Pinterest식 사진 보드를 자율 실행 하네스 이야기와 결합했습니다.
- Practicality: 추후 실제 업로드, 로그인, 공유 여행, 데이터베이스 저장으로 확장할 수 있습니다.

## 5. 3분 발표 스크립트

1. "저희는 단순한 여행 앱보다, Codex가 실행할 수 있는 목표 하네스를 먼저 설계했습니다."
2. "TripCanvas는 지도에서 나라를 선택하면 그 나라의 사진 기억이 바로 열리는 서비스입니다."
3. "사진 추가는 로컬 파일만 사용합니다. 서버 업로드 없이 같은 브라우저에 저장됩니다."
4. "새로고침 후에도 같은 나라를 다시 선택하면 저장한 기억이 남아 있습니다."
5. "핵심은 `GOAL.md`와 QA 루프입니다. Codex가 요구사항, 시도, 실패, 수정, 배포까지 추적했습니다."
6. "남은 확장은 실제 계정, 클라우드 업로드, 공유 여행 보드, 데이터베이스 저장입니다."

## 6. QA 증거

- `npm run lint`: 통과
- `npm run build`: 통과
- `npm run build:pages`: 통과
- `npm audit --audit-level=moderate`: 0 vulnerabilities
- 로컬 브라우저 QA: 지도 버튼 5개, country path 5개, 빈 상태, 폼 검증, 비이미지 파일 검증, 로컬 저장, 새로고침 persistence, lightbox, 모바일 하단 시트 확인
- Production 브라우저 QA: 배포 URL에서 지도 선택, 사진 추가, 새로고침 persistence, lightbox, 모바일 하단 시트 확인

## 7. 향후 확장

- 실제 이미지 업로드와 썸네일 최적화
- 사용자 로그인과 개인 여행 보드
- 여행 동행자와 공유하는 공동 보드
- 지도 필터와 태그 검색
- 나라별 타임라인과 JSON 내보내기
