const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    registerUser,
    loginUser,
    getCurrentUser,
    addToFavorites,
    removeFromFavorites,
    getFavorites
} = require("../controllers/userController");
    
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile",authMiddleware,getCurrentUser);
router.post("/favorites/:recipeId", authMiddleware, addToFavorites);
router.delete("/favorites/:recipeId", authMiddleware, removeFromFavorites);
router.get("/favorites", authMiddleware, getFavorites);


module.exports = router;