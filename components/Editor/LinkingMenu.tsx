"use client";

import { BubbleMenu, Editor } from "@tiptap/react";
import { useCallback, useState } from "react";
import LinkingEditingContainer from "./LinkingEditingContainer";
import LinkingAddingContainer from "./LinkingAddingContainer";

type Props = {
  editor: Editor;
  setIsHovering: (isHovering: boolean) => void;
};

export default function LinkingMenu({ editor, setIsHovering }: Props) {
  const [addingLink, setAddingLink] = useState(false);

  const [hoveringLinkMenu, setHoveringLinkMenu] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  const handleSetAddingLink = (bool: boolean) => {
    setAddingLink(() => bool);
  };

  const handleSetLinkInput = (str: string) => {
    setLinkInput(() => str);
  };

  const handleLinkInputChange = ({ target: { value } }: any) => {
    setLinkInput(() => value);
  };

  const handleSetLink = useCallback(
    (str: string) => {
      if (!editor) return;

      if (str === null) {
        return;
      }

      if (str === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }

      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: str })
        .run();
    },
    [editor],
  );

  return (
    <BubbleMenu className="menu" editor={editor}>
      <div
        onMouseLeave={() => setIsHovering(false)}
        onMouseEnter={() => setIsHovering(true)}
        onBlur={() => {
          if (!hoveringLinkMenu) {
            handleSetAddingLink(false);
            setLinkInput(() => "");
          }
        }}
      >
        {editor.isActive("link") ? (
          <LinkingEditingContainer
            editor={editor}
            setHoveringLinkMenu={setHoveringLinkMenu}
            handleLinkInputChange={handleLinkInputChange}
            linkInput={linkInput}
            handleSetLink={handleSetLink}
            handleSetLinkInput={handleSetLinkInput}
          />
        ) : (
          <LinkingAddingContainer
            addingLink={addingLink}
            setAddingLink={setAddingLink}
            setHoveringLinkMenu={setHoveringLinkMenu}
            handleSetLink={handleSetLink}
            handleSetLinkInput={handleSetLinkInput}
            linkInput={linkInput}
            handleLinkInputChange={handleLinkInputChange}
            handleSetAddingLink={handleSetAddingLink}
          />
        )}
      </div>
    </BubbleMenu>
  );
}
