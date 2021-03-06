const mongoose = require("mongoose");
const Schema = mongoose.Schema;

module.exports = mongoose.model("users", 
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
    },
    date: {
      type: Date,
      default: Date.now
    },
    status: {
      type: String,
      enum: ['NEW', 'APPROVED', 'DENIED'],
      default: 'NEW'
    }
  }));