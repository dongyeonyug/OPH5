export type CountryId = "KOR" | "JPN" | "FRA" | "USA" | "BRA";

export type Country = {
  id: CountryId;
  iso3: CountryId;
  nameKo: string;
  nameEn: string;
  summary: string;
};

export const countries: Country[] = [
  {
    id: "KOR",
    iso3: "KOR",
    nameKo: "한국",
    nameEn: "South Korea",
    summary: "가까운 골목과 바다 풍경을 천천히 모으는 곳"
  },
  {
    id: "JPN",
    iso3: "JPN",
    nameKo: "일본",
    nameEn: "Japan",
    summary: "작은 역, 차분한 거리, 늦은 밤의 온기를 남기는 곳"
  },
  {
    id: "FRA",
    iso3: "FRA",
    nameKo: "프랑스",
    nameEn: "France",
    summary: "빛과 테라스, 오래 걸은 오후를 사진으로 붙잡는 곳"
  },
  {
    id: "USA",
    iso3: "USA",
    nameKo: "미국",
    nameEn: "United States",
    summary: "큰 길과 도시의 리듬을 넓게 기록하는 곳"
  },
  {
    id: "BRA",
    iso3: "BRA",
    nameKo: "브라질",
    nameEn: "Brazil",
    summary: "아직 비어 있는 첫 여행 카드를 기다리는 곳"
  }
];

export const countryById = Object.fromEntries(countries.map((country) => [country.id, country])) as Record<
  CountryId,
  Country
>;
