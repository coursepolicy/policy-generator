"use client";

import Image from "next/image";
import {
  DndContext,
  DragOverlay,
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
import React from "react";
import useWindowSize from "../../../_utils/useWindowSize";

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
  const { width } = useWindowSize();
  const isWayTooSmall = width < 450;
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

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (!isConfirmed) return;

    handleDeleteSection(section.id);
  };

  return (
    <section
      ref={sectionSortRef}
      style={style}
      className="relative z-[1] flex justify-between"
    >
      <div className="flex">
        <div className="mt-[10px]">
          <p className="text-sm font-normal leading-normal text-neutral-500">
            {sectionIndex}.
          </p>
        </div>
        <div>
          <div
            {...attributes}
            {...listeners}
            className={`${
              !isWayTooSmall ? "w-[290px]" : "w-[190px]"
            } mb-[8px] ${
              !isWayTooSmall ? "ml-[18px]" : "ml-[5px]"
            } flex h-11 items-center border border-neutral-200 bg-white`}
          >
            <div className="relative h-11 w-3">
              <div className="absolute left-0 top-0 h-11 w-3 bg-zinc-300" />
              <div className="absolute left-[5px] top-[21px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
              <div className="absolute left-[5px] top-[17px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
              <div className="absolute left-[5px] top-[25px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
            </div>
            <p
              className={`text-sm font-${
                sectionIndex === 0 ? "normal" : "bold"
              } pl-[12px] leading-normal text-black`}
            >
              {section.sectionTitle}
            </p>
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
                  sectionIndex={sectionIndex}
                  subSectionIndex={index}
                  handleDeleteSubSection={handleDeleteSubSection}
                />
              ))}
            </SortableContext>
            <DragOverlay></DragOverlay>
          </DndContext>
        </div>
      </div>
      <div
        className={`absolute ${
          !isWayTooSmall ? "right-0" : "right-[8px]"
        } mt-[10px]`}
      >
        <button onClick={handleDelete}>
          <Image
            src="/images/trash.png"
            width={20}
            height={24}
            alt="trash can image"
          />
        </button>
      </div>
    </section>
  );
}
