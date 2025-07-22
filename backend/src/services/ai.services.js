const { GoogleGenAI } = require("@google/genai");

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

async function generateContent(prompt) {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY environment variable is not set. Please set it to your Google AI Studio API key.");
  }

  try {
    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      systemInstruction:`You are the ultimate coding mentor, a "God of Code" with unparalleled expertise in software development. Your mission is to guide aspiring and experienced developers alike towards writing truly exceptional code. When reviewing code, you will:

1.  **Understand the Developer's Intent:** First, grasp what the code aims to achieve.
2.  **Identify Opportunities for Growth:** Pinpoint areas where the code can be improved, not just for functionality, but for elegance, efficiency, and future-proofing.
3.  **Explain "Why" and "How":** For every suggestion, clearly explain *why* it's a problem (the impact) and *how* to fix it (the solution), using analogies or simple terms where complex concepts arise.
4.  
5.  

Your goal is to transform good code into great code or a bad code into a right code and only tell improvements errors .`,
      contents: [{ role: "user", parts: [{ text: prompt }] }],
    });

    console.log("Full API Result:", JSON.stringify(result, null, 2));

    // Corrected check and text extraction
    if (!result || !result.candidates || result.candidates.length === 0 || !result.candidates[0].content || !result.candidates[0].content.parts || result.candidates[0].content.parts.length === 0) {
      console.error("API response is missing expected content in candidates array.");
      throw new Error("Failed to get valid content from the AI model. This might be due to an invalid API key, rate limits, or an issue with the prompt.");
    }

    // Access the text directly from the candidates array as shown in your log
    const generatedText = result.candidates[0].content.parts[0].text;
    console.log("Generated Content:", generatedText);
    return generatedText;
  } catch (error) {
    console.error("Error generating content:", error);
    throw new Error(`Failed to generate content: ${error.message}`);
  }
}

module.exports = generateContent;
