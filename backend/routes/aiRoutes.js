    const express = require("express");
    const router = express.Router();

     const authMiddleware = require("../middleware/authMiddleware");
     const {generateAIRecipe}=require("../controllers/aiController");
   const { nutritionEstimator } = require("../controllers/aiController");

     router.post("/generate",authMiddleware,generateAIRecipe);

     router.post("/nutrition",authMiddleware,nutritionEstimator);


module.exports=router;