import React from "react";
import { AiPolicyResponse, PolicySection, UseCaseEntry } from "../../lib/types";
import { format } from "date-fns";

interface Props {
  data: AiPolicyResponse;
  pdf?: boolean;
  publish?: boolean;
}
export function Preview({
  data: { sections, heading, createdAt, updatedAt },
  pdf,
  publish,
}: Props) {
  return (
    <main
      className={`${
        pdf ? "preview-container-no-shadow" : "preview-container"
      } px-[20px] pt-[39px]`}
    >
      <div className="preview">
        <div>
          <header className="mb-[48px] flex w-[100%] max-w-[inherit] flex-col justify-between border-b border-[#CCCCCC]">
            <div
              className="tiptap preview-header"
              dangerouslySetInnerHTML={{ __html: heading }}
            />
            {!publish && (
              <p className="preview-header mb-[20px] pl-[20px]">
                Last updated on{" "}
                {updatedAt
                  ? format(new Date(updatedAt), "PPP")
                  : format(new Date(createdAt), "PPP")}
              </p>
            )}
          </header>
        </div>
        <article>
          {sections.map((section, index) => (
            <section
              key={section.id}
              className={`mb-[48px] ${
                index !== sections.length - 1 ? "border-b border-[#CCCCCC]" : ""
              } pb-[48px]`}
            >
              {section.children &&
                section.children.map((subSection: PolicySection) => {
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
                        className="flex flex-col-reverse sm:relative sm:justify-between"
                      >
                        <div
                          className="tiptap"
                          dangerouslySetInnerHTML={{
                            __html: subSection.htmlContent || "",
                          }}
                        />
                        <div className="right-0 top-0 mb-[10px] flex flex-col items-center justify-between sm:absolute sm:mb-0 sm:flex-row print:!flex-col">
                          <p className="text-xs font-bold leading-normal text-stone-500">
                            Overall Generative AI Policy:
                          </p>
                          <div
                            className={`inline-flex h-7 w-[200px] items-center justify-center gap-2.5 ${
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
                      <section
                        key={subSection.id}
                        className="grid h-[100%] w-[100%] grid-flow-row items-center gap-2 py-[24px] sm:grid-flow-col
                        sm:items-stretch sm:justify-between"
                      >
                        {Array.isArray(subSection.htmlContent) &&
                          subSection.htmlContent.map(
                            (useCase: string, index: number) => {
                              return (
                                <div
                                  key={`${subSection.id}${index}`}
                                  className={`w-[100%] sm:max-w-[475px] ${bgColorMapper[index]} use-cases sm:px-[25px] sm:py-[30px]`}
                                >
                                  <div
                                    className="tiptap"
                                    dangerouslySetInnerHTML={{
                                      __html: useCase,
                                    }}
                                  />
                                </div>
                              );
                            },
                          )}
                      </section>
                    );
                  }
                  return (
                    <section key={subSection.id}>
                      <div
                        className="tiptap px-0"
                        dangerouslySetInnerHTML={{
                          __html: subSection.htmlContent || "",
                        }}
                      />
                    </section>
                  );
                })}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
