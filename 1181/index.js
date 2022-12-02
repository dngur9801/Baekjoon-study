const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

arr.sort((next, prev) => {
  if (next.length < prev.length) {
    return -1;
  }
  if (next.length === prev.length) {
    return next < prev ? -1 : 1;
  }
  return 1;
});

const removeSameValueArr = [...new Set(arr)];

console.log(removeSameValueArr.join('\n'));
