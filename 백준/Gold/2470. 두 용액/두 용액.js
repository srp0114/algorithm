const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const num = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = num.length - 1;
let min = Infinity;
let answer = [0, 0];

while (left < right) {
  let leftSol = num[left];
  let rightSol = num[right];

  if (Math.abs(leftSol + rightSol) < min) {
    min = Math.abs(leftSol + rightSol);
    answer = [leftSol, rightSol];
  }

  if (leftSol + rightSol < 0) {
    left++;
  } else if (leftSol + rightSol > 0) {
    right--;
  } else {
    break;
  }
}

console.log(answer.sort((a, b) => a - b).join(" "));
