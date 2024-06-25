const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const input = filepath.toString().trim().split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const unit = input.map((v) => Number(v)).sort((a, b) => b - a);

let count = 0;
let total = K;

for (const coin of unit) {
  if (total >= coin) {
    let cnt = Math.floor(total / coin);
    total -= coin * cnt;
    count += cnt;
  }
}

console.log(count);
