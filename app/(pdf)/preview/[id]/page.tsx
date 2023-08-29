import { CourseAiPolicyResponse } from "@/app/_utils/types";
import getPolicyData from "../../../_utils/getPolicyData";
import PolicyPreview from "@/app/_components/PolicyPreview";
import React from "react";

interface Props {
  params: { id: string };
}
export default async function Preview({ params: { id } }: Props) {
  const { data }: { data: CourseAiPolicyResponse } = await getPolicyData(id);

  return <PolicyPreview data={data} />;
}
