const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

let count = 0;
const fibArr = [];
function fibonacci(count) {
  if (input == 0) return 0;
  if (input == 1) return 1;

  if (count > 1) {
    const sum = fibArr[count - 2] + fibArr[count - 1];
    fibArr.push(sum);
    if (count == input) return sum;
  }

  if (count < 2) {
    fibArr.push(count);
  }
  count++;
  return fibonacci(count);
}

console.log(fibonacci(count));
