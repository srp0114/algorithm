const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N, arr] = input;

const dp = Array(...N).fill(1);

for (let i = 1; i < N; i++) {
  const prevArr = arr.slice(0, i);
  const temp = [];

  for (let j = 0; j <= i; j++) {
    if (prevArr[j] < arr[i]) {
      temp.push(dp[j]);
    }
  }

  if (temp.length !== 0) {
    dp[i] += Math.max(...temp);
  }
}

console.log(Math.max(...dp));
