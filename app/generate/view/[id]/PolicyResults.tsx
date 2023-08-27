"use client";

import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "next/navigation";
import Image from "next/image";
import autoAnimate from "@formkit/auto-animate";
import { arrayMove } from "@dnd-kit/sortable";

import savePolicy from "../../../_utils/savePolicy";
import { DragEndEvent } from "@dnd-kit/core";
import Editor from "../../../_components/Editor";
import TextEditing from "./TextEditing";
import PolicySectionModifier from "./PolicySectionModifier";
import PolicySection from "./PolicySection";
import SortableContainer from "./SortableContainer";
import tooltip from "../../../../public/images/tooltip.svg";
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

export type CourseAiPolicyResponse = {
  header: string;
  content: CourseAiPolicy;
};

export default function Result({
  response,
}: {
  response: CourseAiPolicyResponse;
}) {
  const { id } = useParams();
  const [header, setHeader] = useState<string>(response.header);
  const [surveyContents, setSurveyContents] = useState<CourseAiPolicy>(
    response.content,
  );
  const [isReordering, setIsReordering] = useState<boolean>(false);
  const parentRef = useRef(null);
  const headerRef = useRef(null);

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
    if (!newContent) return;
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
    if (!newContent) return;
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
    if (!newContent) return;
    setHeader(newContent);
  };

  const handleUpdatePolicy = async () => {
    if (!header || !surveyContents) return;

    const payload = {
      policy: {
        header,
        content: surveyContents,
      },
    };

    await savePolicy(JSON.stringify(payload), id as string);
    // toast("Changes have been saved!");
    toast.promise(
      savePolicy(JSON.stringify(payload), id as string),
      {
        loading: "Saving...",
        success: "Changes have been saved!",
        error: "Something went wrong",
      },
      {
        style: {
          minWidth: "250px",
        },
        success: {
          style: {
            width: 228,
            height: 59,
            background: "#DEF9E2",
            borderRadius: 0,
          },
        },
      },
    );
  };

  const changeIsReorderingState = () => {
    setIsReordering(!isReordering);
  };

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);
  useEffect(() => {
    headerRef.current && autoAnimate(headerRef.current);
  }, [headerRef]);

  return (
    <div className="p-[10px] px-[5px] md:p-[39px] md:px-[20px]">
      <header
        ref={headerRef}
        className="mb-[24px] flex flex-col justify-between border-b border-black bg-white md:sticky md:top-[174px] md:z-10 md:flex-row"
      >
        <Editor
          content={header}
          handleOnChanges={handleHeaderChanges}
          state={header}
          hideDeleteButton={true}
          handleUpdatePolicy={handleUpdatePolicy}
          handleDeleteSection={handleDeleteSection}
          handleDeleteSubSection={handleDeleteSubSection}
        />
        <div className="flex items-baseline justify-between">
          <PolicySectionModifier
            surveyContents={surveyContents}
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
            isReordering={isReordering}
            changeIsReorderingState={changeIsReorderingState}
          />
          <TextEditing />
        </div>
        {isReordering && (
          <div className="my-[20px] flex justify-center md:m-0">
            <SortableContainer
              surveyContents={surveyContents}
              handleSectionDragEvent={handleSectionDragEvent}
              handleSubSectionDragEvent={handleSubSectionDragEvent}
              handleDeleteSection={handleDeleteSection}
              handleDeleteSubSection={handleDeleteSubSection}
            />
          </div>
        )}
      </header>
      <article ref={parentRef}>
        <div className="flex w-[100%] justify-center">
          <div className="flex h-[34px] w-[96%] items-center rounded-[3px] bg-indigo-50">
            <Image alt="Green right pointed arrow" src={tooltip} />
          </div>
        </div>
        {surveyContents.map((section, sectionIndex) => (
          <PolicySection
            key={section.id}
            section={section}
            sectionIndex={sectionIndex}
            handleOnChanges={handleOnChanges}
            surveyContents={surveyContents}
            handleOnContentArrayChanges={handleOnContentArrayChanges}
            handleUpdatePolicy={handleUpdatePolicy}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
        ))}
      </article>
    </div>
  );
}
