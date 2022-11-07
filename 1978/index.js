const [n, ...arr] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split(/\s/);

let count = 0;

for (let i = 0; i < n; i++) {
  const item = parseInt(arr[i]);
  findPrimeNumber(item);
}

function findPrimeNumber(item) {
  if (item < 2) {
    return;
  }

  for (let j = 2; j < item; j++) {
    if (item % j === 0) {
      return;
    }
  }
  count++;
}

console.log(count);
