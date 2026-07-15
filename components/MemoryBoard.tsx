"use client";

import Image from "next/image";
import { IconPhotoPlus } from "@tabler/icons-react";
import type { Memory } from "@/data/seedMemories";

type MemoryBoardProps = {
  memories: Memory[];
  countryName: string;
  onOpenMemory: (memory: Memory) => void;
};

export function MemoryBoard({ memories, countryName, onOpenMemory }: MemoryBoardProps) {
  if (memories.length === 0) {
    return (
      <div className="flex min-h-64 flex-col items-center justify-center rounded-3xl border border-dashed border-[#d8cabb] bg-[#fffdf9] px-6 py-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e60023]/10 text-[#e60023]">
          <IconPhotoPlus size={24} stroke={1.8} />
        </div>
        <h3 className="mt-4 text-lg font-extrabold">{countryName}의 첫 기억을 남겨보세요</h3>
        <p className="mt-2 text-sm leading-6 text-[#6e6259]">
          아직 저장된 사진이 없어요. 아래의 사진 추가 버튼으로 이 나라의 첫 장면을 만들 수 있어요.
        </p>
      </div>
    );
  }

  return (
    <div className="masonry">
      {memories.map((memory) => (
        <button
          key={memory.id}
          type="button"
          className="group w-full overflow-hidden rounded-2xl bg-[#fffdf9] text-left shadow-sm ring-1 ring-[#eadfd2] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(78,60,38,0.14)] focus:outline-none focus:ring-4 focus:ring-[#e60023]/18 active:translate-y-[1px]"
          onClick={() => onOpenMemory(memory)}
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#efe5d8]">
            <Image
              src={memory.imageUrl}
              alt={`${memory.title} 사진`}
              fill
              sizes="(min-width: 1024px) 360px, 50vw"
              className="object-cover transition duration-300 group-hover:scale-[1.03]"
              unoptimized={memory.source === "local"}
            />
          </div>
          <div className="p-3">
            <h3 className="text-[15px] font-extrabold leading-5 text-[#292521]">{memory.title}</h3>
            <p className="mt-1 text-xs font-semibold text-[#8d7e70]">{memory.date}</p>
            <p className="mt-2 line-clamp-2 text-sm leading-5 text-[#6e6259]">{memory.note}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {memory.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="rounded-full bg-[#f3ebe0] px-2 py-1 text-xs font-semibold text-[#6e6259]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </button>
      ))}
    </div>
  );
}
