function calculate(array, findValue) {
  let left = 0;
  let right = Math.max(...array);
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    let calcBudget = array.reduce((acc, cur) => {
      if (mid < cur) {
        cur = mid;
      }
      return (acc += cur);
    }, 0);

    if (calcBudget > findValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return mid;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const want = input
  .shift()
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const budget = Number(input.shift());
let answer = 0;
let wantSum = want.reduce((acc, cur) => {
  return (acc += cur);
}, 0);

if (wantSum <= budget) {
  answer = Math.max(...want);
} else {
  answer = calculate(want, budget);
}

console.log(answer);
