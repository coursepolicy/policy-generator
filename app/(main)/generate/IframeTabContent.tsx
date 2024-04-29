import { TabsContent } from "@/components/ui/tabs";
import Iframe from "react-iframe";

type Props = {
  id: string;
  value: string;
  survey_url?: string;
};

export default function IframeTabContent({ value, id, survey_url }: Props) {
  // TODO - add error boundary
  if (!survey_url) return (
    <TabsContent value={value}>
      <div className="text-center text-lg text-gray-500 p-4">
        <h2 className="text-6xl">404</h2>
        Oops! We can&apos;t seem to find the page you&apos;re looking for. Please check the URL and try again.
        If you&apos;re still having issues, reach out to our support team for help.
      </div>
    </TabsContent>
  );

  return (
    <TabsContent value={value} className="w-full">
      <Iframe
        url={`${survey_url}?CoursePolicyID=${id}`}
        className="h-[calc(100vh_-_160px)] w-full border-0 md:h-[calc(100vh_-_180px)] md:max-w-[600px]"
      />
    </TabsContent>
  );
}
