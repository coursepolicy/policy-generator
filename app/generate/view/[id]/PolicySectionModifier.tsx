import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { DragEndEvent } from "@dnd-kit/core";

import { CourseAiPolicy } from "./PolicyResults";
import Image from "next/image";

export default function SectionModifier({
  isReordering,
  changeIsReorderingState,
}: {
  handleDeleteSubSection: (
    sectionIndex: string,
    subSectionIndex: string,
  ) => void;
  handleDeleteSection: (sectionIndex: string) => void;
  handleSectionDragEvent: (event: DragEndEvent) => void;
  handleSubSectionDragEvent: (index: number, event: DragEndEvent) => void;
  surveyContents: CourseAiPolicy;
  isReordering: boolean;
  changeIsReorderingState: () => void;
}) {
  const parentRef = useRef(null);
  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current, { duration: 100 });
  }, [parentRef]);
  return (
    <div
      className="relative flex flex-col md:flex-row md:justify-end"
      ref={parentRef}
    >
      <button
        className={`inline-flex h-9 w-[150px] items-center justify-center gap-1.5 rounded-[3px] border border-indigo-900 px-3 py-1.5 ${
          isReordering ? "bg-gray-200" : "bg-white"
        } border-black px-3 py-1.5`}
        onClick={changeIsReorderingState}
      >
        <p className="text-center text-xs font-bold leading-normal text-indigo-900">
          Reorder Sections
        </p>
        <div className="text-center text-sm font-bold leading-normal text-neutral-500">
          <Image
            src={`/images/${isReordering ? "up" : "down"}-arrow.png`}
            width={17}
            height={24}
            alt="down arrow image"
          />
        </div>
      </button>
    </div>
  );
}
