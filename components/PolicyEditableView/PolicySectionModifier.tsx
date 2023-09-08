import React from "react";

import { DragEndEvent } from "@dnd-kit/core";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import arrow from "@/public/images/arrow.svg";
import { type PolicySections } from "@/lib";

export default function SectionModifier({
  isReordering,
  changeIsReorderingState,
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
  changeIsReorderingState: () => void;
}) {
  return (
    <div className="relative flex flex-col md:flex-row md:justify-end">
      <Button
        variant={"outline"}
        className={`inline-flex h-9 w-[150px] items-center justify-center gap-1.5 rounded-[3px] border border-[#364071] px-3 py-1.5 ${
          isReordering ? "bg-gray-200" : "bg-white"
        } border-[#364071] px-3 py-1.5`}
        aria-expanded={isReordering}
        aria-controls="reorder-sections"
        onClick={changeIsReorderingState}
      >
        <p className="text-center text-xs font-bold leading-normal text-[#364071]">
          Reorder Sections
        </p>
        <div className="text-center text-sm font-bold leading-normal text-neutral-500">
          {isReordering ? (
            <Image src={arrow} alt="up arrow image" className=" rotate-180" />
          ) : (
            <Image src={arrow} alt="down arrow image" className="" />
          )}
        </div>
      </Button>
    </div>
  );
}
