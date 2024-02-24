const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const count = Number(input.shift());

input.sort((a, b) => {
  if (a.length === b.length) {
    return a.localeCompare(b);
  } else {
    return a.length - b.length;
  }
});

console.log(...new Set(input));
