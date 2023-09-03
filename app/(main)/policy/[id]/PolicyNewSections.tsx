import Image from "next/image";
import addPolicy from "@/public/images/add-policy.svg";
import { Button } from "@/components/ui/button";

type Props = {
  AddNewSection: () => void;
};

export default function AddNewSections({ AddNewSection }: Props) {
  return (
    <section>
      <Button
        variant={"ghost"}
        onClick={AddNewSection}
        className="flex h-[104px] w-[100%] cursor-pointer items-center justify-center border border-dashed border-neutral-400 hover:bg-neutral-100"
      >
        <p>I want to add additional sections of information</p>
        <div>
          <Image alt="plus sign image" src={addPolicy} className="ml-[10px]" />
        </div>
      </Button>
    </section>
  );
}
