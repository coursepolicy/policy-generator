import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import { DragEndEvent } from "@dnd-kit/core";

import SortableContainer from "./SortableContainer";
import { CourseAiPolicy } from "./PolicyResults";

export default function SectionModifier({
  surveyContents,
  handleSectionDragEvent,
  handleSubSectionDragEvent,
  handleDeleteSubSection,
  handleDeleteSection,
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
    <div className="relative flex justify-end" ref={parentRef}>
      <div
        className={`inline-flex h-9 w-[140px] cursor-pointer items-center justify-center gap-1.5 border ${
          isReordering ? "bg-gray-200" : "bg-white"
        } border-black px-3 py-1.5`}
        onClick={changeIsReorderingState}
      >
        <div className="text-center text-xs font-bold leading-normal text-black">
          Modify Sections
        </div>
        <div className="text-center text-sm font-bold leading-normal text-neutral-500">
          􀆈
        </div>
      </div>
      {isReordering && (
        <SortableContainer
          surveyContents={surveyContents}
          handleSectionDragEvent={handleSectionDragEvent}
          handleSubSectionDragEvent={handleSubSectionDragEvent}
          handleDeleteSection={handleDeleteSection}
          handleDeleteSubSection={handleDeleteSubSection}
        />
      )}
    </div>
  );
}
