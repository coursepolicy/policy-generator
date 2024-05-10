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

const institutionMapper: {
  [key: string]: string | undefined;
} = {
  hgse: process.env.HGSE_SURVEY_URL,
};

export default function InstitutionGenerate({ params }: IProps) {
  const policyId = ulid();
  const survey_url = institutionMapper[params.institution.toLowerCase()];
  // can do some logic here depending on the institution name
  return (
    <GeneratePolicy tabs={tabs}>
      <IntroMessageTabContent value="initial" />
      <IframeTabContent
        value="fill-info"
        id={policyId}
        survey_url={survey_url as string}
      />
      <GeneratePolicyTabContent value="generate-policy" id={policyId} hgse />
    </GeneratePolicy>
  );
}
