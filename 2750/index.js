const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

arr.sort((a, b) => a - b);
for (let i = 0; i < N; i++) {
  console.log(arr[i]);
}
