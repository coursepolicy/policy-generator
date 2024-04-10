import CarouselContainer from "./CarouselContainer";
import { Button } from "@/components/ui/button";
import HeadingImage from "./HeadingImage";
import CTAButtonSection from "./CTAButtonSection";
import CopyTextParagraph from "./CopyTextParagraph";
import CopyTextHeader from "./CopyTextHeader";

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
      <div className="mx-auto mt-[43px] flex max-w-[1600px] justify-center bg-white">
        <CarouselContainer />
      </div>
    </>
  );
}
