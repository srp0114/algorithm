const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const total = Number(input.shift());
console.log(
  input
    .map((v) => Number(v))
    .sort((a, b) => a - b)
    .join(" ")
);
