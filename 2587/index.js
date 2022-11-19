const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const average = input.reduce((a, b) => a + b) / input.length;
const middle = input.sort((a, b) => a - b)[Math.floor(input.length / 2)];
console.log(average);
console.log(middle);
