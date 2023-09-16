"use client";

import React from "react";

import { PolicyPreview } from "@/components/PolicyPreview";
import { usePublishPolicy } from "@/lib/hooks/usePublishPolicy";
import { AiPolicyResponse } from "@/lib";

interface Props {
  publishId: string;
  aiPolicy: AiPolicyResponse;
}
export default function PublishPolicyContainer({ publishId, aiPolicy }: Props) {
  const { data } = usePublishPolicy(publishId, aiPolicy);

  return <PolicyPreview data={data} publish />;
}
