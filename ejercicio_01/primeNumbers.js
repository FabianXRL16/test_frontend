// Verify is prime number
const isPrime = (num) => {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

// Prime numbers in a specific range
function getPrimeNumbersBetween(from, to) {
  if (Number.isInteger(from) && Number.isInteger(to)) {
    if (to > from) {
      for (let i = from; i <= to; i++) {
        if (isPrime(i)) console.log(i);
      }
    } else {
      getPrimeNumbersBetween(to, from);
    }
  }
}

getPrimeNumbersBetween(2, 15);

module.exports = getPrimeNumbersBetween;
