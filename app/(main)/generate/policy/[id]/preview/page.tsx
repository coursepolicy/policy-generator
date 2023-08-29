import { CourseAiPolicyResponse } from "../../../../../_utils/types";
import getPolicyData from "../../../../../_utils/getPolicyData";
import PolicyPreview from "../../../../../_components/PolicyPreview";

import React from "react";

interface Props {
  params: { id: string };
}
export default async function GeneratePolicyPreview({ params: { id } }: Props) {
  const { data }: { data: CourseAiPolicyResponse } = await getPolicyData(id);

  return (
    <div className="mt-[40px]">
      <div className="mb-[40px] flex flex-col items-center">
        <h1>Preview Page</h1>
        <a
          href={`https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com/generated-pdf?generatedId=${id}`}
          target="_blank"
        >
          <strong>Download</strong>
        </a>
      </div>
      <PolicyPreview data={data} />
    </div>
  );
}
