const User = require("../models/User");

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
module.exports = {
    getAllUsers,
    DeleteUser,
    blockUser,
    unblockUser
}