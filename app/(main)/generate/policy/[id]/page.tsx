import React from "react";
import PolicyResults from "./PolicyResults";
import { getPolicy } from "@/app/_utils";

export default async function Policy({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = await getPolicy(id);

  console.log({ data });
  return (
    <>
      <div className="z-10 hidden h-[125px] w-[100%] max-w-[inherit] bg-neutral-50 md:fixed md:block" />
      <main className="mx-auto my-0 mt-[30px] flex w-[100%] max-w-[1000px] flex-col bg-white md:mt-[50px] ">
        <div className="z-10 hidden h-[75px] w-[100%] max-w-[inherit] bg-white md:fixed md:block" />
        <PolicyResults response={data} />
      </main>
    </>
  );
}
