const db = require("./db");
const logger = require("../../config/winston");

const getAllQuery = "SELECT * from users";

async function getAll() {
  const users = await db.query(getAllQuery);
  logger.log("All users retrieved from database :", users);
  return users;
}

module.exports = {
  getAll,
};
