// This is a function that adds two arguments together. If only one argument is provided, then
// a function is returned that expects one argument and return the sum

function addTogether(...args) {
  if (args.length === 2) {
    // check if either argument is not a number
    if (typeof args[0] !== "number" || typeof args[1] !== "number") {
      return undefined;
    } else {
      return args[0] + args[1];
    }
  } else if (args.length === 1) {
    if (typeof args[0] !== "number") {
      return undefined;
    }
    return num2 => {
      if (typeof num2 !== "number") {
        return undefined;
      } else {
        return args[0] + num2;
      }
    };
  }
}

addTogether(2, 3); // should return 5
addTogether(2)(3); // should return 5
addTogether("http://bitly/IqT6zt"); // should return undefined
addTogether(2, "3"); // should return undefined
addTogether(2)([3]); // should return undefined
