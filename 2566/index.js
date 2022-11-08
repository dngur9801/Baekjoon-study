const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = Array.from(Array(9), () => new Array(9).fill(null));
let maxNum = 0;
let x = 0;
let y = 0;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    arr[i][j] = input[i].split(' ')[j];
    if (maxNum <= parseInt(arr[i][j])) {
      maxNum = parseInt(arr[i][j]);
      x = i + 1;
      y = j + 1;
    }
  }
}
console.log(maxNum);
console.log(`${x} ${y}`);
