import { generateOutfits } from "../../../ai-service/src/index.js";

export const generateOutfit = async (req, res) => {
  try {
    const { skinTone, occasion, preferredColor, aiPrompt } = req.body;

    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ error: "At least one image is required" });
    }

    const imagesBase64 = req.files.map((file) => file.buffer.toString("base64"));

    const aiResult = await generateOutfits({
      imagesBase64,
      skinTone,
      occasion,
      preferredColor,
      aiPrompt,
    });

    let outfits = [];
    try {
      outfits = JSON.parse(aiResult);
    } catch (e) {
      console.error("Failed to parse AI response:", aiResult);
      return res.status(500).json({ error: "Invalid AI response format from model" });
    }

    res.json({
      success: true,
      outfits,
    });
  } catch (error) {
    console.error("AI Service Error:", error);
    res.status(500).json({ error: "AI generation failed" });
  }
};
