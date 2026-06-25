const User = require("../models/User");
const Recipe = require("../models/Recipe");
const Report = require("../models/Report");


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
        const totalApprovedRecipes =await Recipe.countDocuments({status:"approved"});
        const totalPendingRecipes =await Recipe.countDocuments({status:"pending"});
        const totalRejectedRecipes =await Recipe.countDocuments({status:"rejected"});

        res.status(200).json({
            totalUsers,
            totalPremiumUsers,
            totalBlockedUsers,
            totalRecipes,
            totalApprovedRecipes,
            totalPendingRecipes,
            totalRejectedRecipes
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
  const getPendingRecipes = async (req, res) => {
    try{
        const pendingRecipes = await Recipe.find({status:'pending'}).populate('createdBy','name email').sort({createdAt:-1});
        res.status(200).json({
            count:pendingRecipes.length,
           recipes: pendingRecipes
        });
    } catch (error) {
        res.status(500).json({
          message: error.message
        }); 
    }
  };
  const approveRecipe = async (req, res) => {
    try {
        const { id } = req.params;

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            });
        }
     if(recipe.status==="approved"){
    return res.status(400).json({

        message:"Recipe already approved"

    });
     }
       if(recipe.status==="rejected"){
    return res.status(400).json({
        message:"Rejected recipe cannot be approved directly"
    });
     }
        recipe.status = 'approved';

        await recipe.save();

        res.status(200).json({
            message: "Recipe approved successfully",
            recipe
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const rejectRecipe = async (req, res) => {
    try {
        const { id } = req.params;

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({
                message: "Recipe not found"
            });
        }
        
         if(recipe.status==="rejected"){
    return res.status(400).json({

        message:"Recipe already rejected"

      });
      }
      if(recipe.status==="approved"){
    return res.status(400).json({
        message:"approved recipe cannot be rejected directly"
    });
}
        recipe.status = 'rejected';

        await recipe.save();

        res.status(200).json({
            message: "Recipe rejected successfully",
            recipe
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};
const reviewReport = async (req, res) => {
    try {

        const { id } = req.params;

        const report = await Report.findById(id);

        if (!report) {
            return res.status(404).json({
                message: "Report not found"
            });
        }

        if (report.status === "reviewed") {
            return res.status(400).json({
                message: "Report already reviewed"
            });
        }

        report.status = "reviewed";

        await report.save();

        res.status(200).json({
            message: "Report reviewed successfully",
            report
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};
const getAllReports = async (req,res)=>{
    try{

        const reports = await Report.find()
        .populate("recipe","title status")
        .populate("reportedBy","name email")
        .sort({createdAt:-1});

        res.status(200).json({
            count:reports.length,
            reports
        });

    }
    catch(error){
        res.status(500).json({
            message:error.message
        });
    }
}
module.exports = {
    getAllUsers,
    DeleteUser,
    blockUser,
    unblockUser,
    makePremium,
    removePremium,
    getDashboardStats,
    getPendingRecipes,
    approveRecipe,
    rejectRecipe,
    reviewReport,
    getAllReports
}