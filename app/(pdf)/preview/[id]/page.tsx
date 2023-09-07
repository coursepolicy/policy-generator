import { PolicyPreview } from "@/components/PolicyPreview";
import { getPolicy, type AiPolicyResponse } from "@/lib";
import React from "react";

interface Props {
  params: { id: string };
}
export default async function Preview({ params: { id } }: Props) {
  const data: AiPolicyResponse = await getPolicy(id);

  return <PolicyPreview data={data} pdf />;
}
