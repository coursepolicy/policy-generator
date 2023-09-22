import { TabsContent } from "@/components/ui/tabs";
import CompletedSurveyButton from "./CompletedSurveyButton";
import React from "react";

type Props = React.PropsWithChildren & {
  value: string;
  id: string;
};

export default function GeneratePolicyTabContent({
  value,
  id,
  ...props
}: Props) {
  return (
    <TabsContent value={value} {...props}>
      <div className="py-4 md:py-0" />
      <div className="grid w-full max-w-[800px] grid-flow-row justify-items-center px-2">
        <CompletedSurveyButton uniqueId={id} />
      </div>
    </TabsContent>
  );
}
