"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Editor } from "@tiptap/react";

type Props = {
  editor: Editor;
  setHoveringLinkMenu: (isHovering: boolean) => void;
  handleLinkInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  linkInput: string;
  handleSetLink: (str: string) => void;
  handleSetLinkInput: (str: string) => void;
};

export default function LinkingEditingContainer({
  editor,
  setHoveringLinkMenu,
  handleLinkInputChange,
  linkInput,
  handleSetLink,
  handleSetLinkInput,
}: Props) {
  const [editingLink, setEditingLink] = useState(false);

  const handleEditClick = () => {
    handleSetLinkInput(editor?.getAttributes("link").href);
    setEditingLink(() => true);
  };

  const handleDeleteClick = () => {
    editor.chain().focus().unsetLink().run();
    handleSetLinkInput("");
    setEditingLink(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSetLink(linkInput);
    handleSetLinkInput("");
    setEditingLink(() => false);
  };
  return (
    <div
      className={`bubble  flex ${
        editingLink ? "w-[165px]" : "w-[125px]"
      } rounded-[3px]`}
    >
      <div className="relative border-r border-zinc-500">
        <Button
          onClick={handleEditClick}
          className="w-[100%] px-[10px] py-[8px] text-[10px] font-normal leading-normal text-white "
        >
          Edit link
        </Button>
        <div className="triangle-down absolute bottom-[-8px] right-[4px] h-0 w-0" />
      </div>
      {editingLink ? (
        <div className="flex ">
          <form
            className=" ml-[5px] flex w-[100px] items-center"
            tabIndex={0}
            onMouseEnter={() => setHoveringLinkMenu(true)}
            onMouseLeave={() => setHoveringLinkMenu(false)}
            onSubmit={handleSubmit}
          >
            <Input
              onChange={handleLinkInputChange}
              value={linkInput}
              className=" link-input h-[20px] overflow-x-auto bg-neutral-900 pl-[5px] text-[10px] font-normal leading-normal text-white underline"
            />
            <Button
              size={"icon"}
              type="submit"
              className="relative right-[-3px] flex items-center justify-end bg-transparent pr-[4px]"
            >
              ✅
            </Button>
          </form>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Button
            onClick={handleDeleteClick}
            className="w-[100%] px-[10px] py-[8px] text-[10px] font-normal leading-normal text-white "
          >
            Delete link
          </Button>
        </div>
      )}
    </div>
  );
}
