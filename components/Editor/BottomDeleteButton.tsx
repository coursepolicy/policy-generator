"use client";

import { Button } from "../ui/button";

type Props = {
  handleDelete: () => void;
  setIsHovering: (isHovering: boolean) => void;
};

export default function BottomDeleteButton({
  handleDelete,
  setIsHovering,
}: Props) {
  return (
    <div className="absolute bottom-[10px] right-0">
      <Button
        variant={"link"}
        onClick={handleDelete}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="text-right text-xs font-normal leading-normal text-zinc-500 underline"
      >
        delete section
      </Button>
    </div>
  );
}
