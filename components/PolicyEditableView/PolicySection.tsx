import React from "react";
import type { AiPolicy, PolicySections, PolicySection } from "@/lib";
import { Editor } from "@/components/Editor";

export default function PolicySection({
  section,
  handleSectionsOnChanges,
  surveyContents,
  sectionIndex,
  handleUpdatePolicy,
  handleDeleteSection,
  handleDeleteSubSection,
}: {
  section: PolicySection;
  handleSectionsOnChanges: (heading: AiPolicy["sections"]) => void;
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
  return (
    <section className="mb-[48px] border-b border-[#CCCCCC] pb-[48px]">
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
              <header
                key={subSection.id}
                className="flex flex-col-reverse md:relative  md:justify-between"
              >
                <Editor
                  content={String(subSection.htmlContent)}
                  sectionId={String(section.id)}
                  subSectionId={String(subSection.id)}
                  handleSectionsOnChanges={handleSectionsOnChanges}
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
              </header>
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
              <section
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
                          handleSectionsOnChanges={handleSectionsOnChanges}
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
              </section>
            );
          }

          return (
            <section key={subSection.id}>
              <Editor
                content={String(subSection.htmlContent)}
                sectionId={String(section.id)}
                subSectionId={String(subSection.id)}
                handleSectionsOnChanges={handleSectionsOnChanges}
                sections={surveyContents}
                sectionIndex={sectionIndex}
                subSectionIndex={subSectionIndex}
                handleUpdatePolicy={handleUpdatePolicy}
                handleDeleteSection={handleDeleteSection}
                handleDeleteSubSection={handleDeleteSubSection}
              />
            </section>
          );
        })}
    </section>
  );
}
`
s:
<h2>1. CS999 Generative AI Policy</h2><p>We recognize the potential benefits of incorporating generative AI in the learning process. As such, we embrace the use of generative AI tools by our students. In this policy, we employ a "reasonable/not reasonable" system rather than a strict "allowed/not allowed" one (inspired by CS50 at Harvard). This approach fosters proactive thinking among students by encouraging them to understand context, evaluate implications, and make thoughtful decisions.</p>
<h2>1. CS999 Generative AI Policy</h2><p>We recognize the potential benefits of incorporating generative AI in the learning process. As such, we embrace the use of generative AI tools by our students. In this policy, we employ a "reasonable/not reasonable" system rather than a strict "allowed/not allowed" one (inspired by CS50 at Harvard). This approach fosters proactive thinking among students by encouraging them to understand context, evaluate implications, and make thoughtful decisions.</p>
`;
