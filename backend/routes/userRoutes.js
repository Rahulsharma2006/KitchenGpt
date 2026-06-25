const express = require("express");
const {registerValidation,loginValidation} = require("../validators/userValidator");

const validate = require("../middleware/validateMiddleware");

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
    
router.post("/register", registerValidation, validate, registerUser);
router.post("/login",loginValidation,validate, loginUser);
router.get("/profile",authMiddleware,getCurrentUser);
router.post("/favorites/:recipeId", authMiddleware, addToFavorites);
router.delete("/favorites/:recipeId", authMiddleware, removeFromFavorites);
router.get("/favorites", authMiddleware, getFavorites);


module.exports = router;