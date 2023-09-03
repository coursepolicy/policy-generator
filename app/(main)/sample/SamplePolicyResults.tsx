"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import toast from "react-hot-toast";
import { v4 as uuid4 } from "uuid";
import autoAnimate from "@formkit/auto-animate";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";
import { isEqual } from "lodash";

import Editor from "@/app/_components/Editor";
import {
  PolicySections,
  AiPolicy,
  savePolicy,
  AiPolicyResponse,
} from "@/app/_utils/";
import PolicySectionModifier from "../policy/[id]/PolicySectionModifier";
import PolicySection from "../policy/[id]/PolicySection";
import SampleTextEditing from "./SampleTextEditing";
import SortableContainer from "@/app/_components/SortableContainer";
import PolicyNewSections from "../policy/[id]/PolicyNewSections";
import { Tooltip, UpdatedAt } from "../_components";

export default function Result({
  aiPolicy: {
    createdAt,
    updatedAt,
    sections: initialSections,
    heading: initialHeading,
  },
  samplePolicyId,
}: {
  aiPolicy: AiPolicyResponse;
  samplePolicyId: string;
}) {
  const router = useRouter();
  const [noChanges, setNoChanges] = useState<boolean>(true);
  const [heading, setHeading] = useState<string>(initialHeading);
  const [surveyContents, setSurveyContents] =
    useState<PolicySections>(initialSections);
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

    let policyId;

    try {
      let generatedPolicyId = uuid4();

      const { data } = await savePolicy(
        JSON.stringify(payload),
        samplePolicyId,
        generatedPolicyId,
      );

      policyId = data.id;
    } catch (error) {
      toast.error("Something went wrong");
      console.error(JSON.stringify(error));
      throw new Error(JSON.stringify(error));
    }
    if (!policyId) return;

    toast.success("A new policy has been created!");
    router.push(`/generate/policy/${policyId}`);
  };

  const changeIsReorderingState = () => {
    setIsReordering(!isReordering);
  };

  const AddNewSection = () => {
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
          htmlContent: "<h2>New Section</h2><p>Enter your content here</p>",
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

  useEffect(() => {
    if (
      isEqual(JSON.stringify(heading), JSON.stringify(initialHeading)) &&
      isEqual(JSON.stringify(surveyContents), JSON.stringify(initialSections))
    ) {
      setNoChanges(() => true);
    } else {
      setNoChanges(() => false);
    }
  }, [heading, initialSections, initialHeading, surveyContents]);

  return (
    <div className="p-[10px] px-[5px] md:p-[39px] md:px-[20px]">
      <header
        ref={headerRef}
        className="mb-[24px] flex flex-col justify-between border-b border-black bg-white md:sticky md:top-[174px] md:z-10 md:flex-row"
      >
        <div className="flex flex-col">
          <Editor
            content={heading}
            handleHeadingOnChanges={handleHeadingOnChanges}
            heading={heading}
            hideDeleteButton={true}
            handleUpdatePolicy={handleUpdatePolicy}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
          <UpdatedAt updatedAt={updatedAt} createdAt={createdAt} />
        </div>
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
          <SampleTextEditing
            noChanges={noChanges}
            handleUpdatePolicy={handleUpdatePolicy}
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
        <Tooltip />
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
      <PolicyNewSections AddNewSection={AddNewSection} />
    </div>
  );
}
