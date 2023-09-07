import React from "react";
import SamplePolicyResults from "./SamplePolicyResults";
import { SAMPLE_POLICY_ID } from "./types";
import { samplePolicy } from "@/lib";

export default async function SamplePolicy() {
  return (
    <>
      <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
      <SamplePolicyResults
        aiPolicy={samplePolicy}
        samplePolicyId={SAMPLE_POLICY_ID}
      />
    </>
  );
}
