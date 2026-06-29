const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

const generateRecipe = async (prompt) => {

    try {

        const response = await ai.models.generateContent({

            model: "gemini-2.5-flash",

            contents: prompt

        });

        return response.text;

    } catch (error) {

        throw error;

    }

};
     const generateNutrition = async (recipe) => {

    try {

        const prompt = `
     You are a professional nutritionist.

      Estimate the nutrition values for the following recipe.

     Recipe:
    ${recipe}

     Return ONLY valid JSON in this format:

    {
  "calories": "...",
  "protein": "...",
  "carbs": "...",
  "fat": "..."
   }

    Do not include markdown or explanation.
  `;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        return response.text;

    } catch (error) {

        throw error;

    }

};

module.exports = {
    generateRecipe,
    generateNutrition
};