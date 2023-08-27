"use client";

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
import { CourseAiPolicy } from "./PolicyResults";
import useWindowSize from "../../../_utils/useWindowSize";

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
  const { width } = useWindowSize();
  const isWayTooSmall = width < 450;
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  return (
    <div
      className={`z-[1] ${
        !isWayTooSmall ? " w-[387px]" : "w-[250px]"
      } bg-zinc-100 shadow md:absolute md:right-[0] md:top-[40px] md:rounded-[10px]`}
    >
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
            <div
              className={`${
                !isWayTooSmall
                  ? "pb-[40px] pl-[18px] pr-[15px] pt-[13px]"
                  : "pb-[10px] pl-[3px] pr-[3px] pt-[3px]"
              }`}
            >
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
