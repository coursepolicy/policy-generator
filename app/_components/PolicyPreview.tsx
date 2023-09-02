import React from "react";
import { AiPolicyResponse, PolicySection } from "../_utils/types";
import { format } from "date-fns";

interface Props {
  data: AiPolicyResponse;
  pdf?: boolean;
}
export default async function Preview({
  data: { sections, heading, createdAt, updatedAt },
  pdf,
}: Props) {
  return (
    <main
      className={`${pdf ? "preview-container-no-shadow" : "preview-container"}`}
    >
      <div className="preview">
        <div>
          <header
            className="tiptap preview-header"
            dangerouslySetInnerHTML={{ __html: heading }}
          />
          <p className="preview-header mb-[20px] pl-[20px]">
            Last updated on{" "}
            {updatedAt
              ? format(new Date(updatedAt), "PPP")
              : format(new Date(createdAt), "PPP")}
          </p>
        </div>
        <article>
          {sections.map((section, index) => (
            <section
              key={section.id}
              className={`mb-[24px] ${
                index !== sections.length - 1 ? "border-b border-zinc-400" : ""
              } pb-[24px]`}
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
                      <section
                        key={subSection.id}
                        className="relative flex break-inside-avoid justify-between"
                      >
                        <div
                          className="tiptap"
                          dangerouslySetInnerHTML={{
                            __html: subSection.htmlContent || "",
                          }}
                        />
                        <div className="absolute right-0 top-0 mb-0 flex flex-col items-center">
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
                      </section>
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
                        className="flex w-[100%] break-inside-avoid break-after-page flex-row items-stretch justify-between px-[20px] pb-[10px]"
                      >
                        {Array.isArray(subSection.htmlContent) &&
                          subSection.htmlContent.map(
                            (useCase: any, index: number) => {
                              return (
                                <div
                                  key={`${subSection.id}${index}`}
                                  className={`w-[100%] max-w-[445px] ${bgColorMapper[index]} use-cases break-inside-avoid sm:px-[25px] sm:py-[30px]`}
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
                    <section key={subSection.id} className="break-inside-avoid">
                      <div
                        className="tiptap"
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
