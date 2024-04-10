import Carousel from "./Carousel";
import CarouselContentSection from "./CarouselContentSection";

export default function CarouselContainer() {
  return (
    <div
      className="mt-[60px] grid h-[100%] max-w-[1440px] grid-flow-row items-center justify-center gap-6 rounded-[5px] 
      bg-white pb-[20px] md:mt-0 md:gap-[40px] lg:min-h-[400px] lg:grid-flow-col lg:justify-between lg:gap-0 lg:px-0
      xl:px-[20px] 2xl:gap-[30px]"
    >
      <Carousel />
      <CarouselContentSection />
    </div>
  );
}
