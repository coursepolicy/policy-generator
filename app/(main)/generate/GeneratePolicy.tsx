"use client";
import React from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { Tabs, TabsList } from "@/components/ui/tabs";
import TabStep from "./TabStep";

export type Tab = {
  id: string;
  label: string;
};

export type IProps = { tabs: Tab[]; children: React.ReactNode };

export default function GeneratePolicy({ tabs, children }: IProps) {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <div>
      <div className="pt-[10px] md:pt-[80px]" />
      <Tabs
        className=" grid w-full  md:flex md:flex-row md:items-start md:justify-start md:gap-10 md:self-start"
        defaultValue="initial"
        orientation={isSmallDevice ? "horizontal" : "vertical"}
      >
        <TabsList
          className="flex h-full gap-2  bg-neutral-50 
        md:relative md:grid md:h-0 md:grid-flow-row md:justify-around md:gap-2"
        >
          {tabs.map((tab, index) => (
            <TabStep
              key={tab.id}
              value={tab.id}
              text={tab.label}
              stepNumber={index}
            />
          ))}
        </TabsList>
        {children}
      </Tabs>
    </div>
  );
}
