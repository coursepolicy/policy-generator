import React from "react";
import { v4 as uuidv4 } from "uuid";
import Iframe from "react-iframe";
import NoticeMessage from "./NoticeMessage";
import CompletedSurveyButton from "./CompletedSurveyButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Generate() {
  const uniqueId = uuidv4();
  return (
    <>
      <Accordion type="single" collapsible>
        <AccordionItem value="step-1">
          <AccordionTrigger>Step 1</AccordionTrigger>
          <AccordionContent>
            <NoticeMessage uniqueId={uniqueId} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="step-2">
          <AccordionTrigger>Step 2</AccordionTrigger>
          <AccordionContent>
            <div
              className="h-[calc(100vh_-_400px)] overflow-y-auto
      md:h-[calc(100vh_-_500px)]"
            >
              <Iframe
                url={process.env.SURVEY_URL as string}
                className="h-full w-full border-0"
              />
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="step-3">
          <AccordionTrigger>Step 3</AccordionTrigger>
          <AccordionContent>
            <CompletedSurveyButton uniqueId={uniqueId} />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
