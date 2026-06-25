const Report = require("../models/Report");
const Recipe = require("../models/Recipe");

const reportRecipe = async (req, res) => {
    try {

        const recipeId = req.params.id;
        const userId = req.user.id;
        const { reason } = req.body;


        // Reason Validation
        if (!reason) {
            return res.status(400).json({
                message: "Reason is required"
            });
        }


        // Recipe Exists Check
        const recipe = await Recipe.findById(recipeId);

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            });
        }


        // Duplicate Report Check
        const existingReport = await Report.findOne({
            recipe: recipeId,
            reportedBy: userId
        });

        if (existingReport) {
            return res.status(400).json({
                message: "Recipe already reported"
            });
        }


        // Create Report
        const report = await Report.create({
            recipe: recipeId,
            reportedBy: userId,
            reason
        });


        res.status(201).json({
            message: "Recipe reported successfully",
            report
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};

module.exports = {
    reportRecipe
};