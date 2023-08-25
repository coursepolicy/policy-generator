"use client";
import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";
import TextEditing from "./TextEditing";
import PolicySectionModifier from "./PolicySectionModifier";
import PolicySection from "./PolicySection";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import Editor from "../../../_components/Editor";

export interface Section {
  [key: string]: any;
  id: string;
  sectionTitle: string;
  subSections: SubSection[];
}

export interface SubSection {
  id: string;
  subSectionTitle: string;
  miscData?: Record<string, any>;
  content: string | string[];
}

export type CourseAiPolicy = Section[];

type CourseAiPolicyResponse = {
  header: string;
  content: CourseAiPolicy;
};

export default function Result({
  response,
}: {
  response: CourseAiPolicyResponse;
}) {
  const [header, setHeader] = useState<string>(response.header);
  const [surveyContents, setSurveyContents] = useState<CourseAiPolicy>(
    response.content,
  );
  const [isReordering, setIsReordering] = useState<boolean>(false);
  const parentRef = useRef(null);

  const handleSectionDragEvent = ({ active, over }: DragEndEvent) => {
    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = surveyContents.findIndex(
        (section) => section.id === active.id,
      );
      const newIndex = surveyContents.findIndex(
        (section) => section.id === over.id,
      );
      setSurveyContents(arrayMove(surveyContents, oldIndex, newIndex));
    }
  };

  const handleSubSectionDragEvent = (
    index: number,
    { over, active }: DragEndEvent,
  ) => {
    if (!over) {
      return;
    }

    if (active.id !== over.id) {
      const oldIndex = surveyContents[index].subSections.findIndex(
        (section) => section.id === active.id,
      );
      const newIndex = surveyContents[index].subSections.findIndex(
        (section) => section.id === over.id,
      );
      setSurveyContents((prevState) => {
        return prevState.map((section, sectionIndex) => {
          if (index === sectionIndex) {
            return {
              ...section,
              subSections: arrayMove(section.subSections, oldIndex, newIndex),
            };
          }
          return section;
        });
      });
    }
  };

  const handleDeleteSection = (sectionId: string) => {
    setSurveyContents((prevState) => {
      return prevState.filter((section) => {
        return section.id !== sectionId;
      });
    });
  };

  const handleDeleteSubSection = (sectionId: string, subSectionId: string) => {
    setSurveyContents((prevState) => {
      return prevState.map((section) => {
        if (sectionId === section.id) {
          return {
            ...section,
            subSections: section.subSections.filter((subSection) => {
              return subSection.id !== subSectionId;
            }),
          };
        }
        return section;
      });
    });
  };

  const handleOnChanges = ({
    sectionId,
    subSectionId,
    newContent,
  }: {
    sectionId: string;
    subSectionId: string;
    newContent: string;
  }): void => {
    setSurveyContents((prevState: any) => {
      return prevState.map((section: any) => {
        if (section.id === sectionId) {
          return {
            ...section,
            subSections: section.subSections.map((subSection: any) => {
              if (subSection.id === subSectionId) {
                return {
                  ...subSection,
                  content: newContent,
                };
              }
              return subSection;
            }),
          };
        }
        return section;
      });
    });
  };

  const handleOnContentArrayChanges = ({
    sectionId,
    subSectionId,
    newContent,
    contentIndex,
  }: {
    sectionId: string;
    subSectionId: string;
    newContent: string;
    contentIndex: number;
  }): void => {
    setSurveyContents((prevState: any) => {
      return prevState.map((section: any) => {
        if (section.id === sectionId) {
          return {
            ...section,
            subSections: section.subSections.map((subSection: any) => {
              if (subSection.id === subSectionId) {
                const newArray = [...subSection.content];
                newArray[contentIndex] = newContent;
                return {
                  ...subSection,
                  content: newArray,
                };
              }
              return subSection;
            }),
          };
        }
        return section;
      });
    });
  };

  const handleHeaderChanges = ({ newContent }: { newContent: string }) => {
    setHeader(newContent);
  };

  const changeIsReorderingState = () => {
    setIsReordering(!isReordering);
  };

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <>
      <header className="mb-[24px] flex justify-between border-b border-black transition-shadow hover:shadow-md hover:focus:shadow-none hover:active:shadow-none">
        <Editor
          content={header}
          handleOnChanges={handleHeaderChanges}
          state={header}
        />
        <TextEditing />
      </header>
      <PolicySectionModifier
        surveyContents={surveyContents}
        handleSectionDragEvent={handleSectionDragEvent}
        handleSubSectionDragEvent={handleSubSectionDragEvent}
        handleDeleteSection={handleDeleteSection}
        handleDeleteSubSection={handleDeleteSubSection}
        isReordering={isReordering}
        changeIsReorderingState={changeIsReorderingState}
      />
      <article ref={parentRef}>
        {surveyContents.map((section, sectionIndex) => (
          <PolicySection
            key={section.id}
            section={section}
            sectionIndex={sectionIndex}
            handleOnChanges={handleOnChanges}
            surveyContents={surveyContents}
            handleOnContentArrayChanges={handleOnContentArrayChanges}
          />
        ))}
      </article>
    </>
  );
}

/**
 * TODO:
 * - [] Persist state to db by storing in new column
 * - [] Send mapper to db hook
 * - [] Text editing lmao good luck
 * - [] sample policies
 *     - if samplePolicy is true, don't persist until user saves?
 */
