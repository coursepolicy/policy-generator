import React from "react";
import { ulid } from "ulid";
import { Accordion } from "@/components/ui/accordion";
import AccordionCopyCodeContainer from "./AccordionCopyCodeContainer";
import AccordionSurveyContainer from "./AccordionSurveyContainer";
import AccordionGenerateButtonContainer from "./AccordionGenerateButtonContainer";

export default function Generate() {
  const uniqueId = ulid();
  return (
    <div className="grid grid-flow-row gap-4">
      <h1 className="pl-2 pt-2 text-xl font-bold leading-normal text-indigo-900 md:pl-0 md:pt-0">
        Generate a policy
      </h1>
      <div className="grid grid-flow-row gap-2">
        <p className="pl-2 text-sm font-normal leading-normal text-black md:pl-0">
          Three simple steps to generate an AI policy for your course.
        </p>
        <Accordion
          type="single"
          collapsible
          className="grid max-w-[821px] grid-flow-row gap-4"
        >
          <AccordionCopyCodeContainer uniqueId={uniqueId} />
          <AccordionSurveyContainer />
          <AccordionGenerateButtonContainer uniqueId={uniqueId} />
        </Accordion>
      </div>
    </div>
  );
}
