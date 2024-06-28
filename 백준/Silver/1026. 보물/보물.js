// 보물 - 1026
const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const input = filepath.toString().trim().split("\n");

const N = +input[0];
const arr1 = input[1]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);
const arr2 = input[2]
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => b - a);

let sum = 0;

for (let i = 0; i < N; i++) {
  sum += arr1[i] * arr2[i];
}

console.log(sum);
