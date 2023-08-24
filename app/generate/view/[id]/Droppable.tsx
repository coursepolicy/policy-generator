"use client";
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
        <div className="rounded-[10px absolute z-[1] h-[497px] w-[387px] bg-zinc-100 shadow">
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
      </SortableContext>
    </DndContext>
  );
}
