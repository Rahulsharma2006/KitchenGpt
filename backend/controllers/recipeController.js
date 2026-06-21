const Recipe = require("../models/Recipe");
const cloudinary = require("../config/cloudinary");


const createRecipe = async (req, res) => {
    try {

        const {
            title,
            description,
            ingredients,
            instructions,
            imageUrl,
            imagePublicId
        } = req.body;

        if (!title || !description || !ingredients || !instructions) {
            return res.status(400).json({
                message: "All fields except imageUrl are required"
            });
        }

        const recipe = await Recipe.create({
            title,
            description,
            ingredients,
            instructions,
            imageUrl,
            imagePublicId,
            createdBy: req.user.id
        });

        res.status(201).json({
            message: "Recipe Created Successfully",
            recipe
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
 const getMyRecipes = async (req,res)=>{
    try{
        const recipes = await Recipe.find({
            createdBy: req.user.id
        });
        res.status(200).json({
            count: recipes.length,
            recipes
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
 }
   const updateRecipe = async (req,res)=>{
    try{
        const {id} = req.params;
        const recipe = await Recipe.findById(id);
        
        if(!recipe){
            return res.status(404).json({ 
                message:"Recipe not found"
            });
        }
        if(recipe.createdBy.toString() !== req.user.id){
            return res.status(403).json({
                message:"Forbidden: You can only update your own recipes"
            });
        }
        const {title,description,ingredients,instructions,imageUrl,imagePublicId} = req.body;
        recipe.title = title || recipe.title;
        recipe.description = description || recipe.description;
        recipe.ingredients = ingredients || recipe.ingredients;
        recipe.instructions = instructions || recipe.instructions;
        recipe.imageUrl = imageUrl || recipe.imageUrl;
        recipe.imagePublicId = imagePublicId || recipe.imagePublicId;

        await recipe.save();

        res.status(200).json({
            message:"Recipe Updated Successfully",
            recipe
        });

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}
const deleteRecipe = async (req,res)=>{
    try{
        const {id} = req.params;
        const recipe = await Recipe.findById(id);
        
        if(!recipe){
            return res.status(404).json({ 
                message:"Recipe not found"
            });
        }
        if(recipe.createdBy.toString() !== req.user.id){
            return res.status(403).json({
                message:"Forbidden: You can only delete your own recipes"
            });
        }
         if(recipe.imagePublicId){
    await cloudinary.uploader.destroy(recipe.imagePublicId);
      }
       await recipe.deleteOne();
        res.status(200).json({
            message:"Recipe Deleted Successfully"
        });

    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}

const getRecipeById = async (req,res)=>{
    try{
        const {id} = req.params;
        const recipe = await Recipe.findById(id).populate("createdBy","name email");
        
        if(!recipe){
            return res.status(404).json({ 
                message:"Recipe not found"
            });
        }
        res.status(200).json({
            recipe
        });
    }catch(error){
        res.status(500).json({
            message: error.message
        });
    }
}
const getAllRecipes = async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        const recipes = await Recipe.find()
            .populate("createdBy", "name email")
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit);

        res.status(200).json({
            page,
            limit,
            count: recipes.length,
            recipes
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const searchRecipes = async (req, res) => {
    try {
        const { query } = req.query;

        if (!query) {
            return res.status(400).json({
                message: "Search query is required"
            });
        }

        const recipes = await Recipe.find({
            $or: [
                { title: { $regex: query, $options: "i" } },
                { description: { $regex: query, $options: "i" } },
                { ingredients: { $regex: query, $options: "i" } }
            ]
        }).populate("createdBy", "name email");

        res.status(200).json({
            count: recipes.length,
            recipes
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
     const getLatestRecipes = async (req,res)=>{
        try{
           const recipes = await Recipe.find()
        .sort({createdAt:-1})
        .limit(5)
        .populate("createdBy","name email");

        res.status(200).json({
            count:recipes.length,
            recipes
        });

        }catch(error){
            res.status(500).json({
                message: error.message
            });
        }
     }
 const uploadImage = async (req,res)=>{
    try{

        if(!req.file){
            return res.status(400).json({
                message:"No file uploaded"
            });
        }

        res.status(200).json({
            message:"Image uploaded successfully",
            imageUrl:req.file.path,
            imagePublicId:req.file.filename
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }
}
module.exports = {
    createRecipe,
    getMyRecipes,
    updateRecipe,
    deleteRecipe,
    getRecipeById,
    getAllRecipes,
    searchRecipes,
    getLatestRecipes,
    uploadImage
};
   
