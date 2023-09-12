import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Iframe from "react-iframe";

export default function AccordionSurveyContainer() {
  return (
    <AccordionItem value="step-2">
      <AccordionTrigger className="bg-[#EEF0FD] text-sm font-bold leading-normal text-[#364071] hover:bg-[#DFE4FF] data-[state=open]:bg-[#4A558E] data-[state=open]:text-[#F7F8FF]">
        Step 2: Fill out the AI generator information
      </AccordionTrigger>
      <AccordionContent>
        <div
          className="h-[calc(100vh_-_440px)] overflow-y-auto
          md:h-[calc(100vh_-_450px)]"
        >
          <Iframe
            url={process.env.SURVEY_URL as string}
            className="h-full w-full border-0"
          />
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
