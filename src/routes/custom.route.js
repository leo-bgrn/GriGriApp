let express = require("express");
let router = express.Router();
const customController = require("../controllers/custom.controller");

router.get("/currentInfo", async function (req, res, next) {
  try {
    const currentInfo = await customController.getCurrentInfo();
    res.send(currentInfo);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
