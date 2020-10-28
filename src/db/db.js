//const { POOL_PARAMETERS } = require("./db.secrets");

const { Pool } = require("pg");
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

/**
 * Execute a query to the database
 *
 * @param {string} sql
 * @param {Array} args
 * @return {Array}
 */
async function query(sql, args) {
  try {
    const { rows } = await pool.query(sql, args);
    return rows;
  } catch (e) {
    console.log("Unable to process SQL request : ", sql, args, e);
    throw e;
  }
}

/**
 * Execute a query to the database
 *
 * @param {string} sql
 * @param {Array} args
 * @return {Array}
 */
async function executeQuery(sql, args) {
  try {
    const { rows } = await pool.executeS(sql, args);
    return rows;
  } catch (e) {
    console.log("Unable to process SQL request : ", sql, args, e);
    throw e;
  }
}

module.exports = {
  query,
  executeQuery,
};
