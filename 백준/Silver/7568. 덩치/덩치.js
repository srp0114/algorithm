const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const input = filepath.toString().trim().split("\n");
const N = +input.shift();
const list = input.map((v) => v.split(" ").map(Number));
const answer = [];

for (let i = 0; i < N; i++) {
  let count = 1;
  for (let j = 0; j < N; j++) {
    if (i !== j) {
      const [x, y] = list[i];
      const [p, q] = list[j];

      if (x < p && y < q) {
        count += 1;
      }
    }
  }
  answer.push(count);
}

console.log(answer.join(" "));
