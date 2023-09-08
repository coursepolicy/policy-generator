"use client";

import React from "react";
import { useAiPolicy } from "@/lib";
import { PolicyEditableView } from "@/components/PolicyEditableView";

export default function Result({ policyId }: { policyId: string }) {
  const { data } = useAiPolicy(policyId);

  if (!data) {
    return <></>;
  }

  return <PolicyEditableView aiPolicy={data} policyId={policyId} />;
}
