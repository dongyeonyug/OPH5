"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconMapPin, IconX } from "@tabler/icons-react";
import { countries, countryById, type CountryId } from "@/data/countries";
import { seedMemories, type Memory } from "@/data/seedMemories";
import { loadLocalMemories, saveDraftMemory, type DraftMemory } from "@/lib/storage";
import { WorldMap } from "./WorldMap";
import { CountryDetailPanel } from "./CountryDetailPanel";
import { MemoryLightbox } from "./MemoryLightbox";

const initialCountry: CountryId = "JPN";

export function TripCanvasApp() {
  const [selectedCountry, setSelectedCountry] = useState<CountryId>(initialCountry);
  const [localMemories, setLocalMemories] = useState<Memory[]>([]);
  const [storageWarning, setStorageWarning] = useState<string | undefined>();
  const [lightboxMemory, setLightboxMemory] = useState<Memory | null>(null);

  useEffect(() => {
    let mounted = true;
    loadLocalMemories().then(({ memories, warning }) => {
      if (!mounted) return;
      setLocalMemories(memories);
      setStorageWarning(warning);
    });
    return () => {
      mounted = false;
    };
  }, []);

  const memories = useMemo(() => [...localMemories, ...seedMemories], [localMemories]);
  const selectedMemories = memories.filter((memory) => memory.countryId === selectedCountry);
  const countriesWithMemories = new Set(memories.map((memory) => memory.countryId));
  const selected = countryById[selectedCountry];

  async function handleCreateMemory(draft: DraftMemory) {
    const { memory, warning } = await saveDraftMemory(draft);
    setLocalMemories((current) => [memory, ...current]);
    setSelectedCountry(memory.countryId);
    setStorageWarning(warning);
  }

  return (
    <main className="min-h-[100dvh] overflow-hidden px-4 py-4 text-[#292521] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100dvh-2rem)] max-w-[1480px] flex-col gap-4 lg:grid lg:grid-cols-[minmax(0,1fr)_420px]">
        <section className="relative min-h-[56dvh] overflow-hidden rounded-[32px] border border-[#eadfd2] bg-[#fffdf9] shadow-[0_20px_70px_rgba(78,60,38,0.10)] lg:min-h-[calc(100dvh-2rem)]">
          <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between gap-4 p-4 sm:p-5">
            <div>
              <p className="text-sm font-semibold text-[#e60023]">TripCanvas</p>
              <h1 className="mt-1 text-2xl font-extrabold tracking-[-0.02em] text-[#292521] sm:text-4xl">
                지도 위에 남기는 여행 기억
              </h1>
              <p className="mt-2 max-w-[34rem] text-sm leading-6 text-[#6e6259] sm:text-base">
                나라를 고르면 사진 보드가 바로 열리고, 내 사진은 이 브라우저에만 조용히 저장돼요.
              </p>
            </div>
            <div className="hidden rounded-full border border-[#eadfd2] bg-white/86 px-4 py-2 text-sm font-semibold text-[#51463d] shadow-sm backdrop-blur md:flex md:items-center md:gap-2">
              <IconMapPin size={18} stroke={1.8} />
              {selected.nameKo}
            </div>
          </div>

          <WorldMap
            selectedCountry={selectedCountry}
            countriesWithMemories={countriesWithMemories}
            onSelectCountry={setSelectedCountry}
          />

          {storageWarning ? (
            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-[#eadfd2] bg-white/92 px-4 py-3 text-sm font-medium text-[#6e6259] shadow-sm backdrop-blur md:left-auto md:right-5 md:max-w-sm">
              {storageWarning}
            </div>
          ) : null}
        </section>

        <CountryDetailPanel
          country={selected}
          countries={countries}
          memories={selectedMemories}
          onCountryChange={setSelectedCountry}
          onCreateMemory={handleCreateMemory}
          onOpenMemory={setLightboxMemory}
        />
      </div>

      <AnimatePresence>
        {lightboxMemory ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#292521]/72 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute right-4 top-4 rounded-full bg-white p-3 text-[#292521] shadow-lg transition hover:scale-[1.02] active:scale-[0.98]"
              type="button"
              onClick={() => setLightboxMemory(null)}
              aria-label="사진 보기 닫기"
            >
              <IconX size={20} stroke={1.8} />
            </button>
            <MemoryLightbox memory={lightboxMemory} />
          </motion.div>
        ) : null}
      </AnimatePresence>

    </main>
  );
}
