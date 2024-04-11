const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const num = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let answer = 0;

for (let i = 0; i < N; i++) {
  let left = 0;
  let right = N - 1;
  const n = num[i];

  while (left < right) {
    if (left === i) left++;
    else if (right === i) right--;
    else {
      const sum = num[left] + num[right];

      if (sum === n) {
        answer++;
        break;
      }

      if (sum < n) {
        left++;
      } else if (sum > n) {
        right--;
      } else break;
    }
  }
}

console.log(answer);
