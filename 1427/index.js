const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const sortInput = input
  .split('')
  .map(Number)
  .sort((a, b) => b - a);

console.log(sortInput.join(''));
