import React from "react";
import { ulid } from "ulid";
import { Tabs, TabsList } from "@/components/ui/tabs";

import TabStep from "./TabStep";
import IntroMessageTabContent from "./IntroMessageTabContent";
import CopyCodeTabContent from "./CopyCodeTabContent";
import IframeTabContent from "./IframeTabContent";
import GeneratePolicyTabContent from "./GeneratePolicyTabContent";

export default function Generate() {
  const uniqueId = ulid();
  return (
    <div>
      <div className="pt-[10px] md:pt-[80px]" />
      <Tabs
        className="flex w-full flex-col items-center justify-center self-center md:flex-row md:items-start md:justify-start md:gap-10 md:self-start"
        defaultValue="step-0"
      >
        <TabsList
          className="grid h-full grid-flow-col justify-around gap-2 bg-neutral-50 
        sm:justify-center sm:justify-items-center md:relative md:h-0 md:grid-flow-row"
        >
          <TabStep stepNumber={1} text="Step 1: Copy the code" />
          <TabStep stepNumber={2} text="Step 2: Fill out information" />
          <TabStep stepNumber={3} text="Step 3: Generate your AI policy" />
        </TabsList>
        <IntroMessageTabContent value="step-0" />
        <CopyCodeTabContent value="step-1" id={uniqueId} />
        <IframeTabContent value="step-2" />
        <GeneratePolicyTabContent value="step-3" id={uniqueId} />
      </Tabs>
    </div>
  );
}
