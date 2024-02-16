const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number); // 6, 5
const connected = input.map((v) => v.split(" ").map(Number));

const graph = Array.from(Array(N + 1), () => []);
const visited = Array.from(Array(N + 1), () => false);
let count = 0;

// 그래프에 u,v 추가
for (const [src, dest] of connected) {
  graph[src].push(dest);
  graph[dest].push(src);
}

const bfs = (v) => {
  const queue = [v];
  while (queue.length > 0) {
    const src = queue.shift();

    for (const dest of graph[src]) {
      if (visited[dest] === false) {
        queue.push(dest);
        visited[dest] = true;
      }
    }
  }
};

for (let i = 1; i <= N; i++) {
  if (!visited[i]) {
    bfs(i);
    count++;
  }
}

console.log(count);