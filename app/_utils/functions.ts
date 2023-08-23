export async function fetchSurveyResponseById(id: string) {
  const baseUrl = "https://u6eesjxnab.execute-api.us-west-2.amazonaws.com";
  try {
    return await fetch(`${baseUrl}/responses?generatedId=${id}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    throw new Error(`Error fetching survey response: ${error}`);
  }
}
