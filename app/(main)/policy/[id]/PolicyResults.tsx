"use client";

import React from "react";
import { useAiPolicy } from "@/lib";
import { PolicyEditableView } from "@/components/PolicyEditableView";

export default function Result({ policyId }: { policyId: string }) {
  const { data } = useAiPolicy(policyId);

  const { createdAt, updatedAt, sections, heading } = data || {};

  const dataWithFallback = {
    id: String(policyId),
    createdAt: createdAt || String(Date.now()),
    updatedAt: updatedAt || String(Date.now()),
    sections: sections || [],
    heading: heading || "",
  };

  return <PolicyEditableView aiPolicy={dataWithFallback} policyId={policyId} />;
}
