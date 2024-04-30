import ReadSurvayInsightButton from "./ReadSurveyInsightButton";
import ViewSamplePolicyButton from "./ViewSamplePolicyButton";

export default function CarouselButtonSection() {
  return (
    <div
      className="mb-[25px] mt-[20px] grid grid-flow-row
     items-center justify-center gap-6 lg:grid-flow-col lg:justify-start lg:gap-4"
    >
      <ReadSurvayInsightButton />
    </div>
  );
}
