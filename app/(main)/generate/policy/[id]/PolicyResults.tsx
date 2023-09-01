"use client";

import React, { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { v4 as uuid4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";

import Editor from "@/app/_components/Editor";
import tooltip from "@/public/images/tooltip.svg";
import { AiPolicy, savePolicy } from "@/app/_utils/";
import TextEditing from "./TextEditing";
import PolicySectionModifier from "./PolicySectionModifier";
import PolicySection from "./PolicySection";
import SortableContainer from "@/app/_components/SortableContainer";
import PolicyAddNewSections from "./PolicyAddNewSections";

export default function Result({ response }: { response: AiPolicy }) {
  const { id } = useParams();
  const [heading, setHeading] = useState<AiPolicy["heading"]>(response.heading);
  const [surveyContents, setSurveyContents] = useState<AiPolicy["sections"]>(
    response.sections,
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

    const { children } = surveyContents[index];
    if (!children) return;

    if (active.id !== over.id) {
      const oldIndex = children.findIndex(
        (section) => section.id === active.id,
      );
      const newIndex = children.findIndex((section) => section.id === over.id);
      setSurveyContents((prevState) => {
        return prevState.map((section, sectionIndex) => {
          if (index === sectionIndex && section.children) {
            return {
              ...section,
              children: arrayMove(section.children, oldIndex, newIndex),
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

  const handleDeleteSubSection = (
    sectionId: string,
    childSectionId: string,
    sectionIndex: number,
  ) => {
    const { children } = surveyContents[sectionIndex] || {};
    if (children && children.length === 1) {
      handleDeleteSection(sectionId);
      return;
    }

    setSurveyContents((prevState) => {
      return prevState.map((section) => {
        if (sectionId === section.id && section.children) {
          return {
            ...section,
            children: section.children.filter((subSection) => {
              return subSection.id !== childSectionId;
            }),
          };
        }
        return section;
      });
    });
  };

  const handleHeadingOnChanges = (heading: AiPolicy["heading"]): void => {
    setHeading(heading);
  };

  const handleSectionsOnChanges = (sections: AiPolicy["sections"]): void => {
    setSurveyContents(sections);
  };

  const handleUpdatePolicy = async () => {
    if (!heading || !surveyContents) return;

    const payload = {
      policy: {
        heading,
        sections: surveyContents,
      },
    };

    try {
      await toast.promise(
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
    } catch (error) {
      console.error(JSON.stringify(error));
      throw new Error(JSON.stringify(error));
    }
  };

  const changeIsReorderingState = () => {
    setIsReordering(!isReordering);
  };

  const handleNewSection = () => {
    // fist section is section number 0
    const currentNumber = surveyContents.length;
    const newSectionNumber = currentNumber - 2;
    const newSection = {
      id: uuid4(),
      title: `New Section - ${newSectionNumber}`,
      children: [
        {
          id: uuid4(),
          title: "New Sub Section",
          content: `
            <div>
              <h2>${currentNumber}. New Section</h2>
              <p>Enter your content here</p>
            </div>
          `,
        },
      ],
    };

    setSurveyContents((prevState) => {
      return [...prevState, newSection];
    });
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
        className="mb-[24px] flex flex-col justify-between border-b border-black bg-white md:sticky md:top-[174px] md:z-10 md:flex-row md:items-center"
      >
        <Editor
          content={heading}
          handleHeadingOnChanges={handleHeadingOnChanges}
          heading={heading}
          hideDeleteButton={true}
          handleUpdatePolicy={handleUpdatePolicy}
          handleDeleteSection={handleDeleteSection}
          handleDeleteSubSection={handleDeleteSubSection}
        />
        <div className="flex items-baseline justify-between md:pb-[35px]">
          <PolicySectionModifier
            surveyContents={surveyContents}
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
            isReordering={isReordering}
            changeIsReorderingState={changeIsReorderingState}
          />
          <TextEditing
            handleUpdatePolicy={handleUpdatePolicy}
            id={id as string}
          />
        </div>
        {isReordering && (
          <SortableContainer
            surveyContents={surveyContents}
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
        )}
      </header>
      <article ref={parentRef}>
        <div className="ml-[20px] flex h-[34px]  w-[96%] max-w-[904px] items-center justify-start rounded-[3px] bg-indigo-50 pl-[20px]">
          <p>
            <span className="text-xs font-normal leading-normal text-blue-500">
              <Image
                alt="tooltip lightbulb"
                src="/images/lightbulb.png"
                width="12"
                height="13"
                className="inline-block"
              />
            </span>
            <span className="text-xs font-bold leading-normal text-neutral-900">
              {" "}
            </span>
            <span className="text-xs font-bold leading-normal text-neutral-900">
              TIP:{" "}
            </span>
            <span className="text-xs font-normal leading-normal text-neutral-900">
              <i>
                To make modifications to your AI policy, try clicking on a
                section to start editing the content. Bold and italic shortcuts
                are supported.
              </i>
            </span>
          </p>
        </div>

        {surveyContents.map((section, sectionIndex) => (
          <PolicySection
            key={section.id}
            section={section}
            sectionIndex={sectionIndex}
            handleSectionsOnChanges={handleSectionsOnChanges}
            surveyContents={surveyContents}
            handleUpdatePolicy={handleUpdatePolicy}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
        ))}
      </article>
      <PolicyAddNewSections handleNewSection={handleNewSection} />
    </div>
  );
}
