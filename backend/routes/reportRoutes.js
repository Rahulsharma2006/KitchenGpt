const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");
const validate = require("../middleware/validateMiddleware");

const { reportRecipe } = require("../controllers/reportController");
const { reportRecipeValidation } = require("../validators/reportValidator");

router.post(
    "/:id",
    authMiddleware,
    reportRecipeValidation,
    validate,
    reportRecipe
);

module.exports = router;