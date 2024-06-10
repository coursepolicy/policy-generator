import { TabsContent } from "@/components/ui/tabs";
import CompletedSurveyButton from "./CompletedSurveyButton";
import React from "react";

type Props = React.PropsWithChildren & {
  value: string;
  id: string;
  hgse?: boolean;
};

export default function GeneratePolicyTabContent({
  value,
  id,
  hgse,
  ...rest
}: Props) {
  return (
    <TabsContent value={value} {...rest}>
      <div className="py-4 md:py-0" />
      <div className="grid grid-flow-row px-2 md:w-full md:max-w-[800px]">
        <h2 className="text-lg font-bold leading-normal text-[#4A558E]">
          Step {hgse ? 2 : 3}: Generate your AI Policy
        </h2>
        <div className="py-2" />
        <div className="grid w-full max-w-[800px] grid-flow-row justify-items-center px-2">
          <CompletedSurveyButton uniqueId={id} />
        </div>
      </div>
    </TabsContent>
  );
}
