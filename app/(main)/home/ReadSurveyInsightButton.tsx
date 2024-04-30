import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import rightArrow from "@/public/images/right-arrow.svg";

export default function ReadSurvayInsightButton() {
  return (
    <div className="w-[205px]">
      <Button
        asChild
        className="mb-[5px] flex h-[41px] items-center justify-start gap-2.5 rounded-[100px] border border-[#4A558E]
                text-right text-sm font-semibold leading-[25px] text-[#4A558E] hover:text-[#4A558E] sm:mt-[10px]"
        variant={"outline"}
      >
        <Link href="/blog">
          Read survey insights{" "}
          <Image alt="right pointed arrow" src={rightArrow} />
        </Link>
      </Button>
    </div>
  );
}
