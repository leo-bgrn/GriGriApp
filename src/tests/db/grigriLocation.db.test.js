const dbLocation = require("../../db/grigriLocation.db");
const uuid = require("uuid");

describe("Get Locations", () => {
  xtest("get all locations should returns a list", async () => {
    const locations = await dbLocation.getGriGriLocations();
    expect(Array.isArray(locations)).toBe(true);
  });

  xtest("insert new location should not throw", async () => {
    await dbLocation.insertNewLocation(6, uuid.v4(), new Date());
  });

  xtest("get current location should return a result", async () => {
    const location = await dbLocation.getCurrentLocation();
    expect(location.to).toBe(null);
  });
});
