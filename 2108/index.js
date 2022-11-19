const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const N = input.shift();
const sortInput = input.sort((a, b) => a - b);

const average = Math.round(sortInput.reduce((a, b) => a + b, 0) / N);
const mid = sortInput[Math.floor(N / 2)];
const many = findManyNum(input);
const scope = sortInput.at(-1) - sortInput[0];
console.log(average === -0 ? 0 : average);
console.log(mid);
console.log(many);
console.log(scope);

function findManyNum(input) {
  const countObj = {};
  for (let num of input) {
    countObj[num] = (countObj[num] || 0) + 1;
  }

  const maxNum = Math.max.apply(null, Object.values(countObj));
  const maxNumArr = [];
  let maxNumResult = 0;

  for (let key in countObj) {
    if (countObj[key] === maxNum) {
      maxNumArr.push(key);
    }
  }

  if (maxNumArr.length > 1) {
    const sortMaxNumArr = maxNumArr.sort((a, b) => a - b);
    maxNumResult = sortMaxNumArr[1];
  } else {
    maxNumResult = maxNumArr[0];
  }
  return maxNumResult;
}
