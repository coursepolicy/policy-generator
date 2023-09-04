import { cache } from "react";
// import "server-only";

import "dotenv/config";

export const getPolicy = async (id: string) => {
  const response = await fetch(
    `${process.env.BASE_URL}/policy?generatedId=${id}`,
    {
      cache: "no-store",
      method: "get",
      headers: { "Content-Type": "application/json" },
    },
  );

  if (!response.ok && response.status === 408) {
    throw new Error(
      "Failure to find the record. Please complete the survey and try again",
    );
  }

  if (!response.ok) {
    throw new Error("Error fetching survey data");
  }

  return response.json();
};
