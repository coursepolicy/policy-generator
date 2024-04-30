import CarouselContainer from "./CarouselContainer";
import { Button } from "@/components/ui/button";
import HeadingImage from "./HeadingImage";
import CTAButtonSection from "./CTAButtonSection";
import CopyTextParagraph from "./CopyTextParagraph";
import CopyTextHeader from "./CopyTextHeader";
import MidSectionText from "./MidSectionText";
import MidSectionImages from "./MidSectionImages";
import HomeWorldWideSection from "./HomeWorldWideSection";
import UnitedStatesImage from "./UnitedStatesImage";
import Image from "next/image";
import Link from "next/link";
import rightArrowGreen from "@/public/images/right-arrow-green.svg";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="bg-black">
          <div className="text-md mx-auto flex max-w-[1600px] flex-col items-center py-3 lg:flex-row lg:justify-center">
            <p className="px-[5px] text-center text-[12px] text-white lg:px-0">
              To access CoursePolicy through Harvard Graduate School of
              Education,&nbsp;
            </p>
            <Link className="flex items-center" href="/hgse">
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
        <div className="bg-[#191f3c]">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center text-center lg:flex-row lg:justify-center lg:text-left 2xl:justify-between 2xl:text-left">
            <div className="px-4 lg:ml-[147px] lg:px-0">
              <CopyTextHeader />
              <div className="mt-[20px] flex items-center justify-center lg:justify-between">
                <CopyTextParagraph />
              </div>
              <CTAButtonSection />
            </div>
            <div className="hidden 2xl:block">
              <HeadingImage />
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1600px] justify-center bg-white bg-white pt-[43px]">
          <CarouselContainer />
        </div>
        <div className="bg-[#F6F6F9] pb-[88px]">
          <div className="mx-auto flex max-w-[1600px] flex-col justify-center">
            <MidSectionText />
            <MidSectionImages />
          </div>
        </div>
        <div className="bg-[#191f3c] pb-[105px]">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center px-4 lg:px-0 2xl:flex-row 2xl:justify-between 2xl:text-left">
            <HomeWorldWideSection />
            <div className="hidden 2xl:block">
              <UnitedStatesImage />
            </div>
          </div>
        </div>
      </main>

      <footer
        className="flex items-center justify-center text-center
      sm:mx-0"
      >
        <div className="mb-[120px] grid max-w-[1600px] grid-flow-row gap-2 px-4 lg:px-4 ">
          <h3 className=" mt-[45px] w-[100%] text-[40px] font-bold leading-normal text-[#364071] lg:mt-[105px]">
            Contact Us
          </h3>
          <p className="mt-[25px] text-[16px] font-normal leading-normal text-black">
            Are you a course instructor, student, university admin, or a
            technologist? We would love to hear from you.
          </p>
          <p className="text-[17px]">
            {" "}
            Drop us an email at{" "}
            <Button
              asChild
              variant={"link"}
              className="cursor-pointer p-0 text-blue-500"
            >
              <a
                className="text-sm font-normal leading-normal text-blue-500"
                href="mailto:here@coursepolicy.ai"
                target="_blank"
              >
                here@coursepolicy.ai
              </a>
            </Button>
          </p>
        </div>
      </footer>
    </>
  );
}
