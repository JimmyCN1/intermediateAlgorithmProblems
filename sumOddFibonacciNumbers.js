// given a positive integer the algorithm will return the sum of all the odd fibonacci numbers that
// are less than the positive integer

function sumFibs(num) {
  let firstNumber = 0;
  let secondNumber = 1;
  let fibonacciSum = 0;
  let fibonacciOddSum = 0;
  let previousFibOddSum = 0;
  while (true) {
    firstNumber = secondNumber;
    secondNumber = fibonacciSum;
    fibonacciSum = firstNumber + secondNumber;
    if (fibonacciSum % 2 !== 0) {
      previousFibOddSum = fibonacciOddSum;
      fibonacciOddSum += fibonacciSum;
    }
    if (fibonacciSum > num) {
      fibonacciOddSum = previousFibOddSum;
      break;
    }
  }
  console.log("fibonacci odd add: " + fibonacciOddSum);
  return fibonacciOddSum;
}

sumFibs(10); // should return 10
sumFibs(1000); // should return 1785
sumFibs(4000000); // should return 4613732
sumFibs(4); // should return 5
sumFibs(75024); // should return 60696
sumFibs(75025); // should return 135721
