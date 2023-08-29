import React from "react";

import {
  Announcements,
  DndContext,
  DragEndEvent,
  KeyboardCoordinateGetter,
  KeyboardSensor,
  MeasuringStrategy,
  MouseSensor,
  TouchSensor,
  UniqueIdentifier,
  closestCenter,
  useSensor,
  useSensors,
  DragOverlay,
  DropAnimation,
  defaultDropAnimationSideEffects,
} from "@dnd-kit/core";
import SortableSection from "./SortableSection";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";
import { CourseAiPolicy, Section } from "@/app/_utils/";
import { screenReaderInstructions } from "./utilities/constants";
import { createPortal } from "react-dom";

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

export default function SortableContainer({
  surveyContents,
  handleSectionDragEvent,
  handleSubSectionDragEvent,
  handleDeleteSubSection,
  handleDeleteSection,
}: Props) {
  const [activeId, setActiveId] = React.useState<UniqueIdentifier | null>(null);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor),
  );

  const dropAnimationConfig: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: "0.5",
        },
      },
    }),
  };

  return (
    <div className="bg-zinc-100 shadow sm:w-[387px] md:absolute md:right-0 md:top-[40px]">
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
          handleSectionDragEvent(e);
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
          id="modify-sections"
          items={surveyContents}
          strategy={verticalListSortingStrategy}
        >
          <div className="h-[100%]">
            <div className="pb-[10px] pl-[5px] pr-[5px] pt-[10px] sm:pb-[40px] sm:pl-[18px] sm:pr-[15px] sm:pt-[13px]">
              <p className="text-sm font-normal leading-normal text-zinc-500">
                <i>Drag to reorder sections and subsections</i>
              </p>
              <div className="mt-[10px]">
                {surveyContents.map((section, index) => (
                  <div
                    key={section.id}
                    className={`${
                      activeId !== null && activeIndex === index && "opacity-30"
                    }`}
                  >
                    <SortableSection
                      section={section}
                      handleSubSectionDragEvent={handleSubSectionDragEvent}
                      sectionIndex={index}
                      handleDeleteSection={handleDeleteSection}
                      handleDeleteSubSection={handleDeleteSubSection}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SortableContext>
        {createPortal(
          <DragOverlay adjustScale={false} dropAnimation={dropAnimationConfig}>
            {activeId ? (
              <SortableSection
                section={surveyContents[activeIndex as number]}
                key={surveyContents[activeIndex as number].id}
                handleSubSectionDragEvent={handleSubSectionDragEvent}
                sectionIndex={surveyContents.findIndex(
                  (section) => section.id === activeId,
                )}
                handleDeleteSection={handleDeleteSection}
                handleDeleteSubSection={handleDeleteSubSection}
                dragOverlay={true}
                dragging={true}
                handle={true}
                sorting={activeId !== null}
              />
            ) : null}
          </DragOverlay>,
          document.body,
        )}
      </DndContext>
    </div>
  );
}
