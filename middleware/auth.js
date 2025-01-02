const jwt = require("jsonwebtoken");
const { MESSAGES } = require("../constants.js");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");
  console.log("object123", req, res);

  if (!token) {
    return res.status(401).json({ message: MESSAGES.AUTH_REQUIRE});
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: MESSAGES.INVALID_TOKEN});
  }
};

module.exports = authMiddleware;
