import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";
import { SortableSection } from "./DnDKit";
import {
  AnimateLayoutChanges,
  defaultAnimateLayoutChanges,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { MeasuringStrategy } from "@dnd-kit/core";
import { PolicySections } from "../../lib";

type Props = {
  surveyContents: PolicySections;
  handleSectionDragEvent: any;
  handleSubSectionDragEvent: any;
  handleDeleteSubSection: any;
  handleDeleteSection: any;
};

export function SortableContainer({
  surveyContents,
  handleSectionDragEvent,
  handleDeleteSection,
  handleDeleteSubSection,
  handleSubSectionDragEvent,
}: Props) {
  const animateLayoutChanges: AnimateLayoutChanges = (args) => {
    return defaultAnimateLayoutChanges({ ...args, wasDragging: false });
  };
  return (
    <div className="my-[20px] flex max-h-[500px] w-[300px] justify-center self-center overflow-y-auto bg-zinc-100 shadow sm:w-[451px] sm:max-w-[100%] md:absolute md:right-0 md:top-[65px] md:m-0">
      <div className="pb-[10px] pl-[5px] pr-[5px] pt-[10px] sm:pb-[40px] sm:pl-[18px] sm:pr-[15px] sm:pt-[13px]">
        <p className="flex justify-center text-sm font-normal leading-normal text-zinc-500 sm:justify-start">
          <i>
            To reorder sections and subsections, hover over the handles on the
            left and and start dragging
          </i>
        </p>
        <div className="mt-[10px]">
          <SortableSection
            modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
            animateLayoutChanges={animateLayoutChanges}
            strategy={verticalListSortingStrategy}
            measuring={{
              droppable: { strategy: MeasuringStrategy.Always },
            }}
            removable
            items={surveyContents}
            handle
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
        </div>
      </div>
    </div>
  );
}
