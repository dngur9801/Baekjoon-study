const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const N = input.shift();
const M = input.shift();

const A = createInnerArr();
const B = createInnerArr();

function createInnerArr() {
  const arr = [];
  for (let i = 0; i < N; i++) {
    const innerArr = [];
    for (let j = 0; j < M; j++) {
      const item = input.shift();
      innerArr.push(item);
    }
    arr.push(innerArr);
  }
  return arr;
}

for (let i = 0; i < N; i++) {
  const sum = [];
  for (let j = 0; j < M; j++) {
    sum.push(A[i][j] + B[i][j]);
  }
  console.log(sum.join(' '));
}
