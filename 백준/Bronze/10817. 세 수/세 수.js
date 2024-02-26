const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => Number(v))
  .sort((a, b) => a - b);

console.log(input[1]);