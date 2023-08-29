import React from "react";

import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import SortableSection from "./SortableSection";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CourseAiPolicy } from "@/app/_utils/";

interface Props {
  handleDeleteSubSection: (
    sectionIndex: string,
    subSectionIndex: string,
  ) => void;
  handleDeleteSection: (sectionIndex: string) => void;
  handleSectionDragEvent: (e: DragEndEvent) => void;
  handleSubSectionDragEvent: (index: number, e: DragEndEvent) => void;
  surveyContents: CourseAiPolicy;
}

export default function Droppable({
  surveyContents,
  handleSectionDragEvent,
  handleSubSectionDragEvent,
  handleDeleteSubSection,
  handleDeleteSection,
}: Props) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <div className="bg-zinc-100 shadow sm:w-[387px] md:absolute md:right-0 md:top-[40px]">
      <DndContext
        onDragEnd={handleSectionDragEvent}
        sensors={sensors}
        collisionDetection={closestCenter}
      >
        <SortableContext
          id="modify-sections"
          items={surveyContents}
          strategy={verticalListSortingStrategy}
        >
          <div className="h-[100%]">
            <div className="pb-[10px] pl-[5px] pr-[5px] pt-[10px] sm:pb-[40px] sm:pl-[18px] sm:pr-[15px] sm:pt-[13px]">
              <p className="text-sm font-normal leading-normal text-zinc-500">
                <i>Drag to reorder sections and subsections</i>
              </p>
              <div className="mt-[10px]">
                {surveyContents.map((section, index) => (
                  <SortableSection
                    section={section}
                    key={section.id}
                    handleSubSectionDragEvent={handleSubSectionDragEvent}
                    sectionIndex={index}
                    handleDeleteSection={handleDeleteSection}
                    handleDeleteSubSection={handleDeleteSubSection}
                  />
                ))}
              </div>
            </div>
          </div>
        </SortableContext>
      </DndContext>
    </div>
    // </div>
  );
}
