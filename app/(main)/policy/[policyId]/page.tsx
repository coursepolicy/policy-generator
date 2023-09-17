import React from "react";

import { getPolicy } from "@/lib";
import PolicyResults from "./PolicyResults";

export default async function Policy({
  params: { policyId },
}: {
  params: { policyId: string };
}) {
  const data = await getPolicy(policyId);

  return (
    <>
      <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
      <PolicyResults aiPolicy={data} policyId={policyId} />
    </>
  );
}
