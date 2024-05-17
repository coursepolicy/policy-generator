import Image from "next/image";
import Link from "next/link";
import rightArrowGreen from "@/public/images/right-arrow-green.svg";

export default function Banner() {
  return (
    <div className="bg-black">
      <div className="text-md mx-auto flex max-w-[1600px] flex-col items-center py-3 lg:flex-row lg:justify-center">
        <p className="px-[5px] text-left text-[12px] text-white lg:px-0 lg:text-center">
          To access the customized CoursePolicy for the Harvard Graduate School
          of Education,&nbsp;click&nbsp;
          <Link className="inline-flex items-center" href="/institution/hgse">
            <span className="text-[12px] text-coursePolicyLightGreen underline">
              here
            </span>
            <span className="ml-[5px]">
              <Image
                alt="right pointed arrow"
                src={rightArrowGreen}
                aria-hidden="true"
              />
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
