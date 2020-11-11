const pointsComputer = require("../computers/points.computer");
const customDb = require("../db/custom.db");
const pointsController = require("./points.controller");

async function getCurrentInfo() {
  const dbRes = await customDb.getLast2UsersWithGrigri();
  const points = await pointsController.getPointsByUser();
  let res = {
    user: {
      name: dbRes[0].name,
      totalPoints: points.filter(
        (point) => point.user.name === dbRes[0].name
      )[0].points,
      pointsDueToNow: pointsComputer.datesToPoints(dbRes[0].from, null),
    },
    lastUser: dbRes[1].name,
    since: dbRes[1].from,
  };
  return res;
}

module.exports = {
    getCurrentInfo
}