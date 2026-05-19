import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

// Make sure to add GEMINI_API_KEY to your .env file
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function generateOutfits({
  imagesBase64,
  skinTone,
  occasion,
  preferredColor,
  aiPrompt,
}) {
  const prompt = `
You are an elite, luxury fashion stylist for "StylePilot AI".
Analyze the user's uploaded clothing images and their preferences to generate exactly 5 highly stylish outfit combinations.

Preferences:
- Skin tone: ${skinTone}
- Occasion: ${occasion}
- Preferred color palette: ${preferredColor}
- Extra style notes: ${aiPrompt || "Make it look premium and modern"}

Create 5 distinct outfit recommendations. Try to incorporate the user's uploaded clothing items where it makes sense, and suggest complementary pieces if needed. 

You MUST return the output exclusively as a valid JSON array of objects. The structure must be EXACTLY:
[
  {
    "title": "Short, catchy name for the outfit (e.g., Midnight Elegance)",
    "description": "A detailed 2-3 sentence description of the pieces, textures, and how they work together.",
    "vibe": "A 2-3 word vibe (e.g., Street Luxury)"
  }
]
`;

  const contents = [
    ...(imagesBase64 || []).map((base64Str) => ({
      inlineData: {
        data: base64Str,
        mimeType: "image/jpeg", // Assuming JPEGs, though Gemini handles various image types well.
      },
    })),
    prompt,
  ];

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: contents,
    config: {
      responseMimeType: "application/json",
      temperature: 0.7,
    },
  });

  return response.text;
}

