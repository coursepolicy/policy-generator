import CTA from "./CTA";
import CarouselContainer from "./CarouselContainer";
import HomeHeading from "./HomeHeading";

export default function HomeContainer() {
  return (
    <main className="mb-[150px] flex flex-col items-center justify-center">
      <HomeHeading />
      <CTA />
      <CarouselContainer />
    </main>
  );
}
