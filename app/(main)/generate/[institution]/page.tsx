import { ulid } from "ulid";
import GeneratePolicy from "../GeneratePolicy";
import IntroMessageTabContent from "../IntroMessageTabContent";
import IframeTabContent from "../IframeTabContent";
import GeneratePolicyTabContent from "../GeneratePolicyTabContent";

const tabs = [
  {
    id: "fill-info",
    label: "Step 1: Fill out information",
  },
  {
    id: "generate-policy",
    label: "Step 2: Generate your AI policy",
  },
];

type IProps = {
  params: { institution: string };
};

export default function InstitutionGenerate({ params }: IProps) {
  const policyId = ulid();
  // can do some logic here depeing on the institution name
  return (
    <GeneratePolicy tabs={tabs}>
      <IntroMessageTabContent value="initial" />
      <IframeTabContent value="fill-info" id={policyId} />
      <GeneratePolicyTabContent value="generate-policy" id={policyId} />
    </GeneratePolicy>
  );
}
