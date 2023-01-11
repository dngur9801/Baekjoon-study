const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function recursion(lang, count, length) {
  if (count >= length) return `${1} ${count + 1}`;
  if (lang[count] != lang[length]) return `${0} ${count + 1}`;
  return recursion(lang, count + 1, length - 1);
}

function isPalindrome(lang) {
  return recursion(lang, 0, lang.length - 1);
}

for (let i = 0; i < n; i++) {
  console.log(isPalindrome(arr[i]));
}
