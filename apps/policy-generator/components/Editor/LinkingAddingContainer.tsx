import { ChangeEvent } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import LinkingAddingButton from "./LinkingAddingButton";
import LinkingAddingForm from "./LinkingAddingForm";

type Props = {
  addingLink: boolean;
  setAddingLink: (isAdding: boolean) => void;
  setHoveringLinkMenu: (isHovering: boolean) => void;
  handleSetLink: (str: string) => void;
  handleSetLinkInput: (str: string) => void;
  linkInput: string;
  handleLinkInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSetAddingLink: (bool: boolean) => void;
};

export default function LinkingAddingContainer({
  addingLink,
  setAddingLink,
  setHoveringLinkMenu,
  handleSetLink,
  handleSetLinkInput,
  linkInput,
  handleLinkInputChange,
  handleSetAddingLink,
}: Props) {
  return (
    <div
      className={`bubble flex ${
        addingLink ? "w-[165px]" : "w-[60px]"
      } rounded-[3px]`}
    >
      <LinkingAddingButton
        setAddingLink={setAddingLink}
        addingLink={addingLink}
      />
      {addingLink && (
        <LinkingAddingForm
          linkInput={linkInput}
          setHoveringLinkMenu={setHoveringLinkMenu}
          handleSetLink={handleSetLink}
          handleSetLinkInput={handleSetLinkInput}
          handleSetAddingLink={handleSetAddingLink}
          handleLinkInputChange={handleLinkInputChange}
        />
      )}
    </div>
  );
}
