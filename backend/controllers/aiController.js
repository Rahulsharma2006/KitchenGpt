const { generateRecipe } = require("../services/geminiService");
const { generateNutrition } = require("../services/geminiService");
const {generateSummary} = require("../services/geminiService");
const {improveRecipe} = require("../services/geminiService");
const {generateMealPlan} = require("../services/geminiService");
const {generateChat}=require("../services/geminiService");

    //    GenerateAtRecipe
const generateAIRecipe = async(req,res)=>{
try{

    const {prompt}=req.body;

 if(!prompt){
  return res.status(400).json({
 message:"Prompt is required"
  });
  }

    const recipe = await generateRecipe(prompt);

   res.status(200).json({

    success:true,
   recipe

   });

   }
   catch(error){

   res.status(500).json({

    message:error.message

  });

  }

   }
        //    nutritionEstimator
     const nutritionEstimator = async (req, res) => {
    try {

        const { recipe } = req.body;

        if (!recipe) {
            return res.status(400).json({
                message: "Recipe is required"
            });
        }

        const nutrition = await generateNutrition(recipe);

        const cleanResponse = nutrition
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        res.status(200).json({
            success: true,
            nutrition: JSON.parse(cleanResponse)
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
                //  recipeSummarizer
        const recipeSummarizer = async (req, res) => {

    try {

        const { recipe } = req.body;

        if (!recipe) {

            return res.status(400).json({
                message: "Recipe is required"
            });

        }

        const summary = await generateSummary(recipe);

        res.status(200).json({
            success: true,
            ...JSON.parse(summary)
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
                 // recipeImprover
        const recipeImprover = async (req, res) => {

    try {

        const { recipe } = req.body;

        if (!recipe) {

            return res.status(400).json({
                message: "Recipe is required"
            });

        }

        const improvements = await improveRecipe(recipe);

        res.status(200).json({
            success: true,
            ...JSON.parse(improvements)
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


          const mealPlanner = async (req, res) => {

    try {

        const { goal, days } = req.body;

        if (!goal) {

            return res.status(400).json({
                message: "Goal is required"
            });

        }

        if (!days) {

            return res.status(400).json({
                message: "Days is required"
            });

        }

        const mealPlan = await generateMealPlan(goal, days);

        res.status(200).json({
            success: true,
            ...JSON.parse(mealPlan)
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};
    const chatAssistant = async (req, res) => {

    try {

        const { message } = req.body;

        if (!message) {

            return res.status(400).json({
                message: "Message is required"
            });

        }

        const reply = await generateChat(message);

        res.status(200).json({
            success: true,
            reply
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

}; 
module.exports={
generateAIRecipe,
 nutritionEstimator,
 recipeSummarizer,
 recipeImprover,
  mealPlanner,
  chatAssistant
}