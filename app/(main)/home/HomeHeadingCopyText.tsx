import CTAButtonSection from "./CTAButtonSection";
import CopyTextHeader from "./CopyTextHeader";
import CopyTextParagraph from "./CopyTextParagraph";

export default function HomeHeadingCopyText() {
  return (
    <div className="grid  grid-flow-row items-center justify-center">
      <CopyTextHeader />
      <CopyTextParagraph />
      <CTAButtonSection />
    </div>
  );
}
