const { GoogleGenAI } = require("@google/genai");
require("dotenv").config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});
const cleanJSON = (text) => {

    return text
        .replace(/```json/g, "")
        .replace(/```/g, "")
        .trim();

};
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
        const generateSummary = async (recipe) => {

    try {

        const prompt = `
You are an expert chef.

Summarize the following recipe into 15-20 easy cooking steps.

Recipe:
${recipe}

Return ONLY valid JSON in this format:

{
  "summary": [
    "Step 1",
    "Step 2",
    "Step 3",
    "Step 4",
    "Step 5"
  ]
}

Do not return markdown.
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });
           

        return cleanJSON(response.text);

    } catch (error) {

        throw error;

    }

        };
      const improveRecipe = async (recipe) => {

    try {

        const prompt = `
You are an expert chef.

Analyze the following recipe and suggest EXACTLY 10 improvements.

Rules:
- Return exactly 20 suggestions.
- Suggestions should improve taste, texture, nutrition or cooking technique.
- Keep every suggestion short.
- Return ONLY valid JSON.

Recipe:
${recipe}

Return ONLY this JSON:

{
    "improvements":[
        "Suggestion 1",
        "Suggestion 2",
        "Suggestion 3",
        "Suggestion 4",
        "Suggestion 5",
        "Suggestion 6",
        "Suggestion 7",
        "Suggestion 8",
        "Suggestion 9",
        "Suggestion 10"
    ]
}

Do not return markdown.
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt
        });

        return cleanJSON(response.text);

    } catch (error) {

        throw error;

    }

};
            //    generateMealPlan
const generateMealPlan = async (goal, days) => {

    try {

        const prompt = `
You are an expert nutritionist.

Create a ${days}-day meal plan for the goal:

${goal}

Rules:

- Return EXACTLY ${days} days.
- Each day must contain:
  - Breakfast
  - Lunch
  - Dinner
- Meals should be healthy.
- Meals should be realistic.
- Keep meal names short.

Return ONLY valid JSON.

Example:

{
  "plan": {
    "Day 1": {
      "Breakfast": "...",
      "Lunch": "...",
      "Dinner": "..."
    },
    "Day 2": {
      "Breakfast": "...",
      "Lunch": "...",
      "Dinner": "..."
    },
       "Day 3": {
      "Breakfast": "...",
      "Lunch": "...",
      "Dinner": "..."
    },
       "Day 4": {
      "Breakfast": "...",
      "Lunch": "...",
      "Dinner": "..."
    },
       "Day 5": {
      "Breakfast": "...",
      "Lunch": "...",
      "Dinner": "..."
    },
       "Day 6": {
      "Breakfast": "...",
      "Lunch": "...",
      "Dinner": "..."
    },
       "Day 7": {
      "Breakfast": "...",
      "Lunch": "...",
      "Dinner": "..."
    }
  }
}

Do not return markdown.
`;

        const response = await ai.models.generateContent({

            model: "gemini-2.5-flash",
            contents: prompt

        });

        return cleanJSON(response.text);

    } catch (error) {

        throw error;

    }

}; 
//                  generateChat
        
      const generateChat = async (message) => {

    try {

        const prompt = `
You are KitchenGPT, an expert AI cooking assistant.

You help users with:
- Recipes
- Cooking tips
- Nutrition advice
- Meal planning
- Ingredient substitutions
- Healthy eating
- Food safety

Rules:
- Keep responses clear and helpful.
- Use bullet points where appropriate.
- If the question is unrelated to food, politely reply:
"I can only help with cooking, recipes, nutrition, and meal planning."

User Question:
${message}
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
    generateNutrition,
    generateSummary,
    improveRecipe,
    generateMealPlan,
    generateChat
};