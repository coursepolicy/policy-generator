import React from "react";
import { ulid } from "ulid";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import Iframe from "react-iframe";
import CompletedSurveyButton from "./CompletedSurveyButton";

import TabStep from "./TabStep";
import NoticeMessage from "./NoticeMessage";

export default function Generate() {
  const uniqueId = ulid();
  return (
    <div>
      <div className="pt-[20px] md:pt-[80px]" />
      <Tabs
        className="grid grid-flow-row  md:relative md:grid-flow-col md:justify-start md:gap-10 md:px-4"
        defaultValue="step-0"
      >
        <TabsList className="grid h-full grid-flow-col justify-around gap-2 bg-neutral-50 sm:justify-center sm:justify-items-center md:relative md:h-0 md:grid-flow-row">
          <TabStep stepNumber={1} text="Step 1: Copy a code" />
          <TabStep stepNumber={2} text="Step 2: Fill out information" />
          <TabStep stepNumber={3} text="Step 3: generate your AI policy" />
        </TabsList>
        <TabsContent value="step-0">
          <div className="grid grid-flow-row px-2 md:w-full md:max-w-[800px]">
            <h1 className=" text-2xl font-bold leading-normal text-[#4A558E]">
              Generate a Policy
            </h1>
            <p className="mt-4">
              To get started, click on the left hand side of the screen to
              access your 3 step menu.
            </p>
          </div>
        </TabsContent>
        <TabsContent value="step-1">
          <div className="py-4 md:py-0" />
          <div className="grid grid-flow-row px-2 md:w-full md:max-w-[800px]">
            <h2 className="text-lg font-bold leading-normal text-[#4A558E]">
              Step 1: Copy your uniquely configured code
            </h2>
            <p className="mt-4">
              Please copy and save the unique ID for your course’s AI policy.
              This code will be used to retrieve your policy for making any
              future updates. You can email the code to yourself or make a note
              of it.
            </p>
            <NoticeMessage uniqueId={uniqueId} />
          </div>
        </TabsContent>
        <TabsContent value="step-2">
          <Iframe
            url={process.env.SURVEY_URL as string}
            className="h-[calc(100vh_-_160px)] w-full border-0 md:h-[calc(100vh_-_180px)] md:w-[500px] lg:w-[715px]"
          />
        </TabsContent>
        <TabsContent value="step-3">
          <div className="py-4 md:py-0" />
          <div className=" grid grid-flow-row justify-items-center px-2 md:w-full md:max-w-[800px]">
            <CompletedSurveyButton uniqueId={uniqueId} />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
