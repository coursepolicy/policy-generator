import "dotenv/config";
const PolicyStatusEnum = {
  UPDATED: "UPDATED",
  INSERTED: "INSERTED",
  NONE: "NONE",
} as const;
type PolicyStatus = (typeof PolicyStatusEnum)[keyof typeof PolicyStatusEnum];
export async function savePolicy(
  body: string,
  id: string,
  generatedId?: string,
): Promise<{ data: { id: string; status: PolicyStatus } }> {
  const baseUrl = "https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com";

  const response = await fetch(
    `${baseUrl}/policy?id=${id}&generatedId=${generatedId}`,
    {
      cache: "no-cache",
      method: "put",
      body,
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error("Error updating policy");
  }

  return response.json();
}

export async function getPolicy(id: string, ttl?: number) {
  const baseUrl = "https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com";

  const response = await fetch(`${baseUrl}/policy?generatedId=${id}`, {
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
