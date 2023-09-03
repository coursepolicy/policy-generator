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
  const response = await fetch(
    `${process.env.BASE_URL}/policy?id=${id}&generatedId=${generatedId}`,
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

export async function getPolicy(id: string) {
  const response = await fetch(
    `${process.env.BASE_URL}/policy?generatedId=${id}`,
    {
      cache: "no-cache",
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error("Error fetching survey data");
  }

  return response.json();
}
