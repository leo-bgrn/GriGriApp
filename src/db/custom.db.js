const db = require("./db");
const logger = require("../../config/winston");

const getLast2UsersWithGrigriQuery =
  "SELECT grigri_location.user as user_id, grigri_location.from, users.name FROM grigri_location INNER JOIN users ON users.id = grigri_location.user ORDER BY grigri_location.from DESC LIMIT 2";

async function getLast2UsersWithGrigri() {
  const last2Users = await db.query(getLast2UsersWithGrigriQuery);
  logger.info("Get last 2 users with grigri from database :" + last2Users);
  return last2Users;
}

module.exports = {
  getLast2UsersWithGrigri,
};
