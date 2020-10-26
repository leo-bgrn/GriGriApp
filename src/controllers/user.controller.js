const dbUsers = require("../db/user.db");

async function getAll() {
  const users = await dbUsers.getAll();
  return users;
}

module.exports = {
  getAll,
};
