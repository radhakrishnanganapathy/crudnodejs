const mongoose = require("mongoose");

const CreateUser = new mongoose.Schema({
  name: {
    type: String,
    // required: true,
  },
  age: {
    type: Number,
    // required: true,
  },
  mobile_no: {
    type: Number,
    // required: true,
  },
  blood_group: {
    type: String,
    // required: true,
  },
});

const demo = mongoose.model("schemas", CreateUser);

module.exports = demo;
