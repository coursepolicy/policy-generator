import Carousel from "./Carousel";
import CarouselButtonSection from "./CarouselButtonSection";
import CarouselCopyText from "./CarouselCopyText";

export default function CarouselContainer() {
  return (
    <div
      className="grid h-[100%] max-w-[1440px] grid-flow-row items-center justify-center gap-6 rounded-[5px] border border-neutral-200 bg-white
      py-[20px] md:gap-[40px] lg:min-h-[400px] lg:justify-between lg:gap-[20px] lg:px-[20px] xl:grid-flow-col xl:px-[20px] 2xl:gap-[30px]"
    >
      <div className="grid items-center justify-center xl:justify-start">
        <Carousel />
      </div>
      <div className="mx-[40px] grid grid-flow-row gap-6 xl:p-0">
        <CarouselCopyText />
        <CarouselButtonSection />
      </div>
    </div>
  );
}
