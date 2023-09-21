"use client";

import { Badge } from "@/components/ui/badge";
import { TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type Props = {
  stepNumber: number;
  hidden?: boolean;
  text: string;
};
export default function TabStep({ stepNumber, hidden, text }: Props) {
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <TabsTrigger
      value={`step-${stepNumber}`}
      className={`
       grid
      min-h-[70px] min-w-[100px] grid-flow-row rounded-none bg-[#EEF0FD]
      text-sm font-bold
      leading-normal text-[#364071]
      hover:bg-[#DFE4FF]
      data-[state=active]:bg-[#4A558E]
      data-[state=active]:text-[#F7F8FF]
      data-[state=active]:shadow-sm sm:min-w-[200px]
      md:min-h-[42px]
      md:min-w-[340px]
      md:grid-flow-col
      md:justify-between [&>div.badge-container>div.badge]:bg-[#C8E9E1]
      [&>div.badge-container>div.badge]:text-[#0AA680]
      [&[data-state=active]>div.badge-container>div.badge]:bg-[#1C7660]
      [&[data-state=active]>div.badge-container>div.badge]:text-[#32BD9B]
      [&[data-state=active]>div.badge-container>svg]:text-[#DFE4FF]
      ${hidden ? "hidden" : ""}`}
      onFocus={(event) => {
        setHasClicked(true);
        return event;
      }}
    >
      <div className="badge-container md:flex md:items-center md:gap-2">
        <span className="p-0 md:hidden">Step {stepNumber}</span>
        <span className="hidden p-0 md:inline">{text}</span>
        {hasClicked && <Badge className="badge text-[10px]">VIEWED</Badge>}
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-chevron-right hidden md:block"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </TabsTrigger>
  );
}
