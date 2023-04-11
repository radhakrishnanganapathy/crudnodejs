const express = require("express");
const router = express.Router();
const schemas = require("../Schemas/Schemas");

// ------------------------------Static Api call------------------------------------
data = {
  name: "radha",
  age: "26",
  place: "pondi",
};
personal = {
  role: "software developer",
  location: "pondichery",
  project: "sage",
};
router.get("/", (req, res) => {
  try {
    res.json(data);
  } catch (err) {
    res.send("console.error();", err);
  }
});

router.get("/hello", (req, res) => {
  try {
    res.json(personal);
  } catch (err) {
    res.send("console.error();", err);
  }
});
//----------------------------------------------------------------------------------------------------------------------

router.post("/create", async (req, res) => {
  const createUser = new schemas({
    name: req.body.name,
    age: req.body.age,
    mobile_no: req.body.mobile_no,
    blood_group: req.body.blood_group,
  });
  const user = await createUser.save();
  res.json(user);
});

router.get("/get", async (req, res) => {
  try {
    const getuser = await schemas.find();
    res.json(getuser);
  } catch (err) {
    res.send("Error", err);
  }
});

module.exports = router;
