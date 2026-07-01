    const express = require("express");
    const router = express.Router();

     const authMiddleware = require("../middleware/authMiddleware");
     const {generateAIRecipe}=require("../controllers/aiController");
   const { nutritionEstimator } = require("../controllers/aiController");
   const { recipeSummarizer } = require("../controllers/aiController");
   const {recipeImprover} = require("../controllers/aiController");
   const {mealPlanner} = require("../controllers/aiController");
   const {chatAssistant} = require("../controllers/aiController");
       

     router.post("/generate",authMiddleware,generateAIRecipe);

     router.post("/nutrition",authMiddleware,nutritionEstimator);

     router.post("/summarize",authMiddleware,recipeSummarizer);

     router.post("/improve",authMiddleware,recipeImprover);

     router.post("/meal-planner",authMiddleware,mealPlanner);

     router.post("/chat",authMiddleware,chatAssistant);



module.exports=router;