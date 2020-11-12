let express = require("express");
let router = express.Router();
const customController = require("../controllers/custom.controller");
const customDb = require("../db/custom.db");

router.get("/currentInfo", async function (req, res, next) {
  try {
    const currentInfo = await customController.getCurrentInfo();
    res.send(currentInfo);
  } catch (e) {
    next(e);
  }
});

router.get("/historic", async function (req, res, next) {
  try {
    const historic = await customDb.getHistoricWithUsersName();
    res.send(historic);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
