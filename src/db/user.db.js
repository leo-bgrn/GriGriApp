const db = require("./db");

const getAllQuery = "SELECT * from users";

async function getAll() {
  const users = await db.query(getAllQuery);
  return users;
}

module.exports = {
  getAll
}