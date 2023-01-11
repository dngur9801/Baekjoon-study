const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = Number(require('fs').readFileSync(filePath).toString().trim());

let count = 0;
let result = [];

function hanoi(num, from, other, to) {
  if (!num) return;
  else {
    hanoi(num - 1, from, to, other);
    result.push([from, to]);
    count++;
    hanoi(num - 1, other, from, to);
  }
}
hanoi(input, '1', '2', '3');
console.log(count);
console.log(result.map(element => element.join(' ')).join('\n'));
