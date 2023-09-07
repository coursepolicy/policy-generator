import React, { Suspense } from "react";
import PolicyResults from "./PolicyResults";
export default async function Policy({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>loading... on initial request</p>
        }
      >
        <PolicyResults policyId={id} />
      </Suspense>
    </>
  );
}
