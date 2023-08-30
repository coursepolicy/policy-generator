import { AiPolicy, getPolicy } from "@/app/_utils/";
import PolicyPreview from "@/app/_components/PolicyPreview";

import React from "react";
import { SAMPLE_POLICY_ID } from "../types";

export default async function SamplePolicyPreview() {
  const { data }: { data: AiPolicy } = await getPolicy(SAMPLE_POLICY_ID);

  return (
    <div className="mt-[40px]">
      <div className="mb-[40px] flex flex-col items-center">
        <h1>Preview Page</h1>
        <a
          href="https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com/generated-pdf?generatedId=Sample_Policy_for_all"
          target="_blank"
        >
          <strong>Download</strong>
        </a>
      </div>
      <PolicyPreview data={data} />
    </div>
  );
}
