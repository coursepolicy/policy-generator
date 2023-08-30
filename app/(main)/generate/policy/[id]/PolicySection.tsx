import React, { useEffect, useRef } from "react";
import autoAnimate from "@formkit/auto-animate";
import Editor from "@/app/_components/Editor";
import { PolicySections, PolicySection } from "@/app/_utils/";

export default function PolicySection({
  section,
  handleOnChanges,
  surveyContents,
  sectionIndex,
  handleOnContentArrayChanges,
  handleUpdatePolicy,
  handleDeleteSection,
  handleDeleteSubSection,
}: {
  section: PolicySection;
  handleOnChanges: (prop: any) => void;
  handleOnContentArrayChanges: (prop: any) => void;
  surveyContents: PolicySections;
  sectionIndex: number;
  handleUpdatePolicy: () => Promise<void>;
  handleDeleteSection: (sectionId: string) => void;
  handleDeleteSubSection: (
    sectionId: string,
    subSectionId: string,
    sectionIndex: number,
  ) => void;
}) {
  const parentRef = useRef(null);
  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current);
  }, [parentRef]);

  return (
    <section
      ref={parentRef}
      className="mb-[24px] border-b border-zinc-400 pb-[24px]"
    >
      {section.children &&
        section.children.map((subSection, subSectionIndex) => {
          const { miscData, title } = subSection || {};
          const { overallPolicy } = miscData || {};
          if (overallPolicy && title === "Introduction") {
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
                className="flex flex-col-reverse md:relative  md:justify-between"
              >
                <Editor
                  content={String(subSection.htmlContent)}
                  sectionId={String(section.id)}
                  subSectionId={String(subSection.id)}
                  handleOnChanges={handleOnChanges}
                  sections={surveyContents}
                  sectionIndex={sectionIndex}
                  subSectionIndex={subSectionIndex}
                  handleUpdatePolicy={handleUpdatePolicy}
                  handleDeleteSection={handleDeleteSection}
                  handleDeleteSubSection={handleDeleteSubSection}
                />
                <div className="right-0 top-0 mb-[10px] flex flex-col items-center justify-between md:absolute md:mb-0 md:flex-row">
                  <p className="text-xs font-bold leading-normal text-stone-500">
                    Overall Generative AI Policy:
                  </p>
                  <div
                    className={`inline-flex h-7 w-[171px] items-center justify-center gap-2.5 ${
                      colorMapper[String(overallPolicy)]
                    } ml-[12px] px-3 py-0.5`}
                  >
                    <p className="text-center text-xs font-bold leading-normal text-black">
                      {String(overallPolicy)}
                    </p>
                  </div>
                </div>
              </div>
            );
          }

          if (title === "Use Cases") {
            const bgColorMapper: {
              [key: number]: string;
            } = {
              0: "bg-stone-100",
              1: "bg-red-50",
            };
            return (
              <div
                key={subSection.id}
                className="flex h-[100%] w-[100%] flex-col items-center px-[20px] py-[24px] md:flex-row md:items-stretch md:justify-between"
              >
                {subSection.htmlContent &&
                  Array.isArray(subSection.htmlContent) &&
                  subSection.htmlContent.map((useCase, index) => {
                    return (
                      <div
                        key={`${subSection.id}${index}`}
                        className={`w-[100%] max-w-[445px] ${bgColorMapper[index]} use-cases sm:px-[25px] sm:py-[30px]`}
                      >
                        <Editor
                          content={useCase}
                          sectionId={String(section.id)}
                          subSectionId={String(subSection.id)}
                          handleOnChanges={handleOnContentArrayChanges}
                          sections={surveyContents}
                          sectionIndex={sectionIndex}
                          subSectionIndex={subSectionIndex}
                          contentIndex={index}
                          handleUpdatePolicy={handleUpdatePolicy}
                          handleDeleteSection={handleDeleteSection}
                          handleDeleteSubSection={handleDeleteSubSection}
                        />
                      </div>
                    );
                  })}
              </div>
            );
          }

          return (
            <div key={subSection.id}>
              <Editor
                content={String(subSection.htmlContent)}
                sectionId={String(section.id)}
                subSectionId={String(subSection.id)}
                handleOnChanges={handleOnChanges}
                sections={surveyContents}
                sectionIndex={sectionIndex}
                subSectionIndex={subSectionIndex}
                handleUpdatePolicy={handleUpdatePolicy}
                handleDeleteSection={handleDeleteSection}
                handleDeleteSubSection={handleDeleteSubSection}
              />
            </div>
          );
        })}
    </section>
  );
}
