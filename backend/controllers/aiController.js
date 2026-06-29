const { generateRecipe } = require("../services/geminiService");
const { generateNutrition } = require("../services/geminiService");


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

module.exports={
generateAIRecipe,
 nutritionEstimator
}