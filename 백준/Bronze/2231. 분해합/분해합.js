//분해합 - 2231
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const num = +input[0];
const tmp = num - 9 * input[0].length;
let min = Infinity;

for (let i = tmp; i < num; i++) {
  const n = i.toString().split("").map(Number);

  let sum = n.reduce((acc, val) => {
    return acc + val;
  }, i);

  if (sum === num && sum < min) {
    min = i;
  }
}

console.log(min === Infinity ? 0 : min);
