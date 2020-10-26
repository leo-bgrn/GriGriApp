const locationController = require("./grigriLocation.controller");
const userController = require("./user.controller");
const pointsComputer = require("../computers/points.computer");

async function getPointsByUser() {
  const allLocations = await locationController.getAllLocations();
  const allUsers = await userController.getAll();
  const res = pointsComputer.computePoints(allLocations, allUsers);
  return res;
}

module.exports = {
  getPointsByUser,
};
