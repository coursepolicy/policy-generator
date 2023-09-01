import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { v4 as uuid4 } from "uuid";

import {
  Active,
  Announcements,
  closestCenter,
  CollisionDetection,
  DragOverlay,
  DndContext,
  DropAnimation,
  KeyboardSensor,
  KeyboardCoordinateGetter,
  Modifiers,
  MouseSensor,
  MeasuringConfiguration,
  PointerActivationConstraint,
  ScreenReaderInstructions,
  TouchSensor,
  UniqueIdentifier,
  useSensor,
  useSensors,
  defaultDropAnimationSideEffects,
  DragEndEvent,
  MeasuringStrategy,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  SortingStrategy,
  verticalListSortingStrategy,
  AnimateLayoutChanges,
  NewIndexGetter,
} from "@dnd-kit/sortable";

import { createRange } from "./utilities";
import { Wrapper, Item, List } from "./components";
import { SortableItem } from "./SortableItem";

type ItemSingle = {
  id: UniqueIdentifier;
  title: string;
  children?: ItemSingle[];
};

export interface SortableProps {
  activationConstraint?: PointerActivationConstraint;
  animateLayoutChanges?: AnimateLayoutChanges;
  adjustScale?: boolean;
  collisionDetection?: CollisionDetection;
  coordinateGetter?: KeyboardCoordinateGetter;
  Container?: any; // To-do: Fix me
  dropAnimation?: DropAnimation | null;
  getNewIndex?: NewIndexGetter;
  handle?: boolean;
  handleSubSectionDragEvent: (index: number, e: DragEndEvent) => void;
  handleDeleteSubSection: (
    sectionId: string,
    childSectionId: string,
    sectionIndex: number,
  ) => void;
  itemCount?: number;
  items?: ItemSingle[];
  measuring?: MeasuringConfiguration;
  modifiers?: Modifiers;
  renderItem?: any;
  removable?: boolean;
  reorderItems?: typeof arrayMove;
  strategy?: SortingStrategy;
  style?: React.CSSProperties;
  sectionIndex: number;
  sectionId: UniqueIdentifier;
  useDragOverlay?: boolean;
  getItemStyles?(args: {
    id: UniqueIdentifier;
    index: number;
    isSorting: boolean;
    isDragOverlay: boolean;
    overIndex: number;
    isDragging: boolean;
  }): React.CSSProperties;
  wrapperStyle?(args: {
    active: Pick<Active, "id"> | null;
    index: number;
    isDragging: boolean;
    id: UniqueIdentifier;
  }): React.CSSProperties;
  isDisabled?(id: UniqueIdentifier): boolean;
  sectionGettingDraged: boolean;
}

const dropAnimationConfig: DropAnimation = {
  sideEffects: defaultDropAnimationSideEffects({
    styles: {
      active: {
        opacity: "0.5",
      },
    },
  }),
};

const screenReaderInstructions: ScreenReaderInstructions = {
  draggable: `
    To pick up a sortable item, press the space bar.
    While sorting, use the arrow keys to move the item.
    Press space again to drop the item in its new position, or press escape to cancel.
  `,
};

type Item = {
  id: UniqueIdentifier;
  title: string;
  children?: Item[];
};

