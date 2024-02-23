const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const total = input.shift();
const map = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let totalTime = 0;

for (let i = 0; i < total; i++) {
  totalTime += map[i];
  for (let j = 0; j < i; j++) {
    totalTime += map[j];
  }
}

console.log(totalTime);
