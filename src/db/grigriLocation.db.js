const db = require("./db");

const getGriGriLocationsWithUsersQuery =
  "SELECT users.id, users.name, grigri_location.from, grigri_location.to " +
  "FROM grigri_location " +
  "INNER JOIN users ON grigri_location.user = users.id " +
  "ORDER BY grigri_location.from DESC";

const getAllLocationsQuery = "SELECT * from grigri_location";

const getCurrentLocationQuery =
  "SELECT * from grigri_location WHERE grigri_location.to IS NULL";

const insertNewLocationQuery =
  'INSERT INTO public.grigri_location(	"user", uuid, "from", "to")	VALUES ($1, $2, $3, $4);';

const updateLocationQuery =
  'UPDATE public.grigri_location SET "to"=$2 WHERE uuid = $1;';

async function getGriGriLocationsWithUsers() {
  const locations = await db.query(getGriGriLocationsWithUsersQuery);
  console.log("Get all locations with users from database :", locations);
  return locations;
}

async function getAllLocations() {
  const locations = await db.query(getAllLocationsQuery);
  console.log("Get all locations from database :", locations);
  return locations;
}

async function insertNewLocation(userId, uuid, from) {
  await db.query(insertNewLocationQuery, [userId, uuid, from, null]);
  console.log(
    `New location inserted in database for user ${userId}, uuid ${uuid}, date ${from}`
  );
}

async function getCurrentLocation() {
  const locations = await db.query(getCurrentLocationQuery);
  console.log("Get current location from database :", locations[0]);
  return locations[0];
}

async function updateLocation(uuid, to) {
  await db.query(updateLocationQuery, [uuid, to]);
  console.log(`Location updated in database for uuid ${uuid}, to ${to}`);
}

module.exports = {
  getGriGriLocationsWithUsers,
  getAllLocations,
  insertNewLocation,
  getCurrentLocation,
  updateLocation,
};
