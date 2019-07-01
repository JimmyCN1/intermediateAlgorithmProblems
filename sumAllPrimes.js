// this algorithm will sum all primes up to and including the number passed into the function

function sumPrimes(num) {
  let initialNumberSet = [];
  for (let i = 2; i <= num; i++) {
    initialNumberSet.push(i);
  }
  let filteredNumberSet = [...initialNumberSet];
  let prime = 0;
  for (let i = 0; i < filteredNumberSet.length; i++) {
    prime = filteredNumberSet[i];
    filteredNumberSet = filteredNumberSet.filter(
      number => number === prime || number % prime !== 0
    );
  }
  let sumOfPrimes = filteredNumberSet.reduce((sum, prime) => sum + prime);
  return sumOfPrimes;
}

sumPrimes(10); // should return 17
sumPrimes(100); // should return 1060
sumPrimes(977); // should return 73156
