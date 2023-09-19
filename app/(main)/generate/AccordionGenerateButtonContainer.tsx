import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompletedSurveyButton from "./CompletedSurveyButton";

type Props = {
  uniqueId: string;
};

export default function AccordionGenerateButtonContainer({ uniqueId }: Props) {
  return (
    <AccordionItem value="step-3">
      <AccordionTrigger className="bg-[#EEF0FD] text-sm font-bold leading-normal text-[#364071] hover:bg-[#DFE4FF] data-[state=open]:bg-[#4A558E] data-[state=open]:text-[#F7F8FF]">
        Step 3: Edit and export your policy
      </AccordionTrigger>
      <AccordionContent>
        <CompletedSurveyButton uniqueId={uniqueId} />
      </AccordionContent>
    </AccordionItem>
  );
}
