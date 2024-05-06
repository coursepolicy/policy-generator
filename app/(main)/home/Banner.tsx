import Image from "next/image";
import Link from "next/link";
import rightArrowGreen from "@/public/images/right-arrow-green.svg";

export default function Banner() {
  return (
    <div className="bg-black">
      <div className="text-md mx-auto flex max-w-[1600px] flex-col items-center py-3 lg:flex-row lg:justify-center">
        <p className="px-[5px] text-center text-[12px] text-white lg:px-0">
          To access CoursePolicy through Harvard Graduate School of
          Education,&nbsp;
        </p>
        <Link className="flex items-center" href="/institution/hgse">
          <span className="text-[12px] text-white">click&nbsp;</span>
          <p className="text-[12px] text-coursePolicyLightGreen underline">
            here
          </p>
          <span className="ml-[5px]">
            <Image alt="right pointed arrow" src={rightArrowGreen} />
          </span>
        </Link>
      </div>
    </div>
  );
}
