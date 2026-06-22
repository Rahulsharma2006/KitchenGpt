const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require("dotenv").config();

const registerUser = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            });
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User Registered Successfully",
           user:{
             _id: user._id,
    name: user.name,
    email: user.email,
    isPremium: user.isPremium,
    role: user.role
           }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const loginUser = async (req,res)=>{
    try{
        const {email,password} = req.body;

        if(!email || !password){
            return res.status(400).json({
                message:"All fields are required"
            });
        }

        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message:"User not found"
            });
        }

        if(user.isBlocked){
    return res.status(403).json({
        message:"Your account has been blocked"
    });
}
        const isMatch = await bcrypt.compare(password, user.password);


        if(!isMatch){
            return res.status(400).json({
                message:"Invalid Credentials"
            });
        }

            const token = jwt.sign(
    { id: user._id,
    role:user.role
    },
    process.env.JWT_SECRET,
    { expiresIn: "7d" }
);
        res.status(200).json({
            message:"User Logged In Successfully",
            token,
            user:{
                _id: user._id,
                name: user.name,
                email: user.email,
                isPremium: user.isPremium,
                role: user.role
            }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const getCurrentUser = async (req, res) => {
    try {

        const user = await User.findById(req.user.id).select("-password");

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        res.status(200).json({
            message: "User Profile Granted",
            user
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
 const addToFavorites = async (req,res)=>{
    try{
        const userId = req.user.id;
        const recipeId = req.params.recipeId;

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message:"User Not Found"
            });
        }

        if(user.favorites.includes(recipeId)){
            return res.status(400).json({
                message:"Recipe already in favorites"
            });
        }

        user.favorites.push(recipeId);
        await user.save();

        res.status(200).json({
            message:"Recipe added to favorites",
            favorites:user.favorites
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const removeFromFavorites = async (req,res)=>{
    try{
        const userId = req.user.id;
        const recipeId = req.params.recipeId;

        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({
                message:"User Not Found"
            });
        }

        if(!user.favorites.includes(recipeId)){
            return res.status(400).json({
                message:"Recipe not in favorites"
            });
        }

        user.favorites.pull(recipeId);
        await user.save();

        res.status(200).json({
            message:"Recipe removed from favorites",
            favorites:user.favorites
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
  const getFavorites = async (req,res)=>{
    try{
        const userId = req.user.id;
        
        const user = await User.findById(userId).populate("favorites");
        res.status(200).json({
            message: "Favorites retrieved successfully",
            favorites: user.favorites
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports ={
    loginUser,
    registerUser,
    getCurrentUser,
    addToFavorites,
    removeFromFavorites,
    getFavorites
}