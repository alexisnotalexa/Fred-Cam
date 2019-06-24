const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const uri = require("../../config/keys");

const login = require("../../validation/login");
const register = require("../../validation/register");

const Admin = require("../../models/Admin");

router.post("/register", (req, res) => {
  const { errors, isValid } = register.validateRegisterInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  Admin.findOne({ email: req.body.email })
    .then(admin => {
      if (admin) {
        return res.status(400)
                  .json({
                    error: "Email already exists"
                  });
      } else {
        const newAdmin = new Admin({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });

        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newAdmin.password, salt, (error, hash) => {
            if (error) throw error;
            newAdmin.password = hash;
            newAdmin.save()
              .then(admin => res.json(admin))
              .catch(error => console.log(error));
          });
        });
      }
    });
});

router.post("/login", (req, res) => {
  const { errors, isValid } = login.validateLoginInput(req.body);

  if (!isValid) return res.status(400).json(errors);

  const email = req.body.email;
  const password = req.body.password;

  // Find admin by email
  Admin.findOne({ email })
    .then(admin => {
      if (!admin) return res.status(400).json({ error: "Email not found" });

      // Check password 
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if (isMatch) {
            const payload = {
              id: admin.id,
              name: admin.name
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
                });
              }
            )
          } else {
            return res.status(400).json({ error: "Password incorrect" });
          }
        })
    });
});

router.post("/requests", (req, res) => {

});

router.post("/convert", (req, res) => {

});

module.exports = router;