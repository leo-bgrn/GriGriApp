const dotenv = require("dotenv");
dotenv.config();
const customDb = require("../../db/custom.db");

describe("db custom query", () => {
  xtest("query last 2 users with grigri should returns something", async () => {
    const res = await customDb.getLast2UsersWithGrigri();
    expect(Array.isArray(res)).toBe(true);
  });
});
