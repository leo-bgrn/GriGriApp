const pointsComputer = require("../../computers/points.computer");

describe("compute points", () => {
  test("computePoints should compute points", () => {
    const locations = [
      {
        user: 1,
        uuid: "",
        fromDate: new Date(2020, 9, 26, 10, 0, 0),
        toDate: null,
      },
      {
        user: 3,
        uuid: "",
        fromDate: new Date(2020, 9, 25, 10, 0, 0),
        toDate: new Date(2020, 9, 26, 10, 0, 0),
      },
      {
        user: 2,
        uuid: "",
        fromDate: new Date(2020, 9, 19, 10, 0, 0),
        toDate: new Date(2020, 9, 25, 10, 0, 0),
      },
    ];
    const users = [
      {
        id: 1,
        name: "Léo",
      },
      {
        id: 2,
        name: "Nico",
      },
      {
        id: 3,
        name: "Romain",
      },
    ];
    const res = pointsComputer.computePoints(locations, users);
    expect(res[0].points).toBeGreaterThan(0);
    expect(Math.floor(res[1].points)).toBe(6);
    expect(Math.floor(res[2].points)).toBe(1);
  });
});
