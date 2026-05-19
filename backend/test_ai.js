import { generateOutfits } from "../ai-service/src/index.js";

async function test() {
  try {
    const res = await generateOutfits({
      imagesBase64: [],
      skinTone: "Medium",
      occasion: "Casual",
      preferredColor: "#000000",
      aiPrompt: "Test",
    });
    console.log("Success:", res);
  } catch (e) {
    console.error("Error:", e);
  }
}

test();
