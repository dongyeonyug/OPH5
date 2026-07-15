"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconChevronDown, IconPhotoPlus } from "@tabler/icons-react";
import type { Country, CountryId } from "@/data/countries";
import type { Memory } from "@/data/seedMemories";
import type { DraftMemory } from "@/lib/storage";
import { MemoryBoard } from "./MemoryBoard";
import { MemoryForm } from "./MemoryForm";

type CountryDetailPanelProps = {
  country: Country;
  countries: Country[];
  memories: Memory[];
  onCountryChange: (countryId: CountryId) => void;
  onCreateMemory: (draft: DraftMemory) => Promise<void>;
  onOpenMemory: (memory: Memory) => void;
};

export function CountryDetailPanel({
  country,
  countries,
  memories,
  onCountryChange,
  onCreateMemory,
  onOpenMemory
}: CountryDetailPanelProps) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const sortedMemories = useMemo(() => [...memories].sort((a, b) => b.date.localeCompare(a.date)), [memories]);

  async function handleCreateMemory(draft: DraftMemory) {
    setIsSaving(true);
    await onCreateMemory(draft);
    setIsSaving(false);
    setIsFormOpen(false);
  }

  return (
    <aside className="relative z-20 -mt-24 flex max-h-[72dvh] flex-col overflow-hidden rounded-[32px] border border-[#eadfd2] bg-white shadow-[0_20px_70px_rgba(78,60,38,0.14)] lg:mt-0 lg:max-h-[calc(100dvh-2rem)]">
      <div className="border-b border-[#eadfd2] px-5 py-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#e60023]">{country.nameEn}</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-[-0.02em]">{country.nameKo}</h2>
            <p className="mt-2 text-sm leading-6 text-[#6e6259]">{country.summary}</p>
          </div>
          <label className="relative shrink-0">
            <span className="sr-only">나라 선택</span>
            <select
              className="appearance-none rounded-full border border-[#eadfd2] bg-[#fffdf9] py-2 pl-4 pr-9 text-sm font-bold text-[#292521] outline-none transition focus:border-[#e60023] focus:ring-4 focus:ring-[#e60023]/10"
              value={country.id}
              onChange={(event) => {
                setIsFormOpen(false);
                onCountryChange(event.target.value as CountryId);
              }}
            >
              {countries.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nameKo}
                </option>
              ))}
            </select>
            <IconChevronDown
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#6e6259]"
              size={17}
              stroke={1.8}
            />
          </label>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-[#6e6259]">
            사진 {sortedMemories.length}장
          </p>
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-[#e60023] px-4 py-2 text-sm font-bold text-white shadow-[0_12px_26px_rgba(230,0,35,0.22)] transition hover:translate-y-[-1px] active:translate-y-[1px]"
            onClick={() => setIsFormOpen((current) => !current)}
          >
            <IconPhotoPlus size={18} stroke={1.8} />
            사진 추가
          </button>
        </div>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-4 py-4">
        <MemoryBoard memories={sortedMemories} countryName={country.nameKo} onOpenMemory={onOpenMemory} />

        <AnimatePresence initial={false}>
          {isFormOpen ? (
            <motion.div
              className="mt-4 rounded-3xl border border-[#eadfd2] bg-[#fffaf3] p-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.22 }}
            >
              <MemoryForm countryId={country.id} isSaving={isSaving} onSubmit={handleCreateMemory} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </aside>
  );
}
