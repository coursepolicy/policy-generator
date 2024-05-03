import TextHeader from "./TextHeader";
import TextParagraph from "./TextParagraph";
import ButtonSection from "./ButtonSection";

export default function HGSETop() {
  return (
    <section className="bg-[#F6F6F9] px-4 lg:mt-[20px] lg:px-0 lg:pb-[70px]">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center lg:flex-row">
        <div className="lg:flex-start">
          <TextHeader />
        </div>
        <div className="lg:ml-[-7px] lg:mt-[50px]">
          <TextParagraph />
          <ButtonSection />
        </div>
      </div>
    </section>
  );
}
