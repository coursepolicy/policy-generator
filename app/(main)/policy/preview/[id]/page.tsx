import React from "react";

import PreviewPolicyContainer from "./PreviewPolicyContainer";
import { getPolicy } from "@/lib";

interface Props {
  params: { id: string };
}
export default async function GeneratePolicyPreview({ params: { id } }: Props) {
  const data = await getPolicy(id);
  return <PreviewPolicyContainer id={id} aiPolicy={data} />;
}
