"use client";

import React from "react";

import { useAiPolicy } from "@/lib";
import { PolicyPreview } from "@/components/PolicyPreview";
import DownloadPdfSection from "./DownloadPdfSection";

interface Props {
  params: { id: string };
}
export default function GeneratePolicyPreview({ params: { id } }: Props) {
  const { data } = useAiPolicy(id);

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
      <DownloadPdfSection id={id} />
      <PolicyPreview data={dataWithFallback} />
    </div>
  );
}
