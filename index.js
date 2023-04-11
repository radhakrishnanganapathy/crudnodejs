const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:8080" }));

app.use(express.json());

const Router = require("./Models/Entites");
app.use("/home", Router);
const LoginRouter = require("./Models/LogIn");
app.use("/login", LoginRouter);

const con = require("./Db_connection/db");

app.listen(8082, () => {
  console.log("connected");
});
