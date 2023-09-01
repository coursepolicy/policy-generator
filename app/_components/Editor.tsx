"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import autoAnimate from "@formkit/auto-animate";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, HTMLContent, useEditor } from "@tiptap/react";
import { AiPolicy, PolicySection, PolicySections } from "../_utils";
import { isString } from "lodash";

interface Props {
  content: string | string[];

  sectionId?: string;
  subSectionId?: string;
  heading?: AiPolicy["heading"];
  sections?: AiPolicy["sections"];
  sectionIndex?: number;
  subSectionIndex?: number;
  contentIndex?: number;
  hideDeleteButton?: boolean;
  handleHeadingOnChanges?: (heading: AiPolicy["heading"]) => void;
  handleSectionsOnChanges?: (heading: AiPolicy["sections"]) => void;
  handleUpdatePolicy: () => Promise<void>;
  handleDeleteSection: (sectionId: string) => void;
  handleDeleteSubSection: (
    sectionId: string,
    subSectionId: string,
    sectionIndex: number,
  ) => void;
}

export default function Editor({
  content,
  handleHeadingOnChanges,
  handleSectionsOnChanges,
  sectionId,
  subSectionId,
  heading,
  sections,
  sectionIndex,
  subSectionIndex,
  contentIndex,
  handleUpdatePolicy,
  handleDeleteSection,
  handleDeleteSubSection,
  hideDeleteButton = false,
}: Props) {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Highlight,

      Link.configure({
        HTMLAttributes: {
          class: "editor-links",
        },
        protocols: ["mailto"],
      }),
    ],
    content,
  });

  const [isEditorFocused, setIsEditorFocused] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState(false);
  const [addingLink, setAddingLink] = useState(false);
  const [editingLink, setEditingLink] = useState(true);
  const [linked, setLinked] = useState(true);
  const parentRef = useRef(null);

  const htmlString = editor?.getHTML();

  const [savedContent, setSavedContent] = useState<HTMLContent>(
    htmlString as HTMLContent,
  );

  const handleEditorOnFocus = ({ target }: React.FocusEvent<HTMLElement>) => {
    if (target.closest(".tiptap")) {
      setIsEditorFocused(true);
    }
  };

  const handleEditorOnBlur = ({ target }: React.FocusEvent<HTMLElement>) => {
    if (!isHovering && target.closest(".tiptap")) {
      setIsEditorFocused(false);
    }
  };

  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this?");
    if (!isConfirmed) return;
    if (!sectionId || !sectionIndex) return;

    if (!subSectionId) {
      handleDeleteSection(sectionId);
      setIsEditorFocused(false);
      return;
    }

    handleDeleteSubSection(sectionId, subSectionId, sectionIndex);
    setIsEditorFocused(false);
  };

  const handleOnDiscard = () => {
    editor?.commands.setContent(savedContent);
    setIsEditorFocused(false);
  };

  const handleOnSave = async () => {
    if (!htmlString) return;

    await handleUpdatePolicy();
    setSavedContent(htmlString);
    setIsEditorFocused(false);
  };

  const handleArraySectionChanges = useCallback(() => {
    if (
      !handleSectionsOnChanges ||
      !sections ||
      contentIndex === undefined ||
      !htmlString
    )
      return;
    const newSections: AiPolicy["sections"] = sections.map(
      (section: PolicySection) => {
        if (section.id === sectionId) {
          return {
            ...section,
            children: section.children
              ? section.children.map((subSection: PolicySection) => {
                  const { id, htmlContent } = subSection;
                  if (
                    id === subSectionId &&
                    htmlContent &&
                    Array.isArray(htmlContent)
                  ) {
                    const newHtmlContent: string[] = htmlContent.map(
                      (content, idx) => {
                        if (idx === contentIndex) {
                          return htmlString;
                        }
                        return content;
                      },
                    );

                    return {
                      ...subSection,
                      htmlContent: newHtmlContent,
                    };
                  }
                  return subSection;
                })
              : [],
          };
        }
        return section;
      },
    );
    handleSectionsOnChanges(newSections);
  }, [
    contentIndex,
    handleSectionsOnChanges,
    htmlString,
    sectionId,
    sections,
    subSectionId,
  ]);

  const handleStringSectionChanges = useCallback(() => {
    if (!handleSectionsOnChanges || !sections) return;
    if (!sections) return;
    const newSections: AiPolicy["sections"] = sections.map(
      (section: PolicySection) => {
        if (section.id === sectionId) {
          return {
            ...section,
            children: section.children
              ? section.children.map((subSection: PolicySection) => {
                  const { id, htmlContent } = subSection;
                  if (
                    id === subSectionId &&
                    htmlContent &&
                    Array.isArray(htmlContent)
                  ) {
                    return {
                      ...subSection,
                      htmlContent: htmlString,
                    };
                  }
                  return subSection;
                })
              : [],
          };
        }
        return section;
      },
    );
    handleSectionsOnChanges(newSections);
  }, [handleSectionsOnChanges, htmlString, sectionId, sections, subSectionId]);

  const handleStringHeadingChanges = useCallback(() => {
    if (
      !htmlString ||
      !handleHeadingOnChanges ||
      !heading ||
      htmlString === heading
    )
      return;
    handleHeadingOnChanges(htmlString);
  }, [handleHeadingOnChanges, heading, htmlString]);

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current, { duration: 175 });
  }, [parentRef]);

  useEffect(() => {
    handleStringHeadingChanges();
    handleStringSectionChanges();
    handleArraySectionChanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [htmlString]);

  useEffect(() => {
    if (!htmlString) return;
    setSavedContent(() => htmlString);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [htmlString ? null : htmlString]); // lmao what a pattern

  if (!editor) {
    return null;
  }

  return (
    <div
      className="editor-container"
      onBlur={handleEditorOnBlur}
      onFocus={handleEditorOnFocus}
      ref={parentRef}
    >
      <EditorContent editor={editor} />
      {linked && (
        <div
          className={`bubble relative flex ${
            editingLink ? "w-[165px]" : "w-[125px]"
          } rounded-[3px]`}
        >
          <div className=" border-r border-zinc-500">
            <button
              onClick={() => {
                setEditingLink(true);
              }}
              className="w-[100%] px-[10px] py-[8px] text-[10px] font-normal leading-normal text-white "
            >
              Edit link
            </button>
          </div>
          {editingLink ? (
            <div className="flex ">
              <div
                className=" ml-[5px] flex w-[100px] items-center"
                tabIndex={0}
              >
                <input className=" link-input h-[20px] overflow-x-auto bg-neutral-900 pl-[5px] text-[10px] font-normal leading-normal text-white underline" />
                <button
                  onClick={() => {
                    setEditingLink(false);
                    setLinked(true);
                  }}
                  className="flex items-center justify-end pl-[3px] text-xs font-normal leading-normal text-white"
                >
                  ✅
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <button
                onClick={() => {
                  setLinked(false);
                }}
                className="w-[100%] px-[10px] py-[8px] text-[10px] font-normal leading-normal text-white "
              >
                Delete link
              </button>
            </div>
          )}

          <div
            className={`triangle-down absolute bottom-[-8px] ${
              editingLink ? "right-[55px]" : "right-[4px]"
            } h-0 w-0`}
          />
        </div>
      )}
      {!linked && (
        <div
          className={`bubble relative flex ${
            addingLink ? "w-[165px]" : "w-[60px]"
          } rounded-[3px]`}
        >
          <div
            className={`flex items-center justify-center ${
              addingLink ? "border-r border-zinc-500" : ""
            }`}
          >
            <button
              onClick={() => {
                setAddingLink(true);
              }}
              className="w-[100%] px-[10px] py-[8px] text-[10px] font-normal leading-normal text-white "
            >
              Add link
            </button>
          </div>
          {addingLink && (
            <div className="flex ">
              <div
                className=" ml-[5px] flex w-[100px] items-center"
                tabIndex={0}
              >
                <input className=" link-input h-[20px] overflow-x-auto bg-neutral-900 pl-[5px] text-[10px] font-normal leading-normal text-white underline" />
                <button
                  onClick={() => {
                    setAddingLink(false);
                    setLinked(true);
                  }}
                  className="flex items-center justify-end pl-[3px] text-xs font-normal leading-normal text-white"
                >
                  ✅
                </button>
              </div>
            </div>
          )}
          <div
            className={`triangle-down absolute bottom-[-8px] ${
              addingLink ? "right-[55px]" : "right-[4px]"
            } h-0 w-0`}
          />
        </div>
      )}
      {isEditorFocused && (
        <div className="mt-[15px] flex justify-between">
          <div className="flex">
            <button
              onClick={handleOnSave}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{
                background: "#4A558E",
                border: "0.50px #252D54 solid",
              }}
              className="mr-[8px] inline-flex h-[30px] w-[105px] items-center justify-center gap-1 rounded-[3px] px-2.5 py-[3px]"
            >
              <p className="text-xs font-bold leading-normal text-white">
                Save changes
              </p>
            </button>

            <div>
              <button
                onClick={handleOnDiscard}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{ border: "0.50px #4A558E solid" }}
                className="inline-flex h-[30px] w-[65px] items-center justify-center gap-1 rounded-[3px] px-2.5 py-[3px]"
              >
                <p
                  style={{ color: "#364071" }}
                  className="text-xs font-bold leading-normal text-indigo-900"
                >
                  Discard
                </p>
              </button>
            </div>
          </div>
          {!hideDeleteButton && (
            <div>
              <button
                onClick={handleDelete}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="text-right text-xs font-normal leading-normal text-zinc-500 underline"
              >
                delete section
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
