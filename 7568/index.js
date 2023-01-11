const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' ').map(el => Number(el)));

let arr = input.slice(1, input.length);
let result = [];
for (let i = 0; i < arr.length; i++) {
  let rank = 1;
  for (let j = 0; j < arr.length; j++) {
    if (i !== j) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) rank++;
    }
  }
  result.push(rank);
}

console.log(result.join(' '));
