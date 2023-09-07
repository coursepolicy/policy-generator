"use client";

import { AiPolicyResponse, getPolicy } from "@/app/_utils/";
import PolicyPreview from "@/app/_components/PolicyPreview";

import React from "react";
import { useQuery } from "@tanstack/react-query";

interface Props {
  params: { id: string };
}
export default function GeneratePolicyPreview({ params: { id } }: Props) {
  const { data } = useQuery<AiPolicyResponse>({
    queryKey: [id],
    queryFn: () => getPolicy(id),
    suspense: true,
    staleTime: 5_000,
  });

  const { createdAt, updatedAt, sections, heading } = data || {};

  const dataWithFallback = {
    id: String(id),
    createdAt: createdAt || String(Date.now()),
    updatedAt: updatedAt || String(Date.now()),
    sections: sections || [],
    heading: heading || "",
  };

  return (
    <div>
      <div className="mb-[40px] flex flex-col items-center">
        <h1>Preview Page</h1>
        <a
          href={`${process.env.LAMBDAS_API_BASE_URL}/generated-pdf?generatedId=${id}`}
          target="_blank"
        >
          <strong>Download PDF</strong>
        </a>
      </div>
      <PolicyPreview data={dataWithFallback} />
    </div>
  );
}
