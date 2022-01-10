const express = require("express");

// initialixzation
const router = express.Router();

// controllers
const { deposit } = require("../controllers/deposit");
// routes
router.route("/").put(deposit);

module.exports = router;
