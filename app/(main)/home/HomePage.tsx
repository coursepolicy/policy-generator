import CTAButtonSection from "./CTAButtonSection";
import CarouselContainer from "./CarouselContainer";
import HomeHeadingCopyText from "./HomeHeadingCopyText";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <main className="mb-[150px] flex flex-col items-center justify-center">
        <HomeHeadingCopyText />
        <CTAButtonSection />
        <CarouselContainer />
      </main>
      <footer
        className="flex justify-center px-10
      sm:mx-0"
      >
        <div className="grid grid-flow-row gap-2">
          <h3 className=" w-[100%] max-w-[565.42px] text-3xl font-bold leading-normal text-[#364071]">
            Contact Us
          </h3>
          <p className="text-sm font-normal leading-normal text-black">
            Are you a course instructor, student, university admin, or a
            technologist? We would love to hear from you. Drop us an email at{" "}
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
      <div className="pb-[50px]" />
    </>
  );
}
