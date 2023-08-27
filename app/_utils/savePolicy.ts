import "dotenv/config";

export default async function savePolicy(
  body: string,
  id: string,
  ttl?: number,
) {
  const baseUrl = "https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com";

  const response = await fetch(`${baseUrl}/policy?id=${id}`, {
    cache: "no-cache",
    // next: { revalidate: ttl || 3600 },
    method: "put",
    body,
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Error updating policy");
  }

  return response.json();
}
