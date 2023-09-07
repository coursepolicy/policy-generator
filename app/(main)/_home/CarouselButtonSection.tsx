import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrow from "@/public/images/right-arrow.svg";

export default function CarouselButtonSection() {
  return (
    <div
      className="gap- grid grid-flow-row items-center
     gap-3 sm:justify-center md:grid-flow-col md:justify-start md:gap-7"
    >
      <div>
        <Button
          asChild
          className=" flex h-[41px] w-[220px] items-center justify-start gap-2.5 rounded-[100px] border border-[#4A558E]
              px-6 py-2 text-right text-sm font-semibold leading-[25px] text-[#4A558E] hover:text-[#4A558E] sm:mt-[10px]"
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
          className=" flex h-[41px] w-[220px] items-center justify-start gap-2.5 rounded-[100px] bg-[#4A558E] px-6
              py-2 text-right text-sm font-semibold leading-[25px] text-white hover:bg-[#364071] sm:mt-[10px]"
          variant={"default"}
        >
          <Link href="/sample">View a sample policy</Link>
        </Button>
      </div>
    </div>
  );
}
