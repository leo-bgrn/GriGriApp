const user = require("../../db/user.db");

describe("Get Users", () => {
  xtest("get all users should returns a list", async () => {
    const users = await user.getAll();
    expect(Array.isArray(users)).toBe(true);
  });
});
