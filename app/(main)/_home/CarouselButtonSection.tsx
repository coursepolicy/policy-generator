import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrow from "@/public/images/right-arrow.svg";

export default function CarouselButtonContainer() {
  return (
    <div className="flex justify-evenly">
      <div>
        <Button
          asChild
          className=" flex h-[41px] w-[220px] items-center justify-start gap-2.5 rounded-[100px] border border-[#4A558E]
              px-6 py-2 text-right text-sm font-semibold leading-[25px] text-[#4A558E] sm:mt-[10px] lg:mt-[45px]"
          variant={"outline"}
        >
          <Link href="/blog">
            Read survey insights{" "}
            <Image alt="right pointed arrow" src={rightArrow} />
          </Link>
        </Button>
      </div>
      <div>
        <Button
          asChild
          className=" flex h-[41px] items-center justify-start gap-2.5 rounded-[100px] bg-[#4A558E]
              px-6 py-2 text-right text-sm font-semibold leading-[25px] text-white sm:mt-[10px] lg:mt-[45px]"
          variant={"default"}
        >
          <Link href="/sample">View a sample policy</Link>
        </Button>
      </div>
    </div>
  );
}
