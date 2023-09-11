import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import NoticeMessage from "./NoticeMessage";

type Props = {
  uniqueId: string;
};

export default function AccordionCopyCodeContainer({ uniqueId }: Props) {
  return (
    <AccordionItem value="step-1">
      <AccordionTrigger className="bg-[#EEF0FD] text-sm font-bold leading-normal text-[#364071] hover:bg-[#DFE4FF] data-[state=open]:bg-[#4A558E] data-[state=open]:text-[#F7F8FF]">
        Step 1: Copy your uniquely configured code
      </AccordionTrigger>
      <AccordionContent className="md:ml-9">
        <p className="mt-4">
          Please copy and save the unique ID for your AI course policy. more
          information goes here more information goes heremore information goes
          heremore information goes here
        </p>
        <NoticeMessage uniqueId={uniqueId} className="md:max-w-[725px]" />
      </AccordionContent>
    </AccordionItem>
  );
}
