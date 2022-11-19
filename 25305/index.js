const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, K] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);
const prizeScores = [];
for (let i = 0; i < N; i++) {
  prizeScores.push(arr[i]);
  if (prizeScores.length === K) {
    break;
  }
}
console.log(prizeScores[K - 1]);
