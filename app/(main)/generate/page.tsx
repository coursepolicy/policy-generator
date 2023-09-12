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
      <h1 className="text-xl font-bold leading-normal text-indigo-900">
        Generate a policy
      </h1>
      <div className="grid grid-flow-row gap-2">
        <p className="text-sm font-normal leading-normal text-black">
          Some brief text about this to provide context. Some brief text about
          this to provide context.
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
