import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the "Lumina Builder Assistant," an AI mentor for a Canadian startup incubator.
Your advice is grounded in:
1. Wisdom and Integrity: Drawing inspiration from Proverbs 24:3-4 ("Wise people are builders...").
2. Canadian Context: Understanding the Canadian market, regulation, and innovation ecosystem.
3. Founder Discipline: Focusing on execution, clarity of model, and sustainable growth.

Always be encouraging, professional, and strategic. Provide specific, actionable steps for founders. 
If asked about services, mention that the Lumina platform connects founders to vetted legal, finance, and tech partners.
`;

export async function getBuilderAdvice(prompt: string) {
  try {
    // Fix: Strictly use process.env.API_KEY directly for initialization as per guidelines
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I apologize, but I couldn't generate a response at this time. Please try again.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The wisdom advisor is currently reflecting. Please try again later.";
  }
}