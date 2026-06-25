const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const adminMiddleware = require("../middleware/adminMiddleware");
const { getAllUsers } = require("../controllers/adminController");
const { DeleteUser } = require("../controllers/adminController");
const { blockUser } = require("../controllers/adminController");
const { unblockUser } = require("../controllers/adminController");
const { makePremium } = require("../controllers/adminController");
const { removePremium } = require("../controllers/adminController");
const {getDashboardStats} = require("../controllers/adminController");
const { getPendingRecipes } = require("../controllers/adminController");
const { approveRecipe } = require("../controllers/adminController");
const { rejectRecipe } = require("../controllers/adminController");
const {reviewReport} = require("../controllers/adminController");
const {getAllReports} = require("../controllers/adminController");

router.get("/reports",
 authMiddleware,
 adminMiddleware,
 getAllReports
 );
router.put(
    "/reports/:id/review",
    authMiddleware,
    adminMiddleware,
    reviewReport
);
router.get(
    "/pending-recipes",
    authMiddleware,
    adminMiddleware,
    getPendingRecipes
)

router.patch(
    "/approve-recipe/:id",
    authMiddleware,
    adminMiddleware,
    approveRecipe
)

router.patch(
    "/reject-recipe/:id",
    authMiddleware,
    adminMiddleware,
    rejectRecipe
)   

router.get(
    "/dashboard-stats",
    authMiddleware,
    adminMiddleware,
    getDashboardStats
)


router.patch(
    "/remove-premium/:id",
    authMiddleware,
    adminMiddleware,
    removePremium
)

router.patch(
    "/make-premium/:id",
    authMiddleware,
    adminMiddleware,
    makePremium
)

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