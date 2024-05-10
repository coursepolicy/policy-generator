import TextHeader from "./TextHeader";
import TextParagraph from "./TextParagraph";
import ButtonSection from "./ButtonSection";

export default function HGSETop() {
  return (
    <section className="bg-[#F6F6F9]">
      <div className="mx-auto flex max-w-[1600px] flex-col items-center px-4 lg:flex-row lg:pb-[60px]">
        <div className="lg:flex-start">
          <TextHeader />
        </div>
        <div className="lg:pt-[30px]">
          <TextParagraph />
          <ButtonSection />
        </div>
      </div>
    </section>
  );
}
