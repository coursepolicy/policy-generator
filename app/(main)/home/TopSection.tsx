import HeadingImage from "./HeadingImage";
import CTAButtonSection from "./CTAButtonSection";
import CopyTextParagraph from "./CopyTextParagraph";
import CopyTextHeader from "./CopyTextHeader";

export default function TopSection() {
  return (
    <section className="bg-[#191f3c]">
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
    </section>
  );
}
