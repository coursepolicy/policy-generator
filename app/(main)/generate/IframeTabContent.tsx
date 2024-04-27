import { TabsContent } from "@/components/ui/tabs";
import Iframe from "react-iframe";

type Props = {
  id: string;
  value: string;
};

export default function IframeTabContent({ value, id }: Props) {
  return (
    <TabsContent value={value} className="w-full">
      <Iframe
        url={`${process.env.SURVEY_URL}?CoursePolicyID=${id}`}
        className="h-[calc(100vh_-_160px)] w-full border-0 md:h-[calc(100vh_-_180px)] md:max-w-[600px]"
      />
    </TabsContent>
  );
}
