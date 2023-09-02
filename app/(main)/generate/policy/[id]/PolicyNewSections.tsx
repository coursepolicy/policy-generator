import Image from "next/image";
import addPolicy from "@/public/images/add-policy.svg";

type Props = {
  AddNewSection: () => void;
};

export default function AddNewSections({ AddNewSection }: Props) {
  return (
    <section>
      <div
        onClick={AddNewSection}
        className="flex h-[104px] cursor-pointer items-center justify-center border border-dashed border-neutral-400 hover:bg-neutral-100"
      >
        <p>I want to add additional sections of information</p>
        <button>
          <Image alt="plus sign image" src={addPolicy} className="ml-[10px]" />
        </button>
      </div>
    </section>
  );
}
