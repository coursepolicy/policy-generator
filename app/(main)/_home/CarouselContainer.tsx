import Carousel from "./Carousel";
import CarouselButtonContainer from "./CarouselButtonSection";
import CarouselCopyText from "./CarouselCopyText";

export default function CarouselContainer() {
  return (
    <div
      className="flex min-h-[400px] max-w-[1440px] flex-col items-center rounded-[5px] border border-neutral-200 bg-white
      px-[20px] lg:flex-row"
    >
      <Carousel />
      <div className="mt-[40px] lg:ml-[50px] lg:mt-0">
        <CarouselCopyText />
        <CarouselButtonContainer />
      </div>
    </div>
  );
}
