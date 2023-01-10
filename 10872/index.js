const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

let sum = 1;
function factorial(n) {
  if (n <= 0) return sum;
  sum *= n;
  n--;
  return factorial(n);
}

factorial(input);
console.log(sum);
