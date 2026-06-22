const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const { getAllUsers } = require("../controllers/adminController");
const { DeleteUser } = require("../controllers/adminController");
const { blockUser } = require("../controllers/adminController");
const { unblockUser } = require("../controllers/adminController");

router.patch(
    "/block-user/:id",
    authMiddleware,
    adminMiddleware,
    blockUser
);
router.patch(
    "/unblock-user/:id",
    authMiddleware,
    adminMiddleware,
    unblockUser
)
router.delete(
    "/delete-users/:id",
    authMiddleware,
    adminMiddleware,
    DeleteUser
);
router.get(
    "/users",
    authMiddleware,
    adminMiddleware,
    getAllUsers
);


module.exports = router;