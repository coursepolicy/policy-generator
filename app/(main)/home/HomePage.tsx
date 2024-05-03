import CarouselContainer from "./CarouselContainer";
import HeadingImage from "./HeadingImage";
import CTAButtonSection from "./CTAButtonSection";
import CopyTextParagraph from "./CopyTextParagraph";
import CopyTextHeader from "./CopyTextHeader";
import MidSectionText from "./MidSectionText";
import MidSectionImages from "./MidSectionImages";
import HomeWorldWideSection from "./HomeWorldWideSection";
import UnitedStatesImage from "./UnitedStatesImage";
import Banner from "./Banner";
import Footer from "./footer";

export default function HomePage() {
  return (
    <>
      <main>
        <Banner />
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
        <div className="mx-auto flex max-w-[1600px] justify-center bg-white pt-[43px]">
          <CarouselContainer />
        </div>
        <div className="bg-[#F6F6F9] pb-[88px]">
          <div className="mx-auto flex max-w-[1600px] flex-col justify-center">
            <MidSectionText />
            <MidSectionImages />
          </div>
        </div>
        <div className="hidden bg-[#191f3c] pb-[105px]">
          <div className="mx-auto flex max-w-[1600px] flex-col items-center px-4 lg:px-0 2xl:flex-row 2xl:justify-between 2xl:text-left">
            <HomeWorldWideSection />
            <div className="hidden 2xl:block">
              <UnitedStatesImage />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
