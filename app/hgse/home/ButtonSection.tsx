import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrowWhite from "@/public/images/right-arrow-white.svg";

export default function ButtonSection() {
  return (
    <div className="lg:mt-[35px] lg:grid lg:grid-flow-row">
      <div className="mt-[50px] flex flex-col items-center lg:mt-[0px] lg:flex-row">
        <Button
          asChild
          className="mb-6 inline-flex h-[40px] w-[195px] items-center justify-center gap-2.5 rounded-[100px] bg-[#A41D30] text-sm font-semibold leading-[25px] text-white hover:bg-coursePolicyHoverGreen lg:mb-[0px] lg:mr-4"
        >
          <Link href="/generate">
            Create an AI Policy{" "}
            <Image alt="right pointed arrow" src={rightArrowWhite} />
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          className="mb-[50px] inline-flex h-[40px] w-[195px] items-center justify-center gap-2.5 rounded-[100px] border border-[#4A558E] bg-transparent text-right text-sm leading-[25px] text-[#4A558E] hover:text-[#4A558E] lg:mb-0 lg:ml-[5px] lg:w-auto"
        >
          <Link href="/retrieve">View sample policy</Link>
        </Button>
      </div>
    </div>
  );
}
