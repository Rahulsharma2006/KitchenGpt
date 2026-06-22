const adminMiddleware = (req, res, next) => {
   
    if (!req.user) {
        return res.status(401).json({
            message: "Access Denied"
        });
    }

    if (req.user.role !== "admin") {
        return res.status(403).json({
            message: "Forbidden: Insufficient Permissions"
        });
    }

    next();
};

module.exports = adminMiddleware;