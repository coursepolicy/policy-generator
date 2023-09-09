import ReadSurvayInsightButton from "./ReadSurveyInsightButton";
import ViewSamplePolicyButton from "./ViewSamplePolicyButton";

export default function CarouselButtonSection() {
  return (
    <div
      className="gap- grid grid-flow-row items-center
     gap-3 sm:justify-center md:grid-flow-col md:justify-start md:gap-7"
    >
      <ReadSurvayInsightButton />
      <ViewSamplePolicyButton />
    </div>
  );
}
