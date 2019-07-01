// an algorithm to find the lowest common multiple of all the numbers inbetween and
// including the two numbers passed into the function

function smallestCommons(arr) {
  let newArr = [...arr];
  newArr.sort((num1, num2) => num1 - num2);
  let spreadArr = [];
  for (let i = newArr[0]; i <= newArr[1]; i++) {
    spreadArr.push(i);
  }
  const largest = newArr[1];
  let foundSmallestCommonMultiple = false;
  let multiplier = 1;
  while (!foundSmallestCommonMultiple) {
    let isDivisor = true;
    spreadArr.forEach(number => {
      if ((largest * multiplier) % number !== 0) {
        isDivisor = false;
      }
    });
    if (!isDivisor) {
      multiplier++;
    } else {
      foundSmallestCommonMultiple = true;
    }
  }
  return largest * multiplier;
}

smallestCommons([1, 5]); // should return 60
smallestCommons([5, 1]); // should return 60
smallestCommons([2, 10]); // should return 2520
smallestCommons([1, 13]); // should return 360360
smallestCommons([23, 18]); // should return 6056820
