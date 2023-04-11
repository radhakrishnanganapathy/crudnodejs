const mongoose = require("mongoose");

const UserLogIn = new mongoose.Schema({
  username: {
    type: String,
    // required: true,
  },
  email: {
    type: String,
    // required: true,
  },
  mobile_no: {
    type: Number,
    // required: true,
  },
  password: {
    type: String,
    // required: true,
  },
  gender: {
    type: String,
  },
});
const login = mongoose.model("login", UserLogIn);
module.exports = login;
