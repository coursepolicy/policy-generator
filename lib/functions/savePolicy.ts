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
    `${process.env.LAMBDAS_API_BASE_URL}/policy?id=${id}${
      generatedId ? `&generatedId=${generatedId}` : ""
    }`,
    {
      method: "post",
      body,
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error("Error updating policy");
  }

  return response.json();
}
