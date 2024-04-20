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

export default function HomePage() {
  return (
    <>
      <main className="bg-[#191f3c]">
        <div className="mx-auto flex max-w-[1600px] justify-between">
          <div className="ml-[147px]">
            <CopyTextHeader />
            <div className="flex md:mt-[20px]">
              <CopyTextParagraph />
            </div>
            <CTAButtonSection />
          </div>
          <HeadingImage />
        </div>
      </main>
      <div className="mx-auto flex max-w-[1600px] justify-center bg-white pt-[43px]">
        <CarouselContainer />
      </div>
      <div className="bg-[#F6F6F9] pb-[88px]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-center">
          <MidSectionText />
          <MidSectionImages />
        </div>
      </div>
      <div className="bg-[#191f3c] pb-[105px]">
        <div className="mx-auto flex max-w-[1600px] justify-between">
          <HomeWorldWideSection />
          <UnitedStatesImage />
        </div>
      </div>
      <footer
        className="flex items-center justify-center text-center
      sm:mx-0"
      >
        <div className="grid max-w-[1600px] grid-flow-row gap-2">
          <h3 className="mt-[105px] w-[100%]  text-[40px] font-bold leading-normal text-[#364071]">
            Contact Us
          </h3>
          <p className="mt-[25px] text-[16px] font-normal leading-normal text-black">
            Are you a course instructor, student, university admin, or a
            technologist? We would love to hear from you.
          </p>
          <p className="mt-[-19px] text-[17px]">
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
