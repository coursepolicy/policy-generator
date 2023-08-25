import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import Editor from "../../../_components/Editor";
import { CourseAiPolicy, Section } from "./PolicyResults";

export default function PolicySection({
  section,
  handleOnChanges,
  surveyContents,
  sectionIndex,
  handleOnContentArrayChanges,
}: {
  section: Section;
  handleOnChanges: (prop: any) => void;
  handleOnContentArrayChanges: (prop: any) => void;
  surveyContents: CourseAiPolicy;
  sectionIndex: number;
}) {
  const parentRef = useRef(null);
  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <section
      ref={parentRef}
      className="mb-[48px] border-b border-zinc-400 pb-[48px]"
    >
      {section.subSections.map((subSection, subSectionIndex) => {
        const { miscData, subSectionTitle } = subSection || {};
        if (miscData?.overallPolicy && subSectionTitle === "Introduction") {
          const colorMapper: {
            [key: string]: string;
          } = {
            "Strictly prohibited": "bg-red-400",
            "Allowed under conditions": "bg-amber-300",
            "No restrictions": "bg-green-200",
          };
          return (
            <div
              key={subSection.id}
              className="flex flex-col-reverse transition-shadow hover:shadow-md hover:focus:shadow-none hover:active:shadow-none md:relative md:justify-between"
            >
              <Editor
                content={subSection.content}
                sectionId={section.id}
                subSectionId={subSection.id}
                handleOnChanges={handleOnChanges}
                state={surveyContents}
                sectionIndex={sectionIndex}
                subSectionIndex={subSectionIndex}
              />
              <div className="right-0 top-0 mb-[10px] flex items-center justify-between md:absolute md:mb-0">
                <p className="text-xs font-bold leading-normal text-stone-500">
                  Overall Generative AI Policy:
                </p>
                <div
                  className={`inline-flex h-7 w-[171px] items-center justify-center gap-2.5 ${
                    colorMapper[miscData?.overallPolicy]
                  } ml-[12px] px-3 py-0.5`}
                >
                  <p className="text-center text-xs font-bold leading-normal text-black">
                    {miscData?.overallPolicy}
                  </p>
                </div>
              </div>
            </div>
          );
        }

        if (subSectionTitle === "Use Cases") {
          const bgColorMapper: {
            [key: number]: string;
          } = {
            0: "bg-stone-100",
            1: "bg-red-50",
          };
          return (
            <div
              key={subSection.id}
              className="mb-[45px] flex flex-col items-center md:flex-row md:items-start md:justify-between"
            >
              {Array.isArray(subSection.content) &&
                subSection.content.map((useCase, index) => {
                  return (
                    <div
                      key={`${subSection.id}${index}`}
                      className={`h-[100%] w-[445px] ${bgColorMapper[index]} use-cases px-[25px] py-[30px] transition-shadow hover:shadow-md hover:focus:shadow-none hover:active:shadow-none`}
                    >
                      <Editor
                        content={useCase}
                        sectionId={section.id}
                        subSectionId={subSection.id}
                        handleOnChanges={handleOnContentArrayChanges}
                        state={surveyContents}
                        sectionIndex={sectionIndex}
                        subSectionIndex={subSectionIndex}
                        contentIndex={index}
                      />
                    </div>
                  );
                })}
            </div>
          );
        }
        if (subSection.subSectionTitle === "Policy Links") {
          return (
            <div
              key={subSection.id}
              className="policy-links transition-shadow hover:shadow-md hover:focus:shadow-none hover:active:shadow-none"
            >
              <Editor
                content={subSection.content}
                sectionId={section.id}
                subSectionId={subSection.id}
                handleOnChanges={handleOnChanges}
                state={surveyContents}
                sectionIndex={sectionIndex}
                subSectionIndex={subSectionIndex}
              />
            </div>
          );
        }
        return (
          <div
            key={subSection.id}
            className="transition-shadow hover:shadow-md hover:focus:shadow-none hover:active:shadow-none"
          >
            <Editor
              content={subSection.content}
              sectionId={section.id}
              subSectionId={subSection.id}
              handleOnChanges={handleOnChanges}
              state={surveyContents}
              sectionIndex={sectionIndex}
              subSectionIndex={subSectionIndex}
            />
          </div>
        );
      })}
    </section>
  );
}
