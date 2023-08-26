import React, { useEffect, useRef, useState } from "react";
import autoAnimate from "@formkit/auto-animate";

import { EditorContent, HTMLContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface Props {
  content: string | string[];
  handleOnChanges: (prop: any) => void;
  sectionId?: string;
  subSectionId?: string;
  state: any;
  sectionIndex?: number;
  subSectionIndex?: number;
  contentIndex?: number;
  hideDeleteButton?: boolean;
}

export default function Editor({
  content,
  handleOnChanges,
  sectionId,
  subSectionId,
  state,
  sectionIndex,
  subSectionIndex,
  contentIndex,
  hideDeleteButton = false,
}: Props) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  const [isEditorFocused, setIsEditorFocused] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState(false);
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

  const handleButtoneOnClick = (type: string) => {
    if (type === "save") {
      setIsEditorFocused(false);
      return;
    }
    if (type === "delete") {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this?",
      );

      if (isConfirmed) {
        // Execute your delete logic here.
        console.log("Item deleted!");
      }
      setIsEditorFocused(false);
      return;
    }
  };

  const handleOnDiscard = () => {
    editor?.commands.setContent(savedContent);
    setIsEditorFocused(false);
  };

  useEffect(() => {
    parentRef.current && autoAnimate(parentRef.current, { duration: 100 });
  }, [parentRef]);

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

  useEffect(() => {
    if (!htmlString) return;
    setSavedContent(htmlString);
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
      {isEditorFocused && (
        <div className="mt-[15px] flex justify-between">
          <div className="flex">
            <button
              onClick={() => handleButtoneOnClick("save")}
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
                onClick={() => handleButtoneOnClick("delete")}
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
