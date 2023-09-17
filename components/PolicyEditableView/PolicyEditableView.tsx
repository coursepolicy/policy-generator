"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ulid } from "ulid";
import { isEqual } from "lodash";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { arrayMove } from "@dnd-kit/sortable";
import { DragEndEvent } from "@dnd-kit/core";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  type PolicySections,
  type AiPolicyResponse,
  type AiPolicy,
  savePolicy,
  SAMPLE_POLICY_ID,
  useAiPolicy,
} from "@/lib";
import { Editor } from "../Editor";
import UpdatedAt from "../UpdatedAt";

import SampleTextEditing from "./SampleTextEditing";
import { SortableContainer } from "../Sortable";
import Tooltip from "../Tooltip";
import PolicySectionModifier from "./PolicySectionModifier";
import TextEditing from "./TextEditing";
import PolicySection from "./PolicySection";
import PolicyNewSections from "./PolicyNewSections";

export default function Result({
  aiPolicy,
  policyId,
  isSample,
}: {
  aiPolicy: AiPolicyResponse;
  policyId: string;
  isSample?: boolean;
}) {
  const { data } = useAiPolicy(policyId, aiPolicy);

  const {
    createdAt,
    updatedAt,
    sections: initialSections,
    heading: initialHeading,
  } = data || {};

  const queryClient = useQueryClient();
  const router = useRouter();
  const [noChanges, setNoChanges] = useState<boolean>(true);
  const [heading, setHeading] = useState<string>(initialHeading);
  const [surveyContents, setSurveyContents] =
    useState<PolicySections>(initialSections);
  const [isReordering, setIsReordering] = useState<boolean>(false);
  const [parentRef] = useAutoAnimate();
  const [headerRef] = useAutoAnimate();

  const { isLoading, mutateAsync } = useMutation(
    ({
      serializedPayload,
      policyId,
      generatedId,
    }: {
      serializedPayload: string;
      policyId: string;
      generatedId?: string;
    }) => savePolicy(serializedPayload, policyId, generatedId),
    {
      onSuccess: async (savedPolicyResponse) => {
        await queryClient.invalidateQueries(["policy", policyId]);
        toast.success(
          SAMPLE_POLICY_ID === policyId
            ? "A new policy has been created!"
            : "Changes have been saved!",
        );
        if (isSample) {
          router.push(`/policy/${savedPolicyResponse.data.id}`);
        }
      },
      onError: (error) => {
        toast.error("Something went wrong");
        throw new Error(JSON.stringify(error));
      },
    },
  );

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

    await mutateAsync({
      serializedPayload: JSON.stringify(payload),
      policyId,
      generatedId: isSample ? ulid() : undefined,
    });
  };

  const changeIsReorderingState = () => {
    setIsReordering(!isReordering);
  };

  const AddNewSection = () => {
    // fist section is section number 0
    const currentNumber = surveyContents.length;
    const newSectionNumber = currentNumber - 2;
    const newSection = {
      id: ulid(),
      title: `New Section - ${newSectionNumber}`,
      children: [
        {
          id: ulid(),
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
    if (!isSample) return;

    if (
      isEqual(JSON.stringify(heading), JSON.stringify(initialHeading)) &&
      isEqual(JSON.stringify(surveyContents), JSON.stringify(initialSections))
    ) {
      setNoChanges(() => true);
    } else {
      setNoChanges(() => false);
    }
  }, [heading, initialSections, initialHeading, surveyContents, isSample]);

  return (
    <div className="p-[10px] px-[5px] md:px-[20px] md:pt-[39px] ">
      <header
        ref={headerRef}
        className="mb-[24px] flex w-[100%] max-w-[inherit] flex-col justify-between border-b border-[#CCCCCC] bg-white md:sticky md:top-[165px] md:z-20 md:flex-row"
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
            isLoading={isLoading}
          />
          <UpdatedAt updatedAt={updatedAt} createdAt={createdAt} />
        </div>
        <div className="grid grid-flow-col items-start justify-between gap-2 md:mt-[27px] md:justify-start">
          <PolicySectionModifier
            surveyContents={surveyContents}
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
            isReordering={isReordering}
            changeIsReorderingState={changeIsReorderingState}
          />
          {isSample ? (
            <SampleTextEditing
              noChanges={noChanges}
              handleUpdatePolicy={handleUpdatePolicy}
              isLoading={isLoading}
            />
          ) : (
            <TextEditing
              handleUpdatePolicy={handleUpdatePolicy}
              id={policyId}
              isLoading={isLoading}
            />
          )}
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
            isLoading={isLoading}
          />
        ))}
      </article>
      <PolicyNewSections AddNewSection={AddNewSection} />
    </div>
  );
}
