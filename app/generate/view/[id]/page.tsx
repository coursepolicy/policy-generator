import PolicyResults from "./PolicyResults";
import React from "react";

export default async function View({
  params: { id },
}: {
  params: { id: string };
}) {
  const { data } = await getSurveyData(id);

  return (
    <main className="mx-auto my-0 mt-[64px] flex w-[100%] max-w-[1000px] flex-col bg-white">
      <PolicyResults response={data} />
    </main>
  );
}

async function getSurveyData(id: string, ttl?: number) {
  const baseUrl = "https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com";

  const response = await fetch(`${baseUrl}/responses?generatedId=${id}`, {
    cache: "no-cache",
    // next: { revalidate: ttl || 3600 },
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Error fetching survey data");
  }

  return response.json();
}
