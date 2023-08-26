import React from "react";
import PolicyResults from "./PolicyResults";
import getSurveyData from "../../../_utils/getServeyData";

export default async function View({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = await getSurveyData(id);

  return (
    <main className="mx-auto my-0 mt-[64px] flex w-[100%] max-w-[1000px] flex-col bg-white p-[39px] px-[20px]">
      <PolicyResults response={data} />
    </main>
  );
}
