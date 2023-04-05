const path = require("path");
const express = require("express");
const { check, body } = require("express-validator");
const userController = require("../controllers/user-controller");
const router = express.Router();

//GET /           -- Get Api root (Ejs capable)
router.get("/", userController.getHomePage);

//GET /countries  -- Get list of countries needs for country list to be used in UI Project
router.get("/countries", userController.getCountries);

//POST /signup    -- Sign Up or Register new user
router.post("/signup", userController.postSignup);

//POST /login     -- Login with username & password
router.post("/login", userController.postLogin);

module.exports = router;
