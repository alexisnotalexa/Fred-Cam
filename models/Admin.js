const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("admins", 
  new Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  }));