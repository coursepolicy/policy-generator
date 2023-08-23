"use client";
import { DndContext, DragEndEvent, useDroppable } from "@dnd-kit/core";
import DraggableContent from "./DraggableContent";
import { useEffect, useState } from "react";

export default function DraggableArea({ response }: { response: any }) {
  const [isDropped, setIsDropped] = useState(false);
  const { isOver, setNodeRef } = useDroppable({ id: "droppable" });
  const style = {
    color: isOver ? "green" : undefined,
  };

  const handleDragEnd = ({ over }: DragEndEvent) => {
    console.log({ over, hello: "world" });
    if (!over) {
      return;
    }

    if (over && over.id === "droppable") {
      setIsDropped(true);
    }
  };

  useEffect(() => {
    console.log({ isOver });
  }, [isOver]);
  return (
    <DndContext onDragEnd={handleDragEnd}>
      {!isDropped ? (
        <DraggableContent id="draggable">Introduction</DraggableContent>
      ) : null}
      <div className="border border-red-500" ref={setNodeRef}>
        {isDropped ? (
          <DraggableContent id="draggable">Introduction</DraggableContent>
        ) : (
          "Drop Here"
        )}
        <div>Course Description</div>
        <div>
          <h2>Generative AI Policy</h2>

          {response.useCases && <div id="2">Use Cases</div>}
          {response.specificPoliciesForAssignments && (
            <div id="3">Assignment Specific AI Policies</div>
          )}
          {response.ethicalGuidelines && <div id="4">Ethical Guidelines</div>}
          {response.generativeAiToolDeclarations && (
            <div id="5">Declaration</div>
          )}
          <div id="6">Additional Notes</div>
        </div>
        <div>Additional Policies</div>
      </div>
    </DndContext>
  );
}
