const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(item => Number(item));

for (let num of input) {
  if (num === 0) {
    break;
  }

  const n = num + 1;
  const m = num * 2;
  const primeNums = new Array(m + 1);
  let count = 0;

  primeNums.fill(true);
  primeNums[0] = primeNums[1] = false;

  for (let i = 2; i <= m; i++) {
    if (Math.pow(i, 2) > 1000000) {
      break;
    } else {
      for (let j = Math.pow(i, 2); j <= m; j += i) {
        primeNums[j] = false;
      }
    }
  }

  for (let i = n; i <= m; i++) {
    if (primeNums[i]) {
      count++;
    }
  }
  console.log(count);
}
