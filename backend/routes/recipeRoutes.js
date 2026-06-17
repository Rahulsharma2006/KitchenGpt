const express = require('express');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const { createRecipe } = require("../controllers/recipeController");
const { getMyRecipes } = require("../controllers/recipeController");
const { updateRecipe } = require("../controllers/recipeController");
const { deleteRecipe } = require("../controllers/recipeController");
const { getRecipeById } = require("../controllers/recipeController");
const { getAllRecipes } = require("../controllers/recipeController");


router.get("/my-recipes", authMiddleware, getMyRecipes);

router.get("/", getAllRecipes);

router.get("/:id", getRecipeById);

router.put("/update/:id", authMiddleware, updateRecipe);

router.delete("/delete/:id", authMiddleware, deleteRecipe); 

router.post("/create", authMiddleware, createRecipe);

module.exports = router;