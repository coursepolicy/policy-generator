"use client";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export default function SortableItem({
  id,
  item,
}: {
  id: number;
  item: number;
}) {
  const {
    attributes,
    listeners,
    transform,
    transition,
    setNodeRef: sortableRef,
  } = useSortable({
    id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={sortableRef}
      {...attributes}
      {...listeners}
      style={style}
      className="cursor-pointer border border-red-500 pb-[50px] pl-[100px] pr-[100px] pt-[50px]"
      key={item}
    >
      <p>{item}</p>
    </div>
  );
}
