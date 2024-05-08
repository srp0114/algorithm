const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const card = input[1].split(" ").map(Number);
let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    for (let k = j + 1; k < N; k++) {
      const sum = card[i] + card[j] + card[k];

      if (sum > max && sum <= M) {
        max = sum;
      }
    }
  }
}

console.log(max);
