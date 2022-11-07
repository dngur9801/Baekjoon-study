const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [M, N] = input.map(item => Number(item));
let primeNumbers = [];
let sum = 0;

for (let target = M; target <= N; target++) {
  for (let i = 2; i <= target; i++) {
    if (i * i > target) {
      primeNumbers.push(target);
      sum += target;
      break;
    }
    if (target % i === 0) {
      break;
    }
  }
}
if (primeNumbers.length === 0) {
  console.log(-1);
} else {
  console.log(sum);
  console.log(primeNumbers[0]);
}
