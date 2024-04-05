import CTAButtonSection from "./CTAButtonSection";
import CopyTextHeader from "./CopyTextHeader";
import CopyTextParagraph from "./CopyTextParagraph";

export default function HomeHeadingCopyText() {
  return (
    <div className="mb-[50px] ml-[150px] bg-[#191f3c]">
      <CopyTextHeader />
      <CopyTextParagraph />
      <CTAButtonSection />
    </div>
  );
}
