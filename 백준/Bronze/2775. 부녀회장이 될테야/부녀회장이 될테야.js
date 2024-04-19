const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const T = +input.shift();
let answer = [];

for (let i = 0; i < T; i++) {
  const n = +input.shift();
  const k = +input.shift();

  let dp = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

  for (let i = 0; i <= 14; i++) {
    dp[0][i] = i;
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }
  answer.push(dp[n][k]);
}

console.log(answer.join("\n"));
