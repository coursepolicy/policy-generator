"use client";

import React, { Suspense } from "react";

import { useAiPolicy } from "@/lib";
import { PolicyPreview } from "@/components/PolicyPreview";
import DownloadPdfSection from "./DownloadPdfSection";
import SuspensePolicyEditableView from "@/components/PolicyEditableView/SuspensePolicyEditableView";

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
      <Suspense fallback={<SuspensePolicyEditableView />}>
        <PolicyPreview data={dataWithFallback} />
      </Suspense>
    </div>
  );
}
