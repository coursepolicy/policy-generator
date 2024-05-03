"use client";

import { Badge } from "@/components/ui/badge";
import { TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

type Props = {
  value: string;
  hidden?: boolean;
  text: string;
  stepNumber: number;
};
export default function TabStep({ value, hidden, text, stepNumber }: Props) {
  const [hasClicked, setHasClicked] = useState(false);
  return (
    <TabsTrigger
      value={value}
      className={`
      grid
      min-h-[70px]
      grow-[1]
      grid-flow-row
      rounded-none
      bg-[#F9F9F9]
      text-sm font-bold
      leading-normal text-[#364071]
      hover:bg-[#DFE4FF]
      data-[state=active]:bg-[#4A558E]
      data-[state=active]:text-[#F7F8FF]
      data-[state=active]:shadow-sm
      md:min-h-[42px]
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
      <div className="flex flex-col md:flex-row md:items-center md:gap-2">
        <span className="p-0 md:hidden">Step {stepNumber}</span>
        <span className="hidden p-0 md:inline">{text}</span>
      </div>
      <div className="badge-container flex">
        <Badge
          className={`badge ${!hasClicked ? "invisible" : ""} ml-2 text-[10px]`}
        >
          VIEWED
        </Badge>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-chevron-right hidden md:block"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </TabsTrigger>
  );
}
