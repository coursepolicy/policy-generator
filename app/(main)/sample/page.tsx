import React from "react";
import { getPolicy } from "@/app/_utils";
import PolicyResults from "../generate/policy/[id]/PolicyResults";
import SamplePolicyResults from "./SamplePolicyResults";

export const SAMPLE_POLICY_ID = "Sample_Policy_for_all";

export default async function SamplePolicy() {
  const { data } = await getPolicy(SAMPLE_POLICY_ID);

  return (
    <>
      <div className="z-10 hidden h-[125px] w-[100%] max-w-[inherit] bg-neutral-50 md:fixed md:block" />
      <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col bg-white md:mt-[50px] ">
        <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
        <SamplePolicyResults
          response={data}
          samplePolicyId={SAMPLE_POLICY_ID}
        />
      </main>
    </>
  );
}
