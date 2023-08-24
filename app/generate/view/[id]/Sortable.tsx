"use client";

import { useSortable } from "@dnd-kit/sortable";
import React from "react";

export default function DraggableContent({
  children,
  id,
}: {
  children: React.ReactElement;
  id: string;
}) {
  const { attributes, listeners, setNodeRef } = useSortable({
    id,
  });

  return (
    <div className="z-10" ref={setNodeRef} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
