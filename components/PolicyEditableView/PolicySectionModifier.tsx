import React from "react";

import { DragEndEvent } from "@dnd-kit/core";
import { type PolicySections } from "@/lib";
import { SortableContainer } from "../Sortable";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";

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
      <Popover>
        <PopoverTrigger
          className={`inline-flex h-9 w-[161px] items-center justify-center gap-1.5 rounded-[3px] border border-[#364071] px-3 py-1.5 ${
            isReordering ? "bg-gray-200" : "bg-white"
          } border-[#364071] px-3 py-1.5 transition-all hover:bg-accent [&[data-state=open]>svg]:rotate-180`}
          aria-expanded={isReordering}
          aria-controls="reorder-sections"
          asChild
          onClick={() => {
            changeIsReorderingState(!isReordering);
          }}
        >
          <Button className="text-center text-xs font-bold leading-normal text-[#364071]">
            Reorder Sections{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#606DAB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-chevron-down transition-transform duration-200"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          sticky="always"
          className="z-[20] flex h-[calc(100vh_-_255px)] w-[320px] justify-center overflow-auto overflow-x-hidden bg-zinc-100
          p-0 shadow sm:m-0 sm:h-[450px] sm:w-[451px] sm:max-w-[100%] md:m-0"
        >
          <SortableContainer
            surveyContents={surveyContents}
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
