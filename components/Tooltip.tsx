import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function Tooltip() {
  const [hidden, setHidden] = useState(false);

  const removeTooltip = () => {
    setHidden(true);
  };

  return hidden ? null : (
    <div className="flex min-h-[59px] w-[100%] items-center justify-between rounded-[3px] bg-[#3284ff] pl-[20px] md:mb-[25px] md:ml-[20px] md:mt-[50px] md:w-[96%]">
      <div className="flex flex-col">
        <span className="text-xs font-bold leading-normal text-white">
          INSTRUCTIONS
        </span>
        <span className="text-xs font-normal leading-normal text-white">
          To make modifications to your AI policy, try clicking on a section to
          start editing the content.
        </span>
      </div>
      <button className="mb-4 p-2 text-white" onClick={removeTooltip}>
        <Cross2Icon className="aspect-auto" />
      </button>
    </div>
  );
}
