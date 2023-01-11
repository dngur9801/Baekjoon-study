const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/);

const parseIntArr = arr.map(item => parseInt(item));
const set = [...new Set(parseIntArr)].sort((a, b) => a - b);
const object = {};
const compressionArr = [];

for (let i = 0; i < set.length; i++) {
  object[set[i]] = i;
}
for (let i = 0; i < n; i++) {
  compressionArr.push(object[parseIntArr[i]]);
}
console.log(compressionArr.join(' '));
