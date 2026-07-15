"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Memory } from "@/data/seedMemories";

export function MemoryLightbox({ memory }: { memory: Memory }) {
  return (
    <motion.article
      className="grid max-h-[88dvh] w-full max-w-5xl overflow-hidden rounded-[32px] bg-white shadow-[0_26px_90px_rgba(0,0,0,0.32)] md:grid-cols-[minmax(0,1.15fr)_360px]"
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 24, scale: 0.98 }}
      transition={{ duration: 0.24 }}
    >
      <div className="relative min-h-[52dvh] bg-[#efe5d8] md:min-h-[78dvh]">
        <Image
          src={memory.imageUrl}
          alt={`${memory.title} 크게 보기`}
          fill
          sizes="(min-width: 768px) 64vw, 100vw"
          className="object-cover"
          unoptimized={memory.source === "local"}
        />
      </div>
      <div className="flex flex-col justify-end p-6">
        <p className="text-sm font-bold text-[#e60023]">{memory.date}</p>
        <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.02em] text-[#292521]">{memory.title}</h2>
        <p className="mt-4 text-base leading-7 text-[#6e6259]">{memory.note}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {memory.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-[#f3ebe0] px-3 py-1.5 text-sm font-bold text-[#6e6259]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
