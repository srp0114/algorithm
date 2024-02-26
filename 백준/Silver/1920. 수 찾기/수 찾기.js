const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const A = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
const M = Number(input.shift());
const B = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

const array = new Set(A);
const result = B.map((v) => (array.has(v) ? 1 : 0));
console.log(result.join("\n"));
