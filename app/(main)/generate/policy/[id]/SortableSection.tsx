import Image from "next/image";
import {
  DndContext,
  DragOverlay,
  DragEndEvent,
  KeyboardSensor,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
  UniqueIdentifier,
  TouchSensor,
  MeasuringStrategy,
} from "@dnd-kit/core";

import SortableSubSection from "./SortableSubSection";
import {
  SortableContext,
  defaultAnimateLayoutChanges,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useEffect, useRef } from "react";
import { PolicySection } from "@/app/_utils/";
import { createPortal } from "react-dom";
import { screenReaderInstructions } from "./utilities/constants";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export default function SortableSection({
  section,
  handleSubSectionDragEvent,
  sectionIndex,
  handleDeleteSubSection,
  handleDeleteSection,
  dragOverlay,
}: {
  handleDeleteSubSection: (
    sectionId: string,
    subSectionId: string,
    sectionIndex: number,
  ) => void;
  handleDeleteSection: (sectionIndex: string) => void;
  sectionIndex: number;
  handleSubSectionDragEvent: (index: number, e: DragEndEvent) => void;
  section: PolicySection;
  dragOverlay?: boolean;
  handle?: boolean;
}) {
  const {
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
    setNodeRef: sectionSortRef,
  } = useSortable({
    id: section.id,
    animateLayoutChanges: (args) =>
      defaultAnimateLayoutChanges({ ...args, wasDragging: true }),
  });
  const draggingRef = useRef(null);

  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );
  const activeChild = section.children && section.children[Number(activeIndex)];

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (!isConfirmed) return;

    handleDeleteSection(String(section.id));
  };

  useEffect(() => {
    if (!dragOverlay) return;
    document.body.style.cursor = "grabbing";

    return () => {
      document.body.style.cursor = "";
    };
  }, [dragOverlay]);

  return (
    <section
      ref={sectionSortRef}
      className={`z-1 dragging-container fadeIn relative flex justify-between ${
        dragOverlay && "dragOverlay"
      } `}
      style={
        {
          transition: transition,
          "--translate-x": transform
            ? `${Math.round(transform.x)}px`
            : undefined,
          "--translate-y": transform
            ? `${Math.round(transform.y)}px`
            : undefined,
          "--scale-x": transform?.scaleX ? `${transform.scaleX}` : undefined,
          "--scale-y": transform?.scaleY ? `${transform.scaleY}` : undefined,
          "--index": sectionIndex,
        } as React.CSSProperties
      }
    >
      <div className="flex">
        <div className="mt-[10px]">
          <p className="text-sm font-normal leading-normal text-neutral-500 ">
            {sectionIndex}.
          </p>
        </div>
        <div>
          <div className="mb-[5px] ml-[5px] flex h-11 w-[200px] items-center border border-neutral-200 bg-white sm:ml-[18px] sm:w-[290px]">
            <div
              className="relative h-11 w-3 cursor-grab"
              {...attributes}
              {...listeners}
              tabIndex={0}
              ref={draggingRef}
            >
              <div className="absolute left-0 top-0 h-11 w-3  bg-zinc-300" />
              <div className="absolute left-[5px] top-[21px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
              <div className="absolute left-[5px] top-[17px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
              <div className="absolute left-[5px] top-[25px] h-0.5 w-0.5 rounded-full bg-zinc-500" />
            </div>
            <p
              className={`text-sm font-${
                sectionIndex === 0 ? "normal" : "bold"
              } pl-[12px] leading-normal text-black`}
            >
              {section.title}
            </p>
          </div>
          <DndContext
            onDragStart={(e) => {
              if (!e.active) {
                return;
              }
              setActiveId(e.active.id);
              setActiveIndex(e?.active?.data?.current?.sortable.index);
            }}
            onDragEnd={(e) => {
              setActiveId(null);
              setActiveIndex(null);
              handleSubSectionDragEvent(sectionIndex, e);
            }}
            onDragCancel={() => {
              setActiveId(null);
              setActiveIndex(null);
            }}
            measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
            sensors={sensors}
            collisionDetection={closestCenter}
            accessibility={{
              screenReaderInstructions,
            }}
            modifiers={[restrictToVerticalAxis]}
          >
            <SortableContext
              id="modify-sub-sections"
              items={section.children || []}
              strategy={verticalListSortingStrategy}
            >
              {section.children &&
                section.children.map((subSection, index) => (
                  <div
                    key={subSection.id}
                    className={`${
                      activeId !== null && activeIndex === index && "opacity-30"
                    }`}
                  >
                    <SortableSubSection
                      subSection={subSection}
                      sectionId={String(section.id)}
                      sectionIndex={sectionIndex}
                      subSectionIndex={index}
                      handleDeleteSubSection={handleDeleteSubSection}
                    />
                  </div>
                ))}
            </SortableContext>
            {createPortal(
              <DragOverlay>
                {activeId && activeChild ? (
                  <div>
                    <SortableSubSection
                      subSection={activeChild}
                      key={activeChild.id}
                      sectionId={String(section.id)}
                      sectionIndex={sectionIndex}
                      subSectionIndex={Number(activeIndex)}
                      handleDeleteSubSection={handleDeleteSubSection}
                      dragOverlay={true}
                    />
                  </div>
                ) : null}
              </DragOverlay>,
              document.body,
            )}
          </DndContext>
        </div>
      </div>
      <div className="absolute right-[2%] mt-[10px] sm:right-0">
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
