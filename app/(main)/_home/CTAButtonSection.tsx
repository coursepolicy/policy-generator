import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrowWhite from "@/public/images/right-arrow-white.svg";

export default function CTAButtonSection() {
  return (
    <div className="my-[30px] grid grid-flow-row justify-center gap-6 md:mb-[90px] md:mt-[30px] md:grid-flow-col md:gap-4">
      <Button
        asChild
        className="inline-flex h-[41px] w-[210px] items-center justify-center gap-2.5 rounded-[100px] 
         bg-coursePolicyGreen px-6 py-2 text-sm font-semibold leading-[25px] text-white"
      >
        <Link href="/generate">
          Generate AI Policy{" "}
          <Image alt="right pointed arrow" src={rightArrowWhite} />
        </Link>
      </Button>
      <Button
        asChild
        variant={"outline"}
        className="inline-flex h-[41px] w-[210px] items-center justify-center gap-2.5 rounded-[100px] border border-slate-600
          bg-white px-6 py-2 text-right text-sm font-semibold leading-[25px] text-slate-600"
      >
        <Link href="/existing">Retrieve existing policy</Link>
      </Button>
    </div>
  );
}