const { Router } = require("express");
let express = require("express");
let router = express.Router();
const users = require("../controllers/user.controller");

router.get("/", async function (req, res, next) {
  try {
    const allUsers = await users.getAll();
    res.send(allUsers);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
