const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/mydb2";

mongoose.connect(url);

const con = mongoose.connection;

con.on("open", function () {
  console.log("db connected");
});
