"use client";

import { memo, useEffect, useMemo, useState } from "react";
import { geoEqualEarth, geoGraticule10, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { CountryId } from "@/data/countries";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const selectableCountries: CountryId[] = ["KOR", "JPN", "FRA", "USA", "BRA"];
const numericCountryIds: Record<string, CountryId> = {
  "076": "BRA",
  "250": "FRA",
  "392": "JPN",
  "410": "KOR",
  "840": "USA"
};
const countryMarkers: Record<CountryId, { name: string; coordinates: [number, number] }> = {
  BRA: { name: "Brazil", coordinates: [-51.9, -14.2] },
  FRA: { name: "France", coordinates: [2.3, 46.2] },
  JPN: { name: "Japan", coordinates: [138, 37] },
  KOR: { name: "South Korea", coordinates: [127.8, 36.5] },
  USA: { name: "United States", coordinates: [-98.5, 39.8] }
};

type CountryFeature = GeoJSON.Feature<GeoJSON.Geometry, {
  ISO_A3?: string;
  iso_a3?: string;
  ADM0_A3?: string;
  NAME?: string;
  name?: string;
}>;

type TopologyLike = {
  objects: {
    countries?: unknown;
  };
};

type WorldMapProps = {
  selectedCountry: CountryId;
  countriesWithMemories: Set<CountryId>;
  onSelectCountry: (countryId: CountryId) => void;
};

export const WorldMap = memo(function WorldMap({ selectedCountry, countriesWithMemories, onSelectCountry }: WorldMapProps) {
  const [features, setFeatures] = useState<CountryFeature[]>([]);
  const [mapError, setMapError] = useState(false);
  const projection = useMemo(() => geoEqualEarth().scale(176).translate([490, 318]).center([12, 12]), []);
  const path = useMemo(() => geoPath(projection), [projection]);
  const graticulePath = path(geoGraticule10());

  useEffect(() => {
    let mounted = true;

    fetch(geoUrl)
      .then((response) => {
        if (!response.ok) throw new Error("지도 데이터를 불러오지 못했습니다.");
        return response.json() as Promise<TopologyLike>;
      })
      .then((topology) => {
        if (!topology.objects.countries) throw new Error("지도 국가 데이터가 없습니다.");
        const collection = feature(topology as never, topology.objects.countries as never) as unknown as GeoJSON.FeatureCollection;
        if (mounted) setFeatures(collection.features as CountryFeature[]);
      })
      .catch(() => {
        if (mounted) setMapError(true);
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div className="absolute inset-0 flex items-end pt-28 sm:pt-32 lg:items-center lg:pt-28">
      <svg className="h-[78%] w-full sm:h-[82%] lg:h-[86%]" viewBox="0 0 980 620" role="img" aria-label="선택 가능한 세계 지도">
        {graticulePath ? <path d={graticulePath} fill="none" stroke="#eadfd2" strokeWidth={0.45} /> : null}
        {features.map((geo, index) => {
          const rawId = String(geo.id || "").padStart(3, "0");
          const iso = (numericCountryIds[rawId] || geo.properties.ISO_A3 || geo.properties.iso_a3 || geo.properties.ADM0_A3 || "") as CountryId;
          const isSelectable = selectableCountries.includes(iso);
          const isSelected = selectedCountry === iso;
          const hasMemory = countriesWithMemories.has(iso);
          const fill = isSelected ? "#e60023" : hasMemory ? "#cabfaf" : "#f2eadf";
          const d = path(geo);

          if (!d) return null;

          return (
            <path
              key={`${iso}-${index}`}
              d={d}
              role={isSelectable ? "button" : "img"}
              tabIndex={isSelectable ? 0 : -1}
              aria-label={isSelectable ? `${geo.properties.NAME || geo.properties.name || iso} 선택` : geo.properties.NAME || "지도 영역"}
              fill={fill}
              stroke={isSelected ? "#8f0016" : "#fffdf9"}
              strokeWidth={isSelected ? 0.85 : 0.5}
              className={
                isSelectable
                  ? "cursor-pointer outline-none transition-[fill,stroke] duration-200 hover:fill-[#dfd3c3] focus:stroke-[#e60023]"
                  : ""
              }
              onClick={() => {
                if (isSelectable) onSelectCountry(iso);
              }}
              onKeyDown={(event) => {
                if (isSelectable && (event.key === "Enter" || event.key === " ")) {
                  event.preventDefault();
                  onSelectCountry(iso);
                }
              }}
            />
          );
        })}
        {selectableCountries.map((countryId) => {
          const marker = countryMarkers[countryId];
          const point = projection(marker.coordinates);
          if (!point) return null;
          const isSelected = countryId === selectedCountry;
          const hasMemory = countriesWithMemories.has(countryId);

          return (
            <g key={countryId}>
              <circle
                cx={point[0]}
                cy={point[1]}
                r={16}
                fill="transparent"
                role="button"
                tabIndex={0}
                aria-label={`${marker.name} 선택`}
                className="cursor-pointer outline-none"
                onClick={() => onSelectCountry(countryId)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    onSelectCountry(countryId);
                  }
                }}
              />
              <circle
                cx={point[0]}
                cy={point[1]}
                r={isSelected ? 6.5 : 4.5}
                fill={isSelected ? "#e60023" : hasMemory ? "#7b7167" : "#cdbfaf"}
                stroke="#fffdf9"
                strokeWidth={2.5}
                className="pointer-events-none drop-shadow-sm"
              />
            </g>
          );
        })}
      </svg>
      {mapError ? (
        <div className="absolute left-5 top-32 max-w-sm rounded-2xl border border-[#eadfd2] bg-white/92 px-4 py-3 text-sm font-semibold text-[#6e6259] shadow-sm backdrop-blur">
          지도 데이터를 불러오지 못했어요. 네트워크를 확인한 뒤 다시 열어 주세요.
        </div>
      ) : null}
    </div>
  );
});
