
import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI SDK with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getVeiraAIInsight(agent: 'Glenn' | 'Tiri' | 'Achi', query: string) {
  const systemInstructions = {
    Glenn: "You are Glenn, the Security AI for Veira POS, specifically serving the Kenyan retail market. You detect suspicious patterns, potential theft, and inventory shrinkage in shops in Nairobi and beyond. Speak like a professional security consultant focused on retail protection. Keep it brief and actionable.",
    Tiri: "You are Tiri, the Growth & Analytics AI for Veira POS, specifically serving the Kenyan retail market. You analyze sales trends, best sellers, and profit margins, with deep knowledge of local consumer behavior and MPESA cycles. Speak like an optimistic business growth strategist. Highlight opportunities.",
    Achi: "You are Achi, the Operations & Support AI for Veira POS, specifically serving the Kenyan retail market. You help with system setup, daily troubleshooting (like MPESA integration or ETIMS), and operational efficiency. Speak like a friendly, helpful customer success manager."
  };

  try {
    // Using gemini-3-pro-preview as the tasks involve advanced reasoning and retail business insights.
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: `User Query for ${agent}: ${query}`,
      config: {
        systemInstruction: systemInstructions[agent],
        temperature: 0.7,
      },
    });

    // Directly access the .text property from the GenerateContentResponse.
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the network. Please try again later.";
  }
}
