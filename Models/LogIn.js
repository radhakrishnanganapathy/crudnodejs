const express = require("express");
const router = express.Router();
const loginSchema = require("../Schemas/LoginSchema");

router.post("/login_create", async (req, res) => {
  const CreateLogin = new loginSchema({
    username: req.body.username,
    email: req.body.email,
    mobile_no: req.body.mobile_no,
    password: req.body.password,
    gender: req.body.gender,
  });
  const userSave = await CreateLogin.save();
  console.log("dffdsf");
  res.json(userSave);
});

router.get("/userlogin", async (req, res) => {
  const checklogin = await loginSchema.find();
  for (i in checklogin) {
    console.log(checklogin);
  }
  res.json(checklogin);
});
router.get("/:name", async (req, res) => {
  userSchema.statics.getByName = await function (name) {
    const userId = loginSchema.findOne({ name: name });
    res.json(userId);
  };
});
module.exports = router;
