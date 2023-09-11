import React from "react";
import { ulid } from "ulid";
import { Accordion } from "@/components/ui/accordion";
import AccordionCopyCodeContainer from "./AccordionCopyCodeContainer";
import AccordionSurveyContainer from "./AccordionSurveyContainer";
import AccordionGenerateButtonContainer from "./AccordionGenerateButtonContainer";

export default function Generate() {
  const uniqueId = ulid();
  return (
    <Accordion
      type="single"
      collapsible
      className="grid max-w-[821px] grid-flow-row gap-4"
    >
      <AccordionCopyCodeContainer uniqueId={uniqueId} />
      <AccordionSurveyContainer />
      <AccordionGenerateButtonContainer uniqueId={uniqueId} />
    </Accordion>
  );
}
