// 잃어버린 괄호 - 1541
const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const str = filepath.toString().split("-");

const sum = str.map((v) => {
  return v
    .split("+")
    .map(Number)
    .reduce((acc, val) => acc + val, 0);
});

console.log(sum.reduce((acc, val) => acc - val));
