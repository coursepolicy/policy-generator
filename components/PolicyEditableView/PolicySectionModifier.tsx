import React from "react";

import { DragEndEvent } from "@dnd-kit/core";
import { type PolicySections } from "@/lib";
import {
  DropdownMenuTrigger,
  DropdownMenu,
  DropdownMenuContent,
} from "../ui/dropdown-menu";
import { SortableContainer } from "../Sortable";

export default function SectionModifier({
  isReordering,
  changeIsReorderingState,
  surveyContents,
  handleSectionDragEvent,
  handleSubSectionDragEvent,
  handleDeleteSection,
  handleDeleteSubSection,
}: {
  handleDeleteSubSection: (
    sectionId: string,
    subSectionId: string,
    sectionIndex: number,
  ) => void;
  handleDeleteSection: (sectionIndex: string) => void;
  handleSectionDragEvent: (event: DragEndEvent) => void;
  handleSubSectionDragEvent: (index: number, event: DragEndEvent) => void;
  surveyContents: PolicySections;
  isReordering: boolean;
  changeIsReorderingState: (bool: boolean) => void;
}) {
  return (
    <div className="relative flex flex-col md:flex-row md:justify-end">
      <DropdownMenu>
        <DropdownMenuTrigger
          className={`inline-flex h-9 w-[161px] items-center justify-center gap-1.5 rounded-[3px] border border-[#364071] px-3 py-1.5 ${
            isReordering ? "bg-gray-200" : "bg-white"
          } border-[#364071] px-3 py-1.5 hover:bg-accent`}
          aria-expanded={isReordering}
          aria-controls="reorder-sections"
          onClick={() => {
            changeIsReorderingState(!isReordering);
          }}
        >
          <p className="pl-[5px] text-center text-xs font-bold leading-normal text-[#364071]">
            Reorder Sections
          </p>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <SortableContainer
            surveyContents={surveyContents}
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
