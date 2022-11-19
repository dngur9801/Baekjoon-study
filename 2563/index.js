const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

const whitePaper = Array.from(Array(100), () => Array(100).fill(false));
let count = 0;
while (arr.length !== 0) {
  const blackPaperX = arr.shift();
  const blackPaperY = arr.shift();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (!whitePaper[blackPaperY + i][blackPaperX + j]) {
        whitePaper[blackPaperY + i][blackPaperX + j] = true;
        count++;
      }
    }
  }
}
console.log(count);
