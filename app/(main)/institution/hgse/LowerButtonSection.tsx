import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrowWhite from "@/public/images/right-arrow-white.svg";

export default function LowerButtonSection() {
  return (
    <div className="lg:mt-[25px]">
      <div className="mt-[50px] flex flex-col px-4 lg:mt-[0px] lg:flex-row lg:px-0">
        <Button
          asChild
          className="mb-6 h-[40px] w-[195px] items-center justify-center gap-2.5 rounded-[100px] bg-[#A41D30] text-sm leading-[25px] text-white hover:bg-coursePolicyHoverGreen lg:mb-[0px] lg:mr-4"
        >
          <Link href="/generate/hgse">
            Create an AI Policy{" "}
            <Image alt="right pointed arrow" src={rightArrowWhite} />
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          className="mb-[50px] h-[40px] w-[195px] items-center justify-center gap-2.5 rounded-[100px] border border-[#4A558E] bg-transparent px-6 text-right text-sm leading-[25px] text-[#4A558E] hover:text-[#4A558E] lg:mb-0 lg:ml-[5px] lg:w-auto"
        >
          <Link href="/policy/sample/hgse">View sample policy</Link>
        </Button>
      </div>
    </div>
  );
}
