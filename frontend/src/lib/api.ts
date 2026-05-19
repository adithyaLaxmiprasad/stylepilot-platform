export async function generateOutfit(formData: FormData) {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
  const response = await fetch(`${apiUrl}/api/generate`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to generate outfit");
  }

  return response.json();
}
