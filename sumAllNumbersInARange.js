function sumAll(arr) {
  let numberOrder = arr[0] - arr[1];
  let sum = 0;
  if (numberOrder < 0) {
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
  } else if (numberOrder > 0) {
    for (let i = arr[0]; i >= arr[1]; i--) {
      sum += i;
    }
  } else {
    sum = arr[0];
  }
  return sum;
}

sumAll([4, 4]);
sumAll([1, 4]);
sumAll([4, 1]);
sumAll([5, 10]);
sumAll([10, 5]);
