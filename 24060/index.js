const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(item => item.split(' ').map(item => +item));

const [[N, K], arr] = input;

let count = 0;
let el;

const merge = (arr1, arr2) => {
  let answer = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      answer.push(arr1[i]);
      i++;
    } else {
      answer.push(arr2[j]);
      j++;
    }
    count++;
    if (count === K) el = answer[answer.length - 1];
  }

  while (i < arr1.length) {
    answer.push(arr1[i]);
    i++;
    count++;
    if (count === K) el = answer[answer.length - 1];
  }

  while (j < arr2.length) {
    answer.push(arr2[j]);
    j++;
    count++;
    if (count === K) el = answer[answer.length - 1];
  }
  return answer;
};

const mergeSort = arr => {
  if (arr.length <= 1) return arr;
  let mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

mergeSort(arr);
if (!el) el = -1;
console.log(el);
