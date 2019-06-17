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
                    error: "Email already exists"
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

router.post("/login", (req, res) => {
  const { errors, isValid } = login.validateLoginInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email })
    .then(user => {
      if (!user) return res.status(404).json({ error: "Email not found" });

      // Check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: user.id,
              name: user.name
            };
            // Sign token
            jwt.sign(
              payload,
              uri.secretOrKey,
              { expiresIn: 31556926 }, // 1 year in seconds
              (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                })
              }
            )
          } else {
            return res.status(400).json({ error: "Password incorrect" });
          }
        })
    });
})

module.exports = router;