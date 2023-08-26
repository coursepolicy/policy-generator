import "dotenv/config";

export default async function savePolicy(
  body: string,
  id: string,
  ttl?: number,
) {
  const response = await fetch(`${process.env.BASE_URL}/policy?id=${id}`, {
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
