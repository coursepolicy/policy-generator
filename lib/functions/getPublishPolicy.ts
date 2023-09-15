import "dotenv/config";

export const getPublishPolicy = async (id: string) => {
  const response = await fetch(
    `${process.env.LAMBDAS_API_BASE_URL}/publish-policy?publishId=${id}`,
    {
      cache: "no-store",
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error("Error fetching survey data");
  }

  const { data } = await response.json();

  return {
    ...data,
    sections: data.ai_policy.sections,
    heading: data.ai_policy.heading,
  };
};
