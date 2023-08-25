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
  return (
    <div
      ref={setNodeRef}
      className="z-[1] ml-[20px] flex w-[100%] items-baseline justify-between"
      style={style}
    >
      <div className="text-sm font-normal leading-normal text-neutral-500">
        <p>{formatSubArrayIndex(sectionIndex, subSectionIndex)}.</p>
      </div>
      <div
        {...attributes}
        {...listeners}
        className="mb-[8px] flex h-11 w-[258px] items-center  border border-neutral-200 bg-white"
      >
        <p className="pl-[12px] text-xs font-normal leading-normal text-black ">
          {subSection.subSectionTitle}
        </p>
      </div>
      <div>
        <button
          onClick={() => handleDeleteSubSection(sectionId, subSection.id)}
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
