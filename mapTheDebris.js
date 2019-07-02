// this algorthm will take an object consisting of a satelite that orbits the earth and
// its average alitude and calculate the satelites orbital period, return a new array of
// objects with the orbital period replacing the average altitude

function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  //orbital period equation
  const orbitalPer = altitude => {
    return Math.round(
      Math.sqrt(
        (4 * Math.pow(Math.PI, 2) * Math.pow(earthRadius + altitude, 3)) / GM
      )
    );
  };
  const newArr = arr.map(object => {
    return {
      name: object.name,
      orbitalPeriod: orbitalPer(object.avgAlt)
    };
  });
  return newArr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]); // should return [{name: "sputnik", orbitalPeriod: 86400}].
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]); // should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}]
