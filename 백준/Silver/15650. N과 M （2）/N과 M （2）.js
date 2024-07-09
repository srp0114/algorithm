const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const [N, M] = filepath.toString().trim().split(" ").map(Number);
const visited = Array.from({ length: N + 1 }, () => false);
const seq = Array.from({ length: M + 1 }, () => 0);
let result = "";

const dfs = (start, depth) => {
  if (depth === M) {
    const arr = [];
    for (let i = 0; i < M; i++) {
      arr.push(seq[i]);
    }
    return (result += arr.join(" ") + "\n");
  }

  for (let i = start; i <= N; i++) {
    if (!visited[i]) {
      seq[depth] = i;
      visited[i] = true;
      dfs(i, depth + 1);
      visited[i] = false;
    }
  }
};

dfs(1, 0);
console.log(result);
