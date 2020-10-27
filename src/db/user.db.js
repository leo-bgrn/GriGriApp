const db = require("./db");

const getAllQuery = "SELECT * from users";

async function getAll() {
  const users = await db.query(getAllQuery);
  console.log("All users retrieved from database :", users);
  return users;
}

module.exports = {
  getAll,
};
