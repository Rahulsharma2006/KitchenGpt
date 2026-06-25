const { body, param } = require("express-validator");


const reportRecipeValidation = [

    param("id")
        .isMongoId()
        .withMessage("Invalid Recipe ID"),


    body("reason")
        .notEmpty()
        .withMessage("Reason is required")

];


module.exports = {

    reportRecipeValidation

};