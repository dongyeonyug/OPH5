"use client";

import { FormEvent, useMemo, useState } from "react";
import Image from "next/image";
import { IconAlertCircle, IconPhotoPlus } from "@tabler/icons-react";
import type { CountryId } from "@/data/countries";
import type { DraftMemory } from "@/lib/storage";

const maxImageSize = 5 * 1024 * 1024;

type MemoryFormProps = {
  countryId: CountryId;
  isSaving: boolean;
  onSubmit: (draft: DraftMemory) => Promise<void>;
};

type FormError = Partial<Record<"title" | "date" | "note" | "image", string>>;

export function MemoryForm({ countryId, isSaving, onSubmit }: MemoryFormProps) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [note, setNote] = useState("");
  const [tags, setTags] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<FormError>({});

  const tagList = useMemo(
    () =>
      tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
        .slice(0, 5),
    [tags]
  );

  function validate() {
    const nextErrors: FormError = {};
    if (!title.trim()) nextErrors.title = "제목을 입력해 주세요.";
    if (!date) nextErrors.date = "날짜를 선택해 주세요.";
    if (!note.trim()) nextErrors.note = "짧은 메모를 입력해 주세요.";
    if (!imageFile) nextErrors.image = "사진 파일을 선택해 주세요.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleImage(file: File | undefined) {
    setErrors((current) => ({ ...current, image: undefined }));

    if (!file) {
      setImageFile(null);
      setImagePreview(null);
      return;
    }

    if (!file.type.startsWith("image/")) {
      setImageFile(null);
      setImagePreview(null);
      setErrors((current) => ({ ...current, image: "이미지 파일만 선택할 수 있어요." }));
      return;
    }

    if (file.size > maxImageSize) {
      setImageFile(null);
      setImagePreview(null);
      setErrors((current) => ({ ...current, image: "5MB 이하의 사진을 선택해 주세요." }));
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate() || !imageFile) return;

    await onSubmit({
      countryId,
      title,
      date,
      note,
      tags: tagList.length > 0 ? tagList : ["기록"],
      imageFile
    });

    setTitle("");
    setDate("");
    setNote("");
    setTags("");
    setImageFile(null);
    setImagePreview(null);
    setErrors({});
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <div>
        <h3 className="text-lg font-extrabold">새 여행 기억</h3>
        <p className="mt-1 text-sm leading-6 text-[#6e6259]">
          사진은 서버로 올라가지 않고 이 브라우저에 저장돼요.
        </p>
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold" htmlFor="memory-form-title">
          제목
        </label>
        <input
          id="memory-form-title"
          className="rounded-2xl border border-[#d8cabb] bg-white px-4 py-3 text-sm text-[#292521] outline-none transition placeholder:text-[#9c8e80] focus:border-[#e60023] focus:ring-4 focus:ring-[#e60023]/10"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="예: 비 오는 골목 산책"
        />
        <FieldError message={errors.title} />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold" htmlFor="memory-form-date">
          날짜
        </label>
        <input
          id="memory-form-date"
          className="rounded-2xl border border-[#d8cabb] bg-white px-4 py-3 text-sm text-[#292521] outline-none transition focus:border-[#e60023] focus:ring-4 focus:ring-[#e60023]/10"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <FieldError message={errors.date} />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold" htmlFor="memory-form-photo">
          사진 파일
        </label>
        <label className="flex min-h-32 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-[#cdbfaf] bg-white text-center transition hover:border-[#e60023]">
          {imagePreview ? (
            <span className="relative block aspect-[4/3] w-full">
              <Image src={imagePreview} alt="선택한 사진 미리보기" fill className="object-cover" unoptimized />
            </span>
          ) : (
            <span className="flex flex-col items-center px-4 py-6 text-sm font-semibold text-[#6e6259]">
              <IconPhotoPlus className="mb-2 text-[#e60023]" size={26} stroke={1.8} />
              내 기기에서 사진 선택
            </span>
          )}
          <input
            id="memory-form-photo"
            className="sr-only"
            type="file"
            accept="image/*"
            onChange={(event) => handleImage(event.target.files?.[0])}
          />
        </label>
        <FieldError message={errors.image} />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold" htmlFor="memory-form-note">
          메모
        </label>
        <textarea
          id="memory-form-note"
          className="min-h-24 resize-none rounded-2xl border border-[#d8cabb] bg-white px-4 py-3 text-sm leading-6 text-[#292521] outline-none transition placeholder:text-[#9c8e80] focus:border-[#e60023] focus:ring-4 focus:ring-[#e60023]/10"
          value={note}
          onChange={(event) => setNote(event.target.value)}
          placeholder="그날의 온도, 소리, 같이 있던 사람을 짧게 남겨보세요."
        />
        <FieldError message={errors.note} />
      </div>

      <div className="grid gap-2">
        <label className="text-sm font-bold" htmlFor="memory-form-tags">
          태그
        </label>
        <input
          id="memory-form-tags"
          className="rounded-2xl border border-[#d8cabb] bg-white px-4 py-3 text-sm text-[#292521] outline-none transition placeholder:text-[#9c8e80] focus:border-[#e60023] focus:ring-4 focus:ring-[#e60023]/10"
          value={tags}
          onChange={(event) => setTags(event.target.value)}
          placeholder="바다, 밤, 산책"
        />
        <p className="text-xs font-medium text-[#7e7063]">쉼표로 나누면 최대 5개까지 저장돼요.</p>
      </div>

      <button
        className="rounded-full bg-[#e60023] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_26px_rgba(230,0,35,0.22)] transition hover:translate-y-[-1px] active:translate-y-[1px] disabled:opacity-55"
        type="submit"
        disabled={isSaving}
      >
        {isSaving ? "저장 중" : "기억 저장"}
      </button>
    </form>
  );
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <p className="flex items-center gap-1.5 text-sm font-semibold text-[#b00020]">
      <IconAlertCircle size={16} stroke={1.8} />
      {message}
    </p>
  );
}
