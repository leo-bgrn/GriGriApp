function computePoints(allLocations, allUsers) {
  let pointsByUserId = {};
  allUsers.map((user) => (pointsByUserId[user.id] = 0));
  allLocations.map((location) => {
    pointsByUserId[location.user] += datesToPoints(location.from, location.to);
  });

  let res = [];
  allUsers.map((user) =>
    res.push({
      user: {
        id: user.id,
        name: user.name,
      },
      points: pointsByUserId[user.id],
    })
  );
  return res;
}

function datesToPoints(from, to) {
  if (!to) {
    to = new Date();
  }
  const diff = to - from;
  return diff / 1000 / 60 / 60 / 24;
}

module.exports = {
  computePoints,
  datesToPoints,
};
