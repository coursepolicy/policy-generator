import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { SubSection } from "./PolicyResults";

export default function SortableSubSection({
  subSection,
  handleDeleteSubSection,
  sectionId,
}: {
  sectionId: string;
  subSection: SubSection;
  handleDeleteSubSection: (
    sectionIndex: string,
    subSectionIndex: string,
  ) => void;
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
      className="z-[1] ml-[20px] flex w-[100%] justify-between border border-red-500"
      style={style}
    >
      <div {...attributes} {...listeners}>
        {subSection.subSectionTitle}
      </div>
      <div>
        <button
          onClick={() => handleDeleteSubSection(sectionId, subSection.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
