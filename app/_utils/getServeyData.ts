export async function getSurveyData(id: string, ttl?: number) {
  const baseUrl = "https://qwmkqfgswe.execute-api.us-west-2.amazonaws.com";

  const response = await fetch(`${baseUrl}/responses?generatedId=${id}`, {
    next: { revalidate: ttl || 3600 },
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error("Error fetching survey data");
  }

  return response.json();
}
