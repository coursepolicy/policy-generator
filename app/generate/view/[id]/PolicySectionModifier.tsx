import SortableContainer from "./SortableContainer";
import { DragEndEvent } from "@dnd-kit/core";
import { CourseAiPolicy } from "./PolicyResults";
import React from "react";

export default function SectionModifier({
  surveyContents,
  handleSectionDragEvent,
  handleSubSectionDragEvent,
  handleDeleteSubSection,
  handleDeleteSection,
}: {
  handleDeleteSubSection: (
    sectionIndex: string,
    subSectionIndex: string,
  ) => void;
  handleDeleteSection: (sectionIndex: string) => void;
  handleSectionDragEvent: (event: DragEndEvent) => void;
  handleSubSectionDragEvent: (index: number, event: DragEndEvent) => void;
  surveyContents: CourseAiPolicy;
}) {
  return (
    // <div className="inline-flex h-9 w-[140px] items-center justify-center gap-1.5 border border-black bg-gray-200 px-3 py-1.5">
    //   <div className="text-center text-xs font-bold leading-normal text-black">
    //     Modify Sections
    //   </div>
    //   <div className="text-center text-sm font-bold leading-normal text-neutral-500">
    //     􀆇
    //   </div>
    // </div>
    <div className="relative">
      <div className="inline-flex h-9 w-[140px] cursor-pointer items-center justify-center gap-1.5 border border-black px-3 py-1.5">
        <div className="text-center text-xs font-bold leading-normal text-black">
          Modify Sections
        </div>
        <div className="text-center text-sm font-bold leading-normal text-neutral-500">
          􀆈
        </div>
      </div>
      <SortableContainer
        surveyContents={surveyContents}
        handleSectionDragEvent={handleSectionDragEvent}
        handleSubSectionDragEvent={handleSubSectionDragEvent}
        handleDeleteSection={handleDeleteSection}
        handleDeleteSubSection={handleDeleteSubSection}
      />
    </div>
  );
}
