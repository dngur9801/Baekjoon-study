const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/);

const sumArr = [];

for (let i = 0; i <= N - 3; i++) {
  const newArr = [...arr];
  const firstNum = newArr.slice(i, i + 1)[0];
  for (let j = i; j <= N - 3; j++) {
    const secondNum = newArr.slice(j + 1, j + 2)[0];
    const numArr = newArr.slice(j + 2, newArr.length);
    while (numArr.length != 0) {
      const num = numArr.shift();
      const sum = Number(firstNum) + Number(secondNum) + Number(num);
      if (sum <= M) {
        sumArr.push(sum);
      }
    }
  }
}

console.log(Math.max(...sumArr));
