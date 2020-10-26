let express = require("express");
let router = express.Router();
const pointsController = require("../controllers/points.controller");

router.get("/", async function (req, res, next) {
  try {
    const results = await pointsController.getPointsByUser();
    res.send(results);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
