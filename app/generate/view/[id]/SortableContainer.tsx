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
import { CourseAiPolicy } from "./PolicyResults";
import React from "react";

export default function Droppable({
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
  handleSectionDragEvent: (e: DragEndEvent) => void;
  handleSubSectionDragEvent: (index: number, e: DragEndEvent) => void;
  surveyContents: CourseAiPolicy;
}) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <div className="rounded-[10px absolute top-[40px] z-[1] w-[387px] bg-zinc-100 shadow">
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
            <div className="pb-[40px] pl-[18px] pr-[15px] pt-[13px]">
              <p className="text-sm font-normal leading-normal text-zinc-500">
                Drag to rorder sections and subsections
              </p>
              <div className="mt-[12px]">
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
  );
}
