import { TabsContent } from "@/components/ui/tabs";

type Props = {
  value: string;
};

export default function IntroMessageTabContent({ value }: Props) {
  return (
    <TabsContent value={value}>
      <div className="grid grid-flow-row px-2 md:w-full md:max-w-[800px]">
        <h1 className=" text-2xl font-bold leading-normal text-[#4A558E]">
          Generate a Policy
        </h1>
        <p className="mt-4">
          To get started, click on the left hand side of the screen to access
          your 3 step menu.
        </p>
      </div>
    </TabsContent>
  );
}
