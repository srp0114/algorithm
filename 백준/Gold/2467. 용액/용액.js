const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const solution = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let left = 0;
let right = solution.length - 1;
let diff = Infinity;
let answer = [0, 0];

while (left < right) {
  const leftSol = solution[left];
  const rightSol = solution[right];
  if (Math.abs(leftSol + rightSol) < diff) {
    diff = Math.abs(leftSol + rightSol);
    answer = [leftSol, rightSol];
  }

  if (leftSol + rightSol < 0) {
    left++;
  } else if (leftSol + rightSol > 0) {
    right--;
  } else break;
}

console.log(answer.join(" "));
