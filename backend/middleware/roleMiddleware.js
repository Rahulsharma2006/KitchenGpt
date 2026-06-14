const jwt = require("jsonwebtoken");
require("dotenv").config();

const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization;

            if (!token) {
                return res.status(401).json({
                    message: "Access Denied"
                });
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            if (decoded.role !== requiredRole) {
                return res.status(403).json({
                    message: "Forbidden: Insufficient Permissions"
                });
            }

            req.user = decoded;
            next();
        } catch (error) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }
    };
};

module.exports = roleMiddleware;