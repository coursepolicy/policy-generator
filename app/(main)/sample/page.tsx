import React from "react";
import { samplePolicy } from "@/app/_utils";
import SamplePolicyResults from "./SamplePolicyResults";
import { SAMPLE_POLICY_ID } from "./types";

export default async function SamplePolicy() {
  return (
    <>
      <div className="z-10 hidden h-[125px] w-[100%] max-w-[inherit] bg-neutral-50 md:fixed md:block" />
      <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col bg-white md:mt-[50px] ">
        <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
        <SamplePolicyResults
          aiPolicy={samplePolicy}
          samplePolicyId={SAMPLE_POLICY_ID}
        />
      </main>
    </>
  );
}
