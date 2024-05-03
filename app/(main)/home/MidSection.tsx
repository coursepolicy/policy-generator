import CarouselContainer from "./CarouselContainer";
import MidSectionText from "./MidSectionText";
import MidSectionImages from "./MidSectionImages";

export default function MidSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-[1600px] justify-center bg-white pt-[43px]">
        <CarouselContainer />
      </div>
      <div className="bg-[#F6F6F9] pb-[88px]">
        <div className="mx-auto flex max-w-[1600px] flex-col justify-center">
          <MidSectionText />
          <MidSectionImages />
        </div>
      </div>
    </section>
  );
}
