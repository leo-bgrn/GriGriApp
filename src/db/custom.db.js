const db = require("./db");
const logger = require("../../config/winston");

const getLast2UsersWithGrigriQuery =
  "SELECT grigri_location.user as user_id, grigri_location.from, users.name, users.avatar FROM grigri_location INNER JOIN users ON users.id = grigri_location.user ORDER BY grigri_location.from DESC LIMIT 2";

const getHistoricWithUsersNameQuery =
  "SELECT users.name, grigri_location.from, grigri_location.to, users.avatar FROM grigri_location INNER JOIN users ON grigri_location.user = users.id ORDER BY grigri_location.from DESC";

async function getLast2UsersWithGrigri() {
  const last2Users = await db.query(getLast2UsersWithGrigriQuery);
  logger.info("Get last 2 users with grigri from database :" + last2Users);
  return last2Users;
}

async function getHistoricWithUsersName() {
  const historic = await db.query(getHistoricWithUsersNameQuery);
  logger.info("Get Historic with users :" + historic);
  return historic;
}

module.exports = {
  getLast2UsersWithGrigri,
  getHistoricWithUsersName,
};
