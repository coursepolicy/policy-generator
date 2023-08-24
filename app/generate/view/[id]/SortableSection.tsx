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
import { CSS } from "@dnd-kit/utilities";

import SortableSubSection from "./SortableSubSection";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { Section } from "./PolicyResults";

export default function SortableSection({
  section,
  handleSubSectionDragEvent,
  sectionIndex,
  handleDeleteSubSection,
  handleDeleteSection,
}: {
  handleDeleteSubSection: (
    sectionIndex: string,
    subSectionIndex: string,
  ) => void;
  handleDeleteSection: (sectionIndex: string) => void;
  sectionIndex: number;
  handleSubSectionDragEvent: (index: number, e: DragEndEvent) => void;
  section: Section;
}) {
  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef: sectionSortRef,
  } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <section
      ref={sectionSortRef}
      style={style}
      className="flex justify-between border border-red-500"
    >
      <div>
        <div {...attributes} {...listeners}>
          {section.sectionTitle}
        </div>
        <DndContext
          onDragEnd={(e) => handleSubSectionDragEvent(sectionIndex, e)}
          sensors={sensors}
          collisionDetection={closestCenter}
        >
          <SortableContext
            id="modify-sub-sections"
            items={section.subSections}
            strategy={verticalListSortingStrategy}
          >
            {section.subSections.map((subSection, index) => (
              <SortableSubSection
                subSection={subSection}
                key={subSection.id}
                sectionId={section.id}
                handleDeleteSubSection={handleDeleteSubSection}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
      <div>
        <button onClick={() => handleDeleteSection(section.id)}>Delete</button>
      </div>
    </section>
  );
}
