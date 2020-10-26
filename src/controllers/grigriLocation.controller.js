const dbLocation = require("../db/grigriLocation.db");
const uuid = require("uuid");

async function getCurrentLocation() {
  const location = await dbLocation.getCurrentLocation();
  return location;
}

async function getAllLocationsWithUsers() {
  const locations = await dbLocation.getGriGriLocationsWithUsers();
  return locations;
}

async function getAllLocations() {
  const locations = await dbLocation.getAllLocations();
  return locations;
}

async function newLocation(userId) {
  const nowDate = new Date();
  const locationToUpdate = await getCurrentLocation();
  await dbLocation.updateLocation(locationToUpdate.uuid, nowDate);
  await dbLocation.insertNewLocation(userId, uuid.v4(), nowDate);
}

module.exports = {
  getCurrentLocation,
  getAllLocationsWithUsers,
  getAllLocations,
  newLocation,
};
