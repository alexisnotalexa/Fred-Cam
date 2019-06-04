const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uri = require("../../config/keys");

const login = require("../../validation/login");
const register = require("../../validation/register");

const User = require("../../models/User");

router.post("/register", (req, res) => {
  const { errors, isValid } = register.validateRegisterInput(req.body);

  if(!isValid) return res.status(400).json(errors);

  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400)
                  .json({
                    email: "Email already exists"
                  });
      } else {
        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        // hash password before saving in db
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.password, salt, (error, hash) => {
            if (error) throw error;
            newUser.password = hash;
            newUser.save()
              .then(user => res.json(user))
              .catch(error => console.log(error));
          })
        })
      }
    });
});

module.exports = router;