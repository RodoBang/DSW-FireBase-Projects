const jwt = require("jsonwebtoken");

const JWT_SECRET = require("../controllers/authController").JWT_SECRET;

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return res.status(403).json({ code: 403, message: "No token provided" });
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
        console.log(err);
        if(err){
            switch(err.name){
                case "JsonWebTokenError":
                    return res.status(403).json({ code: 403, message: "Invalid token" });
                case "TokenExpiredError":
                    return res.status(403).json({ code: 403, message: "Token expired" });
                default:
                    return res.status(500).json({ code: 500, message: "Internal server error" });
            }
        }
        req.user = user;
        next();
    });
}

module.exports = authenticateToken;
