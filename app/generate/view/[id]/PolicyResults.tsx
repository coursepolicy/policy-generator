"use client";
import autoAnimate from "@formkit/auto-animate";
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useRef, useState } from "react";
import TextEditing from "./TextEditing";
import PolicySectionModifier from "./PolicySectionModifier";
import PolicySection from "./PolicySection";
import { GenerativeAiPolicy } from "./types";
import { DragEndEvent } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

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
  const [surveyContents, setSurveyContents] = useState<CourseAiPolicy>([
    {
      id: uuidv4(),
      sectionTitle: "Course Description",
      subSections: [
        {
          id: uuidv4(),
          subSectionTitle: "Introduction",
          content: (
            <section>
              <h3>Course Description</h3>
              <p>{response.courseDescription}</p>
            </section>
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      sectionTitle: "Generative AI Policy",
      subSections: [
        {
          id: uuidv4(),
          subSectionTitle: "Introduction",
          content: (
            <section>
              <div className="flex justify-between">
                <h3>1. {response.courseNumber} Generative AI Policy</h3>
                <p>
                  Overall generative AI policy:
                  <span>{response.overallPolicy}</span>
                </p>
              </div>
              <p>{response.overallPolicyText}</p>
            </section>
          ),
        },
        {
          id: uuidv4(),
          subSectionTitle: "Use Cases",
          content: (
            <>
              {response.useCases && (
                <section className="flex justify-between">
                  <div className="">
                    <h3>Reasonable Use Cases</h3>
                    <ul>
                      {response.useCases.reasonable ? (
                        response.useCases.reasonable.map((entry) => (
                          <React.Fragment key={entry.label}>
                            <li>
                              <strong>{entry.label}</strong>
                              <p>{entry.text}</p>
                            </li>
                          </React.Fragment>
                        ))
                      ) : (
                        <p>None</p>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h3>Unreasonable Use Cases</h3>
                    <ul>
                      {response.useCases.unreasonable.length ? (
                        response.useCases.unreasonable.map((entry) => (
                          <React.Fragment key={entry.label}>
                            <li>
                              <strong>{entry.label}</strong>
                              <p>{entry.text}</p>
                            </li>
                          </React.Fragment>
                        ))
                      ) : (
                        <p>None</p>
                      )}
                    </ul>
                  </div>
                </section>
              )}
            </>
          ),
        },
        {
          id: uuidv4(),
          subSectionTitle: "Assignment Specific AI Policies",
          content: (
            <>
              {response.specificPoliciesForAssignments && (
                <section>
                  <h3>Assignment/Project Specific AI Policies</h3>
                  <p>{response.specificPoliciesForAssignments}</p>
                </section>
              )}
            </>
          ),
        },
        {
          id: uuidv4(),
          subSectionTitle: "Ethical Guidelines",
          content: (
            <>
              {response.ethicalGuidelines && (
                <section>
                  <h3>
                    Ethical guidelines for using generative AI for this course:
                  </h3>
                  {response.ethicalGuidelines.map((text) => (
                    <React.Fragment key={text}>
                      <p>{text}</p>
                    </React.Fragment>
                  ))}
                  {response.additionalGuidelines && (
                    <p>{response.additionalGuidelines}</p>
                  )}
                </section>
              )}
            </>
          ),
        },
        {
          id: uuidv4(),
          subSectionTitle: "Declaration",
          content: (
            <>
              {response.generativeAiToolDeclarations && (
                <section>
                  <h3>How to declare the use of generative tools:</h3>
                  {response.generativeAiToolDeclarations.map((text) => (
                    <React.Fragment key={text}>
                      <p>{text}</p>
                    </React.Fragment>
                  ))}
                  {response.additionalGenerativeAiToolsDeclarations && (
                    <p>{response.additionalGenerativeAiToolsDeclarations}</p>
                  )}
                </section>
              )}
            </>
          ),
        },
        {
          id: uuidv4(),
          subSectionTitle: "Additional Notes",
          content: (
            <section>
              <h3>Additional Notes</h3>
              {response.additionalNotes && <p>{response.additionalNotes}</p>}
            </section>
          ),
        },
      ],
    },
    {
      id: uuidv4(),
      sectionTitle: "Additional Policies",

      subSections: [
        {
          id: uuidv4(),
          subSectionTitle: "Introduction",
          content: (
            <section>
              <h2>2. Additional Policies</h2>
              <p>{response.additionalPolicyText}</p>
            </section>
          ),
        },
        {
          id: uuidv4(),
          subSectionTitle: "Policy Links",
          content: (
            <>
              {response.overallPolicy !== "No restrictions" && (
                <section>
                  <ul>
                    {response.campusWidePolicy && (
                      <li>
                        Campus-wide generative AI policy:{" "}
                        <span>
                          {response.campusWidePolicy.length
                            ? response.campusWidePolicy
                            : "N/A"}
                        </span>
                      </li>
                    )}
                    {response.departmentWidePolicy && (
                      <li>
                        Department-wide generative AI policy:{" "}
                        <span>
                          {response.departmentWidePolicy.length
                            ? response.departmentWidePolicy
                            : "N/A"}
                        </span>
                      </li>
                    )}
                    {response.academicIntegrityPolicy && (
                      <li>
                        Academic Integrity policy:{" "}
                        <span>
                          {response.academicIntegrityPolicy.length
                            ? response.academicIntegrityPolicy
                            : "N/A"}
                        </span>
                      </li>
                    )}
                    {response.otherPolicies && (
                      <li>
                        Other policies:{" "}
                        <span>
                          {response.otherPolicies.length
                            ? response.otherPolicies
                            : "N/A"}
                        </span>
                      </li>
                    )}
                  </ul>
                </section>
              )}
            </>
          ),
        },
      ],
    },
  ]);

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

  useEffect(() => {
    console.log("hello ref");
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
