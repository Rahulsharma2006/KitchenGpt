const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/authMiddleware");

const {
    reportRecipe
} = require("../controllers/reportController");


router.post(
    "/:id",
    authMiddleware,
    reportRecipe
);


module.exports = router;