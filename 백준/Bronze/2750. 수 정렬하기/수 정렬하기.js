const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const total = Number(input.shift());
const number = input.map((v) => Number(v));
console.log(number.sort((a, b) => a - b).join(" "));