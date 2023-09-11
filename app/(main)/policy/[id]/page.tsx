import React, { Suspense } from "react";
import PolicyResults from "./PolicyResults";
import SuspensePolicyEditableView from "@/components/PolicyEditableView/SuspensePolicyEditableView";
export default async function Policy({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
      <Suspense fallback={<SuspensePolicyEditableView />}>
        <PolicyResults policyId={id} />
      </Suspense>
    </>
  );
}
