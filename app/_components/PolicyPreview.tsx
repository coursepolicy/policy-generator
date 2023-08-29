import React from "react";
import { CourseAiPolicyResponse } from "../_utils/types";

interface Props {
  data: CourseAiPolicyResponse;
}
export default async function Preview({ data: { content, header } }: Props) {
  return (
    <main className="preview-container">
      <div className="preview">
        <header
          className="tiptap preview-header"
          dangerouslySetInnerHTML={{ __html: header }}
        />
        <article>
          {content.map((section: any) => (
            <section
              key={section.id}
              className="mb-[24px] border-b border-zinc-400 pb-[24px]"
            >
              {section.subSections.map((subSection: any) => {
                const { miscData, subSectionTitle } = subSection || {};
                if (
                  miscData?.overallPolicy &&
                  subSectionTitle === "Introduction"
                ) {
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
                      className="relative flex flex-col-reverse  justify-between"
                    >
                      <div
                        className="tiptap"
                        dangerouslySetInnerHTML={{ __html: subSection.content }}
                      />
                      <div className="absolute right-0  top-0  mb-0 flex flex-row items-center justify-between">
                        <p className="text-xs font-bold leading-normal text-stone-500">
                          Overall Generative AI Policy:
                        </p>
                        <div
                          className={`inline-flex h-7 w-[200px] items-center justify-center gap-2.5 ${
                            colorMapper[miscData?.overallPolicy]
                          } ml-[12px] px-3 py-0.5`}
                        >
                          <p className="text-center text-xs font-bold leading-normal text-black">
                            {miscData?.overallPolicy}
                          </p>
                        </div>
                      </div>
                    </section>
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
                    <section
                      key={subSection.id}
                      className="flex w-[100%] flex-row items-start justify-between px-[20px] py-[24px]"
                    >
                      {Array.isArray(subSection.content) &&
                        subSection.content.map(
                          (useCase: any, index: number) => {
                            return (
                              <div
                                key={`${subSection.id}${index}`}
                                className={`h-[100%] w-[100%] max-w-[445px] ${bgColorMapper[index]} use-cases px-[25px] py-[30px]`}
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
                      className="tiptap"
                      dangerouslySetInnerHTML={{
                        __html: subSection.content,
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
function getPolicyData(
  id: string,
):
  | { data: CourseAiPolicyResponse }
  | PromiseLike<{ data: CourseAiPolicyResponse }> {
  throw new Error("Function not implemented.");
}
