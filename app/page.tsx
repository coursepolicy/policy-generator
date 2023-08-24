"use client";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { useState } from "react";
import SortableItem from "./SortableItem";

export default function Home() {
  const { setNodeRef: droppableRef } = useDroppable({ id: "droppable" });

  const [list, setList] = useState([1, 2, 3]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={(e) => console.log("hello")}
      onDragMove={(e) => console.log("world")}
    >
      <SortableContext
        id="123"
        items={list}
        strategy={verticalListSortingStrategy}
      >
        <main ref={droppableRef}>
          {list.map((item) => (
            <SortableItem item={item} id={item} key={item} />
          ))}
        </main>
      </SortableContext>
    </DndContext>
  );
}
