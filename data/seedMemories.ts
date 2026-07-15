import type { CountryId } from "./countries";

export type Memory = {
  id: string;
  countryId: CountryId;
  title: string;
  date: string;
  note: string;
  tags: string[];
  imageUrl: string;
  source: "seed" | "local";
};

export const seedMemories: Memory[] = [
  {
    id: "seed-kor-busan",
    countryId: "KOR",
    title: "부산의 파란 저녁",
    date: "2025-05-18",
    note: "해가 내려간 뒤에도 바다 색이 오래 남아 있었다.",
    tags: ["바다", "저녁", "산책"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-busan-blue-evening/900/1200",
    source: "seed"
  },
  {
    id: "seed-kor-seoul",
    countryId: "KOR",
    title: "비 온 뒤의 골목",
    date: "2025-09-02",
    note: "젖은 간판과 작은 카페 불빛이 여행처럼 느껴진 날.",
    tags: ["서울", "골목", "카페"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-seoul-rain-alley/900/1100",
    source: "seed"
  },
  {
    id: "seed-jpn-kyoto",
    countryId: "JPN",
    title: "교토의 조용한 아침",
    date: "2024-11-12",
    note: "문이 열리기 전의 거리에서 여행이 천천히 시작됐다.",
    tags: ["교토", "아침", "차분함"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-kyoto-morning-lane/900/1300",
    source: "seed"
  },
  {
    id: "seed-jpn-tokyo",
    countryId: "JPN",
    title: "도쿄 역 앞의 밤",
    date: "2024-11-15",
    note: "사람이 많았지만 내 기억에는 붉은 신호와 따뜻한 조명만 남았다.",
    tags: ["도쿄", "밤", "도시"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-tokyo-night-crossing/900/1050",
    source: "seed"
  },
  {
    id: "seed-fra-paris",
    countryId: "FRA",
    title: "파리의 창가 자리",
    date: "2023-06-21",
    note: "오래 앉아 있어도 괜찮은 오후였다.",
    tags: ["파리", "테라스", "오후"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-paris-window-table/900/1180",
    source: "seed"
  },
  {
    id: "seed-fra-lyon",
    countryId: "FRA",
    title: "리옹에서 만난 빛",
    date: "2023-06-24",
    note: "좁은 길 끝에서 갑자기 밝아지는 순간을 저장했다.",
    tags: ["리옹", "빛", "산책"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-lyon-warm-light/900/1250",
    source: "seed"
  },
  {
    id: "seed-usa-desert",
    countryId: "USA",
    title: "서쪽 도로의 긴 그림자",
    date: "2022-08-07",
    note: "창밖 풍경이 느리게 지나가던 긴 드라이브.",
    tags: ["로드트립", "사막", "노을"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-west-road-shadow/900/1150",
    source: "seed"
  },
  {
    id: "seed-usa-newyork",
    countryId: "USA",
    title: "뉴욕의 높은 오후",
    date: "2022-08-12",
    note: "건물 사이로 바람이 지나가고, 도시가 잠깐 가벼워졌다.",
    tags: ["뉴욕", "도시", "바람"],
    imageUrl: "https://picsum.photos/seed/tripcanvas-newyork-high-afternoon/900/1220",
    source: "seed"
  }
];