export function SortableSubSection({
  activationConstraint,
  animateLayoutChanges,
  adjustScale = false,
  Container = List,
  collisionDetection = closestCenter,
  coordinateGetter = sortableKeyboardCoordinates,
  dropAnimation = dropAnimationConfig,
  getItemStyles = () => ({}),
  getNewIndex,
  handle = false,
  items = [],
  isDisabled = () => false,
  measuring,
  modifiers,
  renderItem,
  handleSubSectionDragEvent,
  handleDeleteSubSection,
  strategy = verticalListSortingStrategy,
  style,
  sectionIndex,
  sectionId,
  sectionGettingDraged,
  useDragOverlay = true,
  wrapperStyle = () => ({}),
}: SortableProps) {
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint,
    }),
    useSensor(TouchSensor, {
      activationConstraint,
    }),
    useSensor(KeyboardSensor, {
      // Disable smooth scrolling in Cypress automated tests
      scrollBehavior: "Cypress" in window ? "auto" : undefined,
      coordinateGetter,
    }),
  );
  const isFirstAnnouncement = useRef(true);
  const getIndex = (id: UniqueIdentifier) =>
    items.findIndex((section) => section.id === id);
  const getPosition = (id: UniqueIdentifier) => getIndex(id) + 1;
  const activeIndex = activeId ? getIndex(activeId) : -1;
  const announcements: Announcements = {
    onDragStart({ active: { id } }) {
      return `Picked up sortable item ${String(
        id,
      )}. Sortable item ${id} is in position ${getPosition(id)} of ${
        items.length
      }`;
    },
    onDragOver({ active, over }) {
      // In this specific use-case, the picked up item's `id` is always the same as the first `over` id.
      // The first `onDragOver` event therefore doesn't need to be announced, because it is called
      // immediately after the `onDragStart` announcement and is redundant.
      if (isFirstAnnouncement.current === true) {
        isFirstAnnouncement.current = false;
        return;
      }

      if (over) {
        return `Sortable item ${
          active.id
        } was moved into position ${getPosition(over.id)} of ${items.length}`;
      }

      return;
    },
    onDragEnd({ active, over }) {
      if (over) {
        return `Sortable item ${
          active.id
        } was dropped at position ${getPosition(over.id)} of ${items.length}`;
      }

      return;
    },
    onDragCancel({ active: { id } }) {
      return `Sorting was cancelled. Sortable item ${id} was dropped and returned to position ${getPosition(
        id,
      )} of ${items.length}.`;
    },
  };

  const handleDelete = (
    subSectionId: UniqueIdentifier,
    sectionIndex: number,
  ) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (!isConfirmed) return;

    handleDeleteSubSection(
      String(sectionId),
      String(subSectionId),
      sectionIndex,
    );
  };

  useEffect(() => {
    if (!activeId) {
      isFirstAnnouncement.current = true;
    }
  }, [activeId]);

  return (
    !sectionGettingDraged && (
      <DndContext
        accessibility={{
          announcements,
          screenReaderInstructions,
        }}
        sensors={sensors}
        collisionDetection={collisionDetection}
        onDragStart={({ active }) => {
          if (!active) {
            return;
          }

          setActiveId(active.id);
        }}
        onDragEnd={(e) => {
          setActiveId(null);
          handleSubSectionDragEvent(sectionIndex, e);
        }}
        onDragOver={(e) => {
          if (!e.active) {
            return;
          }
          handleSubSectionDragEvent(sectionIndex, e);
        }}
        onDragCancel={() => setActiveId(null)}
        measuring={{ droppable: { strategy: MeasuringStrategy.Always } }}
        modifiers={modifiers}
      >
        <Wrapper style={style} center>
          <SortableContext id={uuid4()} items={items} strategy={strategy}>
            <Container>
              {items.map((value, index) => (
                <SortableItem
                  key={value.id}
                  id={value.id}
                  value={value.title}
                  handle={handle}
                  index={index}
                  style={getItemStyles}
                  wrapperStyle={wrapperStyle}
                  disabled={isDisabled(value.title)}
                  renderItem={renderItem}
                  onRemove={() => handleDelete(value.id, index)}
                  sectionIndex={sectionIndex}
                  subSectionIndex={index}
                  animateLayoutChanges={animateLayoutChanges}
                  useDragOverlay={useDragOverlay}
                  getNewIndex={getNewIndex}
                  subSection={true}
                />
              ))}
            </Container>
          </SortableContext>
        </Wrapper>
        {useDragOverlay
          ? createPortal(
              <DragOverlay
                adjustScale={adjustScale}
                dropAnimation={dropAnimation}
              >
                {activeId ? (
                  <Item
                    value={items[activeIndex].title}
                    handle={handle}
                    renderItem={renderItem}
                    wrapperStyle={wrapperStyle({
                      active: { id: activeId },
                      index: activeIndex,
                      isDragging: true,
                      id: items[activeIndex].id,
                    })}
                    style={getItemStyles({
                      id: items[activeIndex].id,
                      index: activeIndex,
                      isSorting: activeId !== null,
                      isDragging: true,
                      overIndex: -1,
                      isDragOverlay: true,
                    })}
                    dragOverlay
                  />
                ) : null}
              </DragOverlay>,
              document.body,
            )
          : null}
      </DndContext>
    )
  );
}
