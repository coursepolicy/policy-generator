"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import StarterKit from "@tiptap/starter-kit";
import { EditorContent, HTMLContent, useEditor } from "@tiptap/react";
import { AiPolicy, PolicySection } from "../../lib";
import BottomBar from "./BottomBar";
import LinkingMenu from "./LinkingMenu";

interface Props {
  content: string;

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
  noChanges?: boolean;
  isLoading: boolean;
  useCaseBgColor?: string;
}

export function Editor({
  content,
  handleHeadingOnChanges,
  handleSectionsOnChanges,
  sectionId,
  subSectionId,
  heading,
  sections,
  sectionIndex,
  contentIndex,
  handleUpdatePolicy,
  handleDeleteSection,
  handleDeleteSubSection,
  isLoading,
  useCaseBgColor,
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
  const [parentRef] = useAutoAnimate({ duration: 100, easing: "ease-in-out" });

  const htmlString = editor?.getHTML();

  const [savedContent, setSavedContent] = useState<HTMLContent>(content);

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
    if (!sectionId || sectionIndex === undefined) return;

    if (!subSectionId) {
      handleDeleteSection(sectionId);
      setIsEditorFocused(() => false);
      return;
    }

    handleDeleteSubSection(sectionId, subSectionId, sectionIndex);
    setIsEditorFocused(() => false);
  };

  const handleOnDiscard = () => {
    editor?.commands.setContent(savedContent);
    setIsEditorFocused(() => false);
  };

  const handleOnSave = async () => {
    if (!htmlString) return;

    await handleUpdatePolicy();
    setSavedContent(() => htmlString);
    setIsEditorFocused(() => false);
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
                    !Array.isArray(htmlContent)
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
    if (!editor || !htmlString) return;
    handleStringHeadingChanges();
    handleStringSectionChanges();
    handleArraySectionChanges();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [htmlString]);

  if (!editor) {
    return null;
  }

  return (
    <div
      className={`editor-container hover:shadow-shadow-on-edit ${
        isEditorFocused
          ? "shadow-shadow-on-edit"
          : "hover:shadow-shadow-on-edit"
      }`}
      onBlur={handleEditorOnBlur}
      onFocus={handleEditorOnFocus}
      ref={parentRef}
    >
      <LinkingMenu editor={editor} setIsHovering={setIsHovering} />
      <EditorContent editor={editor} />
      {isEditorFocused && (
        <BottomBar
          handleOnSave={handleOnSave}
          loading={isLoading}
          setIsHovering={setIsHovering}
          handleOnDiscard={handleOnDiscard}
          hideDeleteButton={hideDeleteButton}
          handleDelete={handleDelete}
          useCaseBgColor={useCaseBgColor}
        />
      )}
    </div>
  );
}
