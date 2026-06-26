const { param } = require("express-validator");

const userIdValidation = [

    param("id")
        .isMongoId()
        .withMessage("Invalid User ID")

];

const recipeIdValidation = [

    param("id")
        .isMongoId()
        .withMessage("Invalid Recipe ID")

];

const reportIdValidation = [

    param("id")
        .isMongoId()
        .withMessage("Invalid Report ID")

];

module.exports = {
    userIdValidation,
    recipeIdValidation,
    reportIdValidation
};