import React from "react";
import PolicyResults from "./PolicyResults";
import { getPolicy, AiPolicyResponse } from "@/app/_utils";

export default async function Policy({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data }: { data: AiPolicyResponse } = await getPolicy(id);

  return (
    <>
      <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
      <PolicyResults response={data} />
    </>
  );
}
