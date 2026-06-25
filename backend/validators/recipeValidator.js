const { body, param, query } = require("express-validator");


const createRecipeValidation = [

    body("title")
        .notEmpty()
        .withMessage("Title is required"),


    body("description")
        .notEmpty()
        .withMessage("Description is required"),


    body("ingredients")
        .isArray({ min: 1 })
        .withMessage("Ingredients must be an array"),


    body("instructions")
        .notEmpty()
        .withMessage("Instructions are required")

];




const updateRecipeValidation = [

    param("id")
        .isMongoId()
        .withMessage("Invalid Recipe ID")

];




const recipeIdValidation = [

    param("id")
        .isMongoId()
        .withMessage("Invalid Recipe ID")

];




const searchRecipeValidation = [

    query("query")
        .notEmpty()
        .withMessage("Search query is required")

];




module.exports = {

    createRecipeValidation,

    updateRecipeValidation,

    recipeIdValidation,

    searchRecipeValidation

};