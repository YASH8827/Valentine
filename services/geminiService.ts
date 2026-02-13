
import { GoogleGenAI, Type } from "@google/genai";
import { PoemData } from "../types";

const getAI = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing. AI features will not work until configured in Vercel.");
  }
  return new GoogleGenAI({ apiKey: apiKey || 'MISSING_KEY' });
};

export const generateLovePoem = async (name: string, traits: string): Promise<PoemData> => {
  try {
    const ai = getAI();
    const prompt = `Write a beautiful, romantic, and modern Valentine's Day poem for someone named ${name}. 
    Incorporate these personal details: ${traits}. The poem should be deeply touching and emotional.`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            content: { type: Type.STRING }
          },
          required: ["title", "content"]
        }
      }
    });

    return JSON.parse(response.text || '{}') as PoemData;
  } catch (e) {
    console.error("AI Generation Error:", e);
    return {
      title: "My Love for You",
      content: "You are the light in my life, every single day. (Note: AI generation failed, please check API key settings)"
    };
  }
};

export const generateRomanticImage = async (prompt: string): Promise<string> => {
  try {
    const ai = getAI();
    const fullPrompt = `A high-quality, cinematic, romantic digital art of: ${prompt}. Cinematic lighting, soft focus, dreamy aesthetic, Valentine's Day theme.`;
    
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: fullPrompt }]
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
  } catch (e) {
    console.error("Image Generation Error:", e);
  }
  
  throw new Error("Failed to generate image. Ensure API_KEY is set in your hosting provider.");
};
