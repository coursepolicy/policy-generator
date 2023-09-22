import { TabsContent } from "@/components/ui/tabs";
import Iframe from "react-iframe";

type Props = {
  value: string;
};

export default function IframeTabContent({ value }: Props) {
  return (
    <TabsContent value={value} className="w-full">
      <Iframe
        url={process.env.SURVEY_URL as string}
        className="h-[calc(100vh_-_160px)] w-full border-0 md:h-[calc(100vh_-_180px)]"
      />
    </TabsContent>
  );
}
