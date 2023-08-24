"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SubSection } from "./PolicyResults";

export default function SortableSubSection({
  subSection,
}: {
  subSection: SubSection;
}) {
  const { attributes, listeners, transform, transition, setNodeRef } =
    useSortable({
      id: subSection.id,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      className="z-10 ml-[20px]"
      {...attributes}
      {...listeners}
      style={style}
    >
      {subSection.subSectionTitle}
    </div>
  );
}
