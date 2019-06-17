// PACKAGES
const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");

// CONFIG
const uri = require("./config/keys").mongoURI;
const PORT = process.env.PORT || 8080;

const users = require("./routes/api/users");

const app = express();

// BODY-PARSER
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// PASSPORT MIDDLEWARE
app.use(passport.initialize());

// PASSPORT CONFIG
require("./config/passport")(passport);

// ROUTES
app.use("/api/users", users);

// MONGODB
mongoose.connect(uri, { useNewUrlParser: true})
  .then(() => console.log("MongoDB successfully connected!"))
  .catch(error => console.log(error));

app.listen(PORT, () => {
  console.log(`SERVER: Listening on ${PORT}`);
});