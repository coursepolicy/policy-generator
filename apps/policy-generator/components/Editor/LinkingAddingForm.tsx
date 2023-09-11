import { type } from "os";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { ChangeEvent, FormEvent } from "react";

type Props = {
  linkInput: string;
  setHoveringLinkMenu: (isHovering: boolean) => void;
  handleSetLink: (str: string) => void;
  handleSetLinkInput: (str: string) => void;
  handleSetAddingLink: (bool: boolean) => void;
  handleLinkInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function LinkingAddingForm({
  linkInput,
  setHoveringLinkMenu,
  handleSetLink,
  handleSetLinkInput,
  handleSetAddingLink,
  handleLinkInputChange,
}: Props) {
  return (
    <div className="flex ">
      <form
        className=" ml-[5px] flex w-[100px] items-center"
        tabIndex={0}
        onMouseEnter={() => setHoveringLinkMenu(true)}
        onMouseLeave={() => setHoveringLinkMenu(false)}
        onSubmit={(e) => {
          e.preventDefault();
          handleSetLink(linkInput);
          handleSetLinkInput("");
          handleSetAddingLink(false);
        }}
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
  );
}
