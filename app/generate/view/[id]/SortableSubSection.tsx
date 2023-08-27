import React from "react";
import Image from "next/image";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SubSection } from "./PolicyResults";

export default function SortableSubSection({
  subSection,
  handleDeleteSubSection,
  sectionId,
  subSectionIndex,
  sectionIndex,
}: {
  sectionId: string;
  subSection: SubSection;
  handleDeleteSubSection: (
    sectionIndex: string,
    subSectionIndex: string,
  ) => void;
  subSectionIndex: number;
  sectionIndex: number;
}) {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({
      id: subSection.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    // transition,
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (!isConfirmed) return;
    if (!sectionId) return;

    handleDeleteSubSection(sectionId, subSection.id);
  };

  return (
    <div
      ref={setNodeRef}
      className="relative z-[1] ml-[5px] flex justify-between sm:ml-[20px]"
      style={style}
    >
      <div className="flex">
        <div className="mt-[10px] text-sm font-normal leading-normal text-neutral-500">
          <p>{formatSubArrayIndex(sectionIndex, subSectionIndex)}.</p>
        </div>
        <div
          {...attributes}
          {...listeners}
          className="mb-[5px] ml-[5px] flex h-11  w-[175px] items-center border border-neutral-200 bg-white sm:w-[263px]"
        >
          <div className="relative h-11 w-3">
            <div className="absolute left-0 top-0 h-11 w-3 bg-zinc-300" />
            <div className="absolute left-[5px] top-[21px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
            <div className="absolute left-[5px] top-[17px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
            <div className="absolute left-[5px] top-[25px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
          </div>
          <p className="pl-[12px] text-xs font-normal leading-normal text-black">
            {subSection.subSectionTitle}
          </p>
        </div>
      </div>
      <div>
        <button
          className="absolute right-[-17%] mt-[10px] sm:right-[-12%]"
          onClick={handleDelete}
        >
          <Image
            src="/images/trash.png"
            width={20}
            height={24}
            alt="trash can image"
          />
        </button>
      </div>
    </div>
  );
}

function formatSubArrayIndex(outerIndex: number, innerIndex: number) {
  // Getting the letter part by mapping 0 -> a, 1 -> b, etc.
  let letterPart = String.fromCharCode(97 + innerIndex);

  return `${outerIndex}${letterPart}`;
}
