const User = require("../db/user.db");

async function getAll() {
  const users = await User.getAll();
  return users;
}

module.exports = {
  getAll,
};
