"use client";

import { openDB, type DBSchema } from "idb";
import type { CountryId } from "@/data/countries";
import type { Memory } from "@/data/seedMemories";

const DB_NAME = "tripcanvas-local";
const DB_VERSION = 1;
const STORE_NAME = "memories";
const LOCAL_STORAGE_KEY = "tripcanvas:memories";

export type DraftMemory = {
  countryId: CountryId;
  title: string;
  date: string;
  note: string;
  tags: string[];
  imageFile: File;
};

type StoredMemory = Memory;

interface TripCanvasDb extends DBSchema {
  memories: {
    key: string;
    value: StoredMemory;
    indexes: {
      "by-country": CountryId;
    };
  };
}

async function getDb() {
  if (!("indexedDB" in window)) {
    throw new Error("IndexedDB unavailable");
  }

  return openDB<TripCanvasDb>(DB_NAME, DB_VERSION, {
    upgrade(db) {
      const store = db.createObjectStore(STORE_NAME, { keyPath: "id" });
      store.createIndex("by-country", "countryId");
    }
  });
}

function readLocalStorage(): StoredMemory[] {
  try {
    const raw = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StoredMemory[]) : [];
  } catch {
    return [];
  }
}

function writeLocalStorage(memories: StoredMemory[]) {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memories));
}

function fileToDataUrl(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("파일을 읽지 못했습니다."));
    reader.readAsDataURL(file);
  });
}

export async function loadLocalMemories(): Promise<{ memories: StoredMemory[]; warning?: string }> {
  try {
    const db = await getDb();
    return { memories: await db.getAll(STORE_NAME) };
  } catch {
    return {
      memories: readLocalStorage(),
      warning: "브라우저 저장소 일부를 사용할 수 없어 가벼운 저장 방식으로 전환했어요."
    };
  }
}

export async function saveDraftMemory(draft: DraftMemory): Promise<{ memory: StoredMemory; warning?: string }> {
  const imageUrl = await fileToDataUrl(draft.imageFile);
  const memory: StoredMemory = {
    id: `local-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    countryId: draft.countryId,
    title: draft.title.trim(),
    date: draft.date,
    note: draft.note.trim(),
    tags: draft.tags,
    imageUrl,
    source: "local"
  };

  try {
    const db = await getDb();
    await db.put(STORE_NAME, memory);
    return { memory };
  } catch {
    const next = [memory, ...readLocalStorage()];
    writeLocalStorage(next);
    return {
      memory,
      warning: "IndexedDB 저장에 실패해 localStorage에 저장했어요. 같은 브라우저에서는 계속 볼 수 있어요."
    };
  }
}
