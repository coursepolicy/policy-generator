import PolicyPreview from "@/app/_components/PolicyPreview";
import { CourseAiPolicyResponse, getPolicy } from "@/app/_utils";
import React from "react";

interface Props {
  params: { id: string };
}
export default async function Preview({ params: { id } }: Props) {
  const { data }: { data: CourseAiPolicyResponse } = await getPolicy(id);

  return <PolicyPreview data={data} />;
}
