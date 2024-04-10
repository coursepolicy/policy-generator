import CarouselContainer from "./CarouselContainer";
import HomeHeadingCopyText from "./HomeHeadingCopyText";
import { Button } from "@/components/ui/button";
import HeadingImage from "./HeadingImage";
import MidSection from "./MidSection";
import HomeWorldWideSection from "./HomeWorldWideSection";
import UnitedStatesImage from "./UnitedStatesImage";

export default function HomePage() {
  return (
    <>
      <main className=" flex  flex-row items-center justify-center bg-[#191f3c]">
        <div className="flex max-w-[1600px]">
          <HomeHeadingCopyText />
          <HeadingImage />
        </div>
      </main>
      {/* <div className="mb-[150px] flex flex-row items-center justify-center">
        <CarouselContainer />
      </div>
      <div>
        <MidSection />
      </div>
      <div className="mb-[150px] flex flex-row items-center justify-center bg-[#191f3c]">
        <div>
          <HomeWorldWideSection />
        </div>
        <div>
          <UnitedStatesImage />
        </div>
      </div>
      <footer
        className=" flex items-center justify-center px-10 text-center
      sm:mx-0"
      >
        <div className="grid grid-flow-row gap-2">
          <h3 className=" w-[100%]  text-3xl font-bold leading-normal text-[#364071]">
            Contact Us
          </h3>
          <p className="text-sm font-normal leading-normal text-black">
            Are you a course instructor, student, university admin, or a
            technologist? We would love to hear from you.
          </p>
          <p>
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
      <div className="pb-[50px]" /> */}
    </>
  );
}
