import { ulid } from "ulid";
import GeneratePolicy, { Tab } from "./GeneratePolicy";
import IntroMessageTabContent from "./IntroMessageTabContent";
import CopyCodeTabContent from "./CopyCodeTabContent";
import IframeTabContent from "./IframeTabContent";
import GeneratePolicyTabContent from "./GeneratePolicyTabContent";

const tabs: Tab[] = [
  {
    id: "copy-code",
    label: "Step 1: Copy the code",
  },
  {
    id: "fill-info",
    label: "Step 2: Fill out information",
  },
  {
    id: "generate-policy",
    label: "Step 3: Generate your AI policy",
  },
];

export default function Generate() {
  const policyId = ulid();
  return (
    <>
      <h1 className="sr-only">Generate your course policy</h1>
      <GeneratePolicy tabs={tabs}>
        <IntroMessageTabContent value="initial" />
        <CopyCodeTabContent value="copy-code" id={policyId} />
        <IframeTabContent
          value="fill-info"
          id={policyId}
          survey_url={process.env.SURVEY_URL as string}
        />
        <GeneratePolicyTabContent value="generate-policy" id={policyId} />
      </GeneratePolicy>
    </>
  );
}
