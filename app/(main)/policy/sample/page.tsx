import React from "react";
import { SAMPLE_POLICY_ID } from "./types";
import { samplePolicy } from "@/lib";
import { PolicyEditableView } from "@/components/PolicyEditableView/";

export default async function SamplePolicy() {
  return (
    <>
      <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
      <PolicyEditableView
        aiPolicy={samplePolicy}
        policyId={SAMPLE_POLICY_ID}
        isSample
      />
    </>
  );
}
