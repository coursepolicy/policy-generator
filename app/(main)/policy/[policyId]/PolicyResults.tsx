"use client";
import { PolicyEditableView } from "@/components/PolicyEditableView";
import { AiPolicyResponse, useAiPolicy } from "@/lib";

type Props = {
  aiPolicy: AiPolicyResponse;
  policyId: string;
  isSample?: boolean;
};

export default function PolicyResults({ aiPolicy, policyId, isSample }: Props) {
  const { data } = useAiPolicy(policyId, aiPolicy);

  return (
    <PolicyEditableView
      aiPolicy={data}
      policyId={policyId}
      isSample={isSample}
    />
  );
}
