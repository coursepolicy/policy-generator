import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrowWhite from "@/public/images/right-arrow-white.svg";

export default function CTAButtonSection() {
  return (
    <div className=" lg:my-[30px] lg:mb-[90px] lg:mt-[65px] lg:grid lg:grid-flow-row">
      <div className=" mt-[50px] flex flex-col items-center lg:mb-[8px] lg:mt-[0px] lg:flex-row">
        <Button
          asChild
          className="mb-6 inline-flex items-center justify-center gap-2.5 rounded-[100px] bg-coursePolicyGreen text-sm font-semibold leading-[25px] text-white hover:bg-coursePolicyHoverGreen lg:mb-[0px] lg:mr-4"
        >
          <Link href="/generate">
            Create an AI Policy{" "}
            <Image alt="right pointed arrow" src={rightArrowWhite} />
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          className="mb-[50px] inline-flex  items-center justify-center gap-2.5 rounded-[100px] border border-[#4A558E] bg-transparent text-right text-sm font-semibold leading-[25px] text-white hover:text-[#4A558E] lg:mb-0 lg:ml-[5px] lg:w-auto  2xl:w-[170px]"
        >
          <Link href="/retrieve">View sample policy</Link>
        </Button>
      </div>
    </div>
  );
}
