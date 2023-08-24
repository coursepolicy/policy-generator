"use client";
import autoAnimate from "@formkit/auto-animate";
import React, { useEffect, useRef, useState } from "react";
import TextEditing from "./TextEditing";
import PolicySectionModifier from "./PolicySectionModifier";
import PolicySection from "./PolicySection";
import { GenerativeAiPolicy } from "./types";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { formatResult } from "./helpers";

export interface Section {
  [key: string]: any;
  id: string;
  sectionTitle: string;
  subSections: SubSection[];
}

export interface SubSection {
  id: string;
  subSectionTitle: string;
  content: React.ReactElement;
}

export type CourseAiPolicy = Section[];

export default function Result({ response }: { response: GenerativeAiPolicy }) {
  const parentRef = useRef(null);

  const [surveyContents, setSurveyContents] = useState<CourseAiPolicy>(
    formatResult(response),
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

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <>
      <header className="flex justify-between">
        <div>
          <h2>
            {response.courseNumber}: {response.courseTitle}
          </h2>
          <p>
            Course Instructor: {response.instructor}[{response.email}]{" "}
            <span>Generated on {response.generatedAt}</span>
          </p>
        </div>
        <div className="flex">
          <PolicySectionModifier
            surveyContents={surveyContents}
            handleSectionDragEvent={handleSectionDragEvent}
            handleSubSectionDragEvent={handleSubSectionDragEvent}
            handleDeleteSection={handleDeleteSection}
            handleDeleteSubSection={handleDeleteSubSection}
          />
          <TextEditing />
        </div>
      </header>
      <article ref={parentRef}>
        {surveyContents.map((section) => (
          <PolicySection key={section.id} section={section} />
        ))}
      </article>
    </>
  );
}
