const express = require("express");

// initialixzation
const router = express.Router();

// controllers
const { pay } = require("../controllers/payment");

// routes
router.route("/pay").post(pay);

module.exports = router;
