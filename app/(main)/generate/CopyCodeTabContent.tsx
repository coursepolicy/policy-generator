import { TabsContent } from "@/components/ui/tabs";
import NoticeMessage from "./NoticeMessage";

type Props = React.PropsWithChildren & {
  value: string;
  id: string;
};

export default function CopyCodeTabContent({ value, id, ...props }: Props) {
  return (
    <TabsContent value={value} {...props}>
      <div className="py-4 md:py-0" />
      <div className="grid grid-flow-row px-2 md:w-full md:max-w-[800px]">
        <h2 className="text-lg font-bold leading-normal text-[#4A558E]">
          Step 1: Copy your uniquely configured code
        </h2>
        <p className="mt-4">
          Please copy and save the unique ID for your course’s AI policy. This
          code will be used to retrieve your policy for making any future
          updates. You can email the code to yourself or make a note of it.
        </p>
        <NoticeMessage uniqueId={id} />
      </div>
    </TabsContent>
  );
}
