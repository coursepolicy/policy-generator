import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrowWhite from "@/public/images/right-arrow-white.svg";

export default function CTAButtonSection() {
  return (
    <div className="justify-left my-[30px]  grid grid-flow-row gap-6 md:mb-[90px] md:mt-[65px] md:grid-flow-col md:gap-2">
      <div>
        <Button
          asChild
          className=" inline-flex h-[40px] w-[195px] items-center justify-center gap-2.5 rounded-[100px] 
          bg-coursePolicyGreen text-sm font-semibold leading-[25px] text-white hover:bg-coursePolicyHoverGreen"
        >
          <Link href="/generate">
            Create an AI Policy{" "}
            <Image alt="right pointed arrow" src={rightArrowWhite} />
          </Link>
        </Button>
        <Button
          asChild
          variant={"outline"}
          className="justify-left ml-[22px] inline-flex h-[40px] w-[170px] items-center gap-2.5 rounded-[100px] border border-[#4A558E]
            bg-transparent  text-right text-sm font-semibold leading-[25px] text-white hover:text-[#4A558E]"
        >
          <Link href="/retrieve">View sample policy</Link>
        </Button>
      </div>
    </div>
  );
}
