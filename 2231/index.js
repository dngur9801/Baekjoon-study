const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

const N = Number(input);

let output = 0;
for (let i = 1; i < N; i++) {
  let sum = 0;
  for (let j = 0; j < String(i).length; j++) {
    sum += Number(String(i)[j]);
  }
  if (i + sum == N) {
    output = i;
    break;
  }
}

console.log(output);
