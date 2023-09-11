"use client";

import { Button } from "../ui/button";

type Props = {
  handleOnDiscard: () => void;
  setIsHovering: (isHovering: boolean) => void;
};

export default function BottomDiscardButton({
  setIsHovering,
  handleOnDiscard,
}: Props) {
  return (
    <div>
      <Button
        variant={"outline"}
        onClick={handleOnDiscard}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ border: "0.50px #4A558E solid" }}
        className="inline-flex h-[30px] w-[65px] items-center justify-center gap-1 rounded-[3px] px-2.5 py-[3px] text-[#4A558E] hover:text-[#4A558E]"
      >
        <p
          style={{ color: "#4A558E" }}
          className="hove text-xs font-bold leading-normal text-[#4A558E] hover:text-[#4A558E]"
        >
          Discard
        </p>
      </Button>
    </div>
  );
}
