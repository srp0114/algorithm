const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const graph = input.map((v) => v.split(" ").map(Number));
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    maxHeight = Math.max(maxHeight, graph[i][j]);
  }
}

const dfs = (x, y, visited, h) => {
  visited[x][y] = true;

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < N &&
      ny >= 0 &&
      ny < N &&
      !visited[nx][ny] &&
      graph[nx][ny] > h
    ) {
      dfs(nx, ny, visited, h);
      visited[nx][ny] = true;
    }
  }
};

let maxSafe = 0;

for (let h = 0; h <= maxHeight; h++) {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let safeArea = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (graph[i][j] > h && !visited[i][j]) {
        visited[i][j] = true;
        dfs(i, j, visited, h);
        safeArea++;
      }
    }
  }
  maxSafe = Math.max(maxSafe, safeArea);
}

console.log(maxSafe);
