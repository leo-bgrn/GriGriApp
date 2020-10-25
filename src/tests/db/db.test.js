const db = require("../../db/db");

describe("db query", () => {
  xtest("query all users should returns something", async () => {
    const users = await db.query("SELECT * from USERS");
    expect(Array.isArray(users)).toBe(true);
  });
});
