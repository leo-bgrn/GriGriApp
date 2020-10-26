let express = require("express");
const grigriLocationController = require("../controllers/grigriLocation.controller");
let router = express.Router();

router.get("/current", async function (req, res, next) {
  try {
    const currentLocation = await grigriLocationController.getCurrentLocation();
    res.send(currentLocation);
  } catch (e) {
    next(e);
  }
});

router.get("/", async function (req, res, next) {
  try {
    const allLocations = await grigriLocationController.getAllLocationsWithUsers();
    res.send(allLocations);
  } catch (e) {
    next(e);
  }
});

router.post("/new", async function (req, res, next) {
  try {
    const userId = req.body["userId"];
    await grigriLocationController.newLocation(userId);
    res.status(201).send();
  } catch (e) {
    next(e);
  }
});

module.exports = router;
