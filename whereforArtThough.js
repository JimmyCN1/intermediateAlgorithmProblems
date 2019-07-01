// this is a function that looks through an newCollectionay of objects (first argument) and returns an newCollectionay of all objects that have
// matching name and value pairs (second argument). Each name and value pair of the source object has to be present
// in the object from the collection if it is to be included in the returned newCollectionay.

function whatIsInAName(collection, source) {
  var newCollection = [];
  newCollection = collection.filter(object => {
    let allPropertiesMatch = true;
    for (let prop in source) {
      if (!object.hasOwnProperty(prop)) {
        allPropertiesMatch = false;
      } else {
        if (object[prop] !== source[prop]) {
          allPropertiesMatch = false;
        }
      }
    }
    return allPropertiesMatch;
  });
  return newCollection;
}

whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
); // should return [{ first: "Tybalt", last: "Capulet" }]
whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 }); // should return [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }]
whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
); // should return [{ "apple": 1, "bat": 2, "cookie": 2 }]
whatIsInAName(
  [
    { apple: 1, bat: 2 },
    { apple: 1 },
    { apple: 1, bat: 2, cookie: 2 },
    { bat: 2 }
  ],
  { apple: 1, bat: 2 }
); // should return [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]
whatIsInAName([{ a: 1, b: 2, c: 3 }], { a: 1, b: 9999, c: 3 }); // should return []
