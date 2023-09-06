import Footer from "@/app/_components/Footer";
import CTAButtonSection from "./CTAButtonSection";
import CarouselContainer from "./CarouselContainer";
import HomeHeadingCopyText from "./HomeHeadingCopyText";

export default function HomeContainer() {
  return (
    <>
      <main className="mb-[150px] flex flex-col items-center justify-center">
        <HomeHeadingCopyText />
        <CTAButtonSection />
        <CarouselContainer />
      </main>
      <Footer />
    </>
  );
}
