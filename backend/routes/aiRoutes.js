const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
generateAIRecipe
}=require("../controllers/aiController");


router.post(

"/generate",

authMiddleware,

generateAIRecipe

);

module.exports=router;