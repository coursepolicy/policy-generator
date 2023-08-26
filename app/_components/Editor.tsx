import React, { useEffect, useRef } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export default function Editor({
  content,
  handleOnChanges,
  sectionId,
  subSectionId,
  state,
  sectionIndex,
  subSectionIndex,
  contentIndex,
}: {
  content: string | string[];
  handleOnChanges: (prop: any) => void;
  sectionId?: string;
  subSectionId?: string;
  state: any;
  sectionIndex?: number;
  subSectionIndex?: number;
  contentIndex?: number;
}) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  const htmlString = editor?.getHTML();

  useEffect(() => {
    if (!htmlString) return;

    if (typeof state === "string" && htmlString !== state.trim()) {
      handleOnChanges({ noContent: htmlString || "" });
      return;
    }

    if (!sectionIndex || !subSectionIndex) return;

    if (
      Array.isArray(state) &&
      contentIndex &&
      htmlString !==
        state[sectionIndex].subSections[subSectionIndex].content[
          contentIndex
        ].trim()
    ) {
      handleOnChanges({
        sectionId,
        subSectionId,
        newContent: htmlString || "",
        contentIndex,
      });
    }

    if (
      !Array.isArray(
        state[sectionIndex].subSections[subSectionIndex].content,
      ) &&
      htmlString !==
        state[sectionIndex].subSections[subSectionIndex].content.trim()
    ) {
      handleOnChanges({
        sectionId,
        subSectionId,
        newContent: htmlString || "",
      });
    }
  }, [
    contentIndex,
    handleOnChanges,
    htmlString,
    sectionId,
    sectionIndex,
    state,
    subSectionId,
    subSectionIndex,
  ]);

  if (!editor) {
    return null;
  }

  return <EditorContent editor={editor} />;
}
