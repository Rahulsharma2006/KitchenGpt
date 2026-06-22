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
module.exports = {
    getAllUsers,
    DeleteUser
}