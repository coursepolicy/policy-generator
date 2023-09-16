import { AiPolicy } from "..";

export async function publishPolicy(
  policy: AiPolicy,
  policyId: string,
  publishId: string,
) {
  const response = await fetch(
    `${process.env.LAMBDAS_API_BASE_URL}/publish-policy`,
    {
      method: "post",
      body: JSON.stringify({ policy, publishId, policyId }),
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error("Error publishing policy");
  }

  return response.json();
}
