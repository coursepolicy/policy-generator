import { cache } from "react";
// import "server-only";

import "dotenv/config";

export const getPolicy = cache(async (id: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}/policy?generatedId=${id}`,
    {
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok) {
    throw new Error("Error fetching survey data");
  }

  return response.json();
});
