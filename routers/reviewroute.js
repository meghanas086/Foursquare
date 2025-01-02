const express = require("express");
const { addReview } = require("../controller/reviewcontroller");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.post("/reviews", authMiddleware, addReview);

module.exports = router;
