function upperBound(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] <= target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

function lowerBound(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const MyCard = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const FindCard = input[3].split(" ").map(Number);
let answer = [];

for (const card of FindCard) {
  let upper = upperBound(MyCard, card);
  let lower = lowerBound(MyCard, card);
  answer.push(upper - lower);
}

console.log(answer.join(" "));
