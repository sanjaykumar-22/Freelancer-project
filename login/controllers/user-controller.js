const bcrypt = require("bcryptjs");
const mongodb = require("mongodb");
const axios = require("axios");
const { validationResult } = require("express-validator");
const User = require("../models/user-model");

exports.getTestData = (req, res, next) => {
  return res.json({ message: "This is test data", error: false });
};

exports.getCountries = (req, res, next) => {
  axios.get("https://api.printful.com/countries").then((result) => {
    res.json(result.data);
  });
};

exports.getHomePage = (req, res, next) => {
  res.render("index", {
    path: "/index",
    data: 5000,
  });
};

exports.postLogin = (req, res, next) => {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
    
  console.log("User Name: ", username, "Password: ", password);

  User.findOne({ username: username })
    .then((user) => {
      if (!user) {        
        return res.json({
          message: "Invalid username or password",
          error: true,
        });
      }

      bcrypt
        .compare(password, user.password)
        .then((doMatched) => {
          if (doMatched) {            
            let loggedInUser = {
              username: user.username,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email,
              gender: user.gender,
              country: user.country,
              message: "Login successfull",
              error: false,
            };

            return res.json({ loggedInUser });
          } else {
            return res.json({
              message: "Login NOT successfull",
              error: true,
            });
          }          
        })
        .catch((err2) => {          
          return res.json({
            message: err2,
            error: true,
          });
        });
    })
    .catch((err) => {
      console.log(err);
      return res.json({
        message: err,
        error: true,
      });
    });
};

exports.postSignup = (req, res, next) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const gender = req.body.gender;
  const country = req.body.country;

  const errors = validationResult(req);
  
  User.findOne({ email: email })
    .then((userDoc) => {
      if (userDoc) {        
        res.json({ message: "E-mail already in use!!", error: false });
      }
      return bcrypt
        .hash(password, 12)
        .then((hashedPassword) => {
          const user = new User({
            username: username,
            email: email,
            password: hashedPassword,
            firstname: firstname,
            lastname: lastname,
            gender: gender,
            country: country,
          });
          return user.save();
        })
        .then((result) => {
          res.json({ message: "Signup successfull", error: false });
        })
        .catch((err2) => {
          res.json({ message: err2, error: true });
        });
    })
    .catch((err) => {
      res.json({ message: err, error: true });
    });
};