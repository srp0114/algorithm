const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = Number(input.shift());
const array = [0, 1, 2, 4];
let result = [];

for (let i = 0; i < N; i++) {
  const num = input[i];

  for (let j = 4; j <= num; j++) {
    array[j] = array[j - 1] + array[j - 2] + array[j - 3];
  }
  result.push(array[num]);
}

console.log(result.join("\n"));
