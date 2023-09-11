import React, { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ulid } from "ulid";

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
  MeasuringStrategy,
  DragEndEvent,
  pointerWithin,
  rectIntersection,
  getFirstCollision,
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
import {
  restrictToVerticalAxis,
  restrictToWindowEdges,
} from "@dnd-kit/modifiers";

import { Wrapper, Item, List } from "./components";
import { SortableItem } from "./SortableItem";
import { SortableSubSection } from "./SortableSubSection";
import { screenReaderInstructions } from "@/lib";

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
  handleSectionDragEvent: (e: DragEndEvent) => void;
  handleDeleteSection: (sectionId: string) => void;
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

export function SortableSection({
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
  handleSectionDragEvent,
  handleSubSectionDragEvent,
  handleDeleteSection,
  handleDeleteSubSection,
  items = [],
  isDisabled = () => false,
  measuring,
  modifiers,
  renderItem,
  strategy = verticalListSortingStrategy,
  style,
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
  const lastOverId = useRef<UniqueIdentifier | null>(null);
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

  const collisionDetectionStrategy: CollisionDetection = useCallback(
    (args) => {
      if (activeId && activeId in items) {
        return closestCenter({
          ...args,
          droppableContainers: args.droppableContainers.filter(
            (container) => container.id in items,
          ),
        });
      }

      // Start by finding any intersecting droppable
      const pointerIntersections = pointerWithin(args);
      const intersections =
        pointerIntersections.length > 0
          ? // If there are droppables intersecting with the pointer, return those
            pointerIntersections
          : rectIntersection(args);
      let overId = getFirstCollision(intersections, "id");

      if (overId != null) {
        if (overId in items) {
          const containerItems =
            items[items.findIndex((item) => item.id === overId)].children || [];

          // If a container is matched and it contains items (columns 'A', 'B', 'C')
          if (containerItems.length > 0) {
            // Return the closest droppable within that container
            overId = closestCenter({
              ...args,
              droppableContainers: args.droppableContainers.filter(
                (container) =>
                  container.id !== overId &&
                  containerItems.some((item) => item.id === container.id),
              ),
            })[0]?.id;
          }
        }

        lastOverId.current = overId;

        return [{ id: overId }];
      }

      // If no droppable is matched, return the last match
      return lastOverId.current ? [{ id: lastOverId.current }] : [];
    },
    [activeId, items],
  );

  const handleDelete = (sectionId: UniqueIdentifier) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (!isConfirmed) return;

    handleDeleteSection(String(sectionId));
  };

  useEffect(() => {
    if (!activeId) {
      isFirstAnnouncement.current = true;
    }
  }, [activeId]);

  return (
    <DndContext
      accessibility={{
        announcements,
        screenReaderInstructions,
      }}
      sensors={sensors}
      collisionDetection={collisionDetectionStrategy}
      onDragStart={({ active }) => {
        if (!active) {
          return;
        }

        setActiveId(active.id);
      }}
      onDragEnd={(e) => {
        setActiveId(null);

        handleSectionDragEvent(e);
      }}
      onDragOver={(e) => {
        if (!e.active) {
          return;
        }

        handleSectionDragEvent(e);
      }}
      onDragCancel={() => setActiveId(null)}
      measuring={measuring}
      modifiers={modifiers}
    >
      <Wrapper style={style} center>
        <SortableContext id={ulid()} items={items} strategy={strategy}>
          <Container>
            {items.map((value, index) => (
              <>
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
                  onRemove={() => handleDelete(value.id)}
                  animateLayoutChanges={animateLayoutChanges}
                  useDragOverlay={useDragOverlay}
                  getNewIndex={getNewIndex}
                />

                <SortableSubSection
                  items={value.children || []}
                  modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
                  animateLayoutChanges={animateLayoutChanges}
                  measuring={{
                    droppable: { strategy: MeasuringStrategy.Always },
                  }}
                  removable
                  handle
                  sectionIndex={index}
                  sectionId={value.id}
                  handleSubSectionDragEvent={handleSubSectionDragEvent}
                  handleDeleteSubSection={handleDeleteSubSection}
                  sectionGettingDraged={activeId === value.id}
                />
              </>
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
  );
}
