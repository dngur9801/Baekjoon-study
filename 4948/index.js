const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

let N = parseInt(input);
let count = 2;
while (N !== 1) {
  if (N % count === 0) {
    N /= count;
    console.log(count);
  } else {
    count++;
  }
}
