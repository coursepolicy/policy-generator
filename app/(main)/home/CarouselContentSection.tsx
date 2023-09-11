import CarouselButtonSection from "./CarouselButtonSection";
import CarouselCopyText from "./CarouselCopyText";

export default function CarouselContentSection() {
  return (
    <div className="mx-[40px] grid grid-flow-row gap-6 md:mx-[125px] lg:mx-[15px] xl:mx-[40px] xl:p-0">
      <CarouselCopyText />
      <CarouselButtonSection />
    </div>
  );
}
