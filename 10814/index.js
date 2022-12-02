const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const membersArr = arr.map(members => members.split(' '));
membersArr.forEach((member, idx) => {
  member[0] = parseInt(member[0]);
  member[2] = idx + 1;
});

let result = '';
membersArr
  .sort((a, b) => {
    if (a[0] === b[0]) {
      return a[2] < b[2] ? -1 : 1;
    }
    return a[0] < b[0] ? -1 : 1;
  })
  .forEach(member => {
    result += `${member[0]} ${member[1]}\n`;
  });
console.log(result);
