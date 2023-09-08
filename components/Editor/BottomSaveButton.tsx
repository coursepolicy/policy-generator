"use client";

import { Button } from "../ui/button";

type Props = {
  handleOnSave: () => Promise<void>;
  loading: boolean;
  setIsHovering: (isHovering: boolean) => void;
};

export default function BottomSaveButton({
  setIsHovering,
  handleOnSave,
  loading,
}: Props) {
  return (
    <div>
      <Button
        onClick={handleOnSave}
        loading={loading}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{
          border: "0.50px #252D54 solid",
        }}
        className=" mr-[8px] inline-flex h-[30px] w-[105px] items-center justify-center gap-1 rounded-[3px]
        bg-[#4A558E] px-2.5 py-[3px] hover:bg-[#364071]"
      >
        <p className="text-xs font-bold leading-normal text-white">
          Save changes
        </p>
      </Button>
    </div>
  );
}
