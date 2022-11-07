const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

let [num1, num2] = input.map(item => parseInt(item));

let isPrime = true;
let sqrNum = Math.sqrt(num1);
while (num1 <= num2) {
  isPrime = true;
  sqrNum = Math.sqrt(num1);
  for (let i = 1; i < sqrNum; i++) {
    if (num1 % (i + 1) == 0) {
      isPrime = false;
      break;
    }
  }
  if (num1 != 1 && num1 != 2) {
    if (isPrime) {
      console.log(num1);
    }
  } else if (num1 == 2) {
    console.log(2);
  }
  num1++;
}
