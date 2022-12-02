const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...arr] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const coordsArr = arr.map(coords =>
  coords.split(' ').map(nums => parseInt(nums))
);

let results = '';
coordsArr
  .sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[0] - b[0];
  })
  .forEach(coords => {
    results += `${coords[0]} ${coords[1]}\n`;
  });

console.log(results);
