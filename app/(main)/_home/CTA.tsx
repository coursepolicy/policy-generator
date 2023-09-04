import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrowWhite from "@/public/images/right-arrow-white.svg";

export default function CTA() {
  return (
    <div className="my-[60px] grid grid-flow-col gap-6">
      <Button
        asChild
        className="inline-flex h-[41px] w-[199px] items-center justify-start gap-2.5 rounded-[100px] 
         bg-coursePolicyGreen px-6 py-2"
      >
        <Link href="/generate">
          Generate AI Policy{" "}
          <Image alt="right pointed arrow" src={rightArrowWhite} />
        </Link>
      </Button>
      <Button
        asChild
        variant={"outline"}
        className="inline-flex h-[41px] w-[210px] items-start justify-start gap-2.5 rounded-[100px] border border-slate-600
          bg-white px-6 py-2 text-right text-sm font-semibold leading-[25px] text-slate-600"
      >
        <Link href="/existing">Retrieve existing policy</Link>
      </Button>
    </div>
  );
}
