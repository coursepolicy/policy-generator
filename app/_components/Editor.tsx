import React, { useEffect } from "react";
import Heading from "@tiptap/extension-heading";
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
}: {
  content: string;
  handleOnChanges: (prop: any) => void;
  sectionId?: string;
  subSectionId?: string;
  state: any;
  sectionIndex?: number;
  subSectionIndex?: number;
}) {
  const editor = useEditor({
    extensions: [StarterKit, Heading.configure({ levels: [1, 2, 3] })],
    content,
  });

  const htmlString = editor?.getHTML();

  useEffect(() => {
    if (!htmlString) return;

    if (typeof state === "string" && htmlString !== state.trim()) {
      handleOnChanges({ noContent: htmlString || "" });
      return;
    }
    if (
      sectionIndex &&
      subSectionIndex &&
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
