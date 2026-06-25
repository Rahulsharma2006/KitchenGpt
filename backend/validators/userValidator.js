const { body } = require("express-validator");


const registerValidation = [

body("name")
.notEmpty()
.withMessage("Name is required"),


body("email")
.notEmpty()
.withMessage("Email is required")
.isEmail()
.withMessage("Invalid email format"),


body("password")
.notEmpty()
.withMessage("Password is required")
.isLength({min:6})
.withMessage("Password must be at least 6 characters")


];



const loginValidation = [

body("email")
.notEmpty()
.withMessage("Email is required")
.isEmail()
.withMessage("Invalid email"),



body("password")
.notEmpty()
.withMessage("Password is required")

];


module.exports={

registerValidation,
loginValidation

};