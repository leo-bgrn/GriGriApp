const locationController = require("../../controllers/grigriLocation.controller");
const location = require("../../db/grigriLocation.db");

jest.mock("../../db/grigriLocation.db");

describe("Location Controller", () => {
  test("getCurrentLocation should return current location", async () => {
    const locations = [
      {
        id: 1,
        name: "Léo",
        fromDate: new Date(2020, 10, 26, 10, 0, 0),
        toDate: null,
      },
      {
        id: 3,
        name: "Romain",
        fromDate: new Date(2020, 10, 25, 10, 0, 0),
        toDate: new Date(2020, 10, 26, 10, 0, 0),
      },
      {
        id: 2,
        name: "Nico",
        fromDate: new Date(2020, 10, 19, 10, 0, 0),
        toDate: new Date(2020, 10, 25, 10, 0, 0),
      },
    ];
    location.getGriGriLocations.mockImplementation(() =>
      Promise.resolve(locations)
    );
    const res = await locationController.getCurrentLocation();
    expect(res["id"]).toBe(1);
  });
});
