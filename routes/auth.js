const express = require("express");

// initialixzation
const router = express.Router();

// controllers
const { login, register } = require("../controllers/auth");

// routes
router.route("/login").post(login);
router.route("/register").post(register);

module.exports = router;
