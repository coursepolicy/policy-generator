import { AiPolicyResponse, getPolicy } from "@/app/_utils/";
import PolicyPreview from "@/app/_components/PolicyPreview";

import React from "react";
import Goback from "./Goback";

interface Props {
  params: { id: string };
}
export default async function GeneratePolicyPreview({ params: { id } }: Props) {
  const { data }: { data: AiPolicyResponse } = await getPolicy(id);

  return (
    <div className="mt-[40px]">
      <div className="mb-[40px] flex flex-col items-center">
        <h1>Preview Page</h1>
        <a
          href={`https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com/generated-pdf?generatedId=${id}`}
          target="_blank"
        >
          <strong>Download PDF</strong>
        </a>
      </div>
      <Goback policyId={id} />
      <PolicyPreview data={data} />
    </div>
  );
}
