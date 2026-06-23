const User = require("../models/User");
const Recipe = require("../models/Recipe");

const getAllUsers = async (req, res) => {
    try {

        const users = await User.find()
            .select("-password");

        res.status(200).json({
            count: users.length,
            users
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const DeleteUser = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.role === "admin") {
            return res.status(403).json({
                message: "Admin cannot be deleted"
            });
        }

        await user.deleteOne();

        res.status(200).json({
            message: "User deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const blockUser = async (req,res)=>{
    try{

        const {id} = req.params;

        const user = await User.findById(id);

        if(!user){
            return res.status(404).json({
                message:"User not found"
            });
        }

        if(user.role === "admin"){
            return res.status(403).json({
                message:"Admin cannot be blocked"
            });
        }

        user.isBlocked=true;

        await user.save();

        res.status(200).json({
            message:"User blocked successfully",
            user:{
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                isBlocked:user.isBlocked
            }
        });

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }
}
const unblockUser = async (req, res) => {
    try {

        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        if (user.role === "admin") {
            return res.status(403).json({
                message: "Admin cannot be unblocked"
            });
        }

        if (!user.isBlocked) {
            return res.status(400).json({
                message: "User is already unblocked"
            });
        }

        user.isBlocked = false;

        await user.save();

        res.status(200).json({
            message: "User unblocked successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isBlocked: user.isBlocked
            }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
   const makePremium = async (req, res) => {
    try {
       const {id} = req.params;

       const user = await User.findById(id);
       
       if(!user){
        return res.status(404).json({
            message:"User not found"
        });
       }
       if(user.role === "admin"){
        return res.status(403).json({
            message:"Admin cannot be made premium"
        });
       }
       if(user.isPremium){
        return res.status(400).json({
            message:"User is already premium"
        });
       }

       user.isPremium = true;

       await user.save();

       res.status(200).json({
        message:"User made premium successfully",
        user:{
            _id:user._id,
            name:user.name,
            email:user.email,
            role:user.role,
            isPremium:user.isPremium
        }
       });
    }catch(error){
        res.status(500).json({
            message:error.message
        });
    } 
};
const removePremium = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }
        if (user.role === "admin") {
            return res.status(403).json({
                message: "Admin cannot be removed from premium"
            });
        }
        if (!user.isPremium) {
            return res.status(400).json({
                message: "User is not premium"
            });
        }

        user.isPremium = false;

        await user.save();

        res.status(200).json({
            message: "User removed from premium successfully",
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                isPremium: user.isPremium
            }
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
            });
        }
    };
 const getDashboardStats = async (req, res) => {
    try {
        const totalUsers = await User.countDocuments();
        const totalPremiumUsers = await User.countDocuments({ isPremium: true });
        const totalBlockedUsers = await User.countDocuments({ isBlocked: true });
        const totalRecipes = await Recipe.countDocuments();

        res.status(200).json({
            totalUsers,
            totalPremiumUsers,
            totalBlockedUsers,
            totalRecipes
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
module.exports = {
    getAllUsers,
    DeleteUser,
    blockUser,
    unblockUser,
    makePremium,
    removePremium,
    getDashboardStats
}