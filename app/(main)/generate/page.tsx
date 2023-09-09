import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Accordion } from "@/components/ui/accordion";
import AccordionCopyCodeContainer from "./AccordionCopyCodeContainer";
import AccordionSurveyContainer from "./AccordionSurveyContainer";
import AccordionGenerateButtonContainer from "./AccordionGenerateButtonContainer";

export default function Generate() {
  const uniqueId = uuidv4();
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
