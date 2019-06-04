// PACKAGES
const express = require("express");
const bp = require("body-parser");
const mongoose = require("mongoose");

// CONFIG
const uri = require("./config/keys").mongoURI;
const PORT = process.env.PORT || 8080;

const app = express();

// BODY-PARSER
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());

// MONGODB
mongoose.connect(uri, { useNewUrlParser: true})
  .then(() => console.log("MongoDB successfully connected!"))
  .catch(error => console.log(error));

app.listen(PORT, () => {
  console.log(`SERVER: Listening on ${PORT}`);
});