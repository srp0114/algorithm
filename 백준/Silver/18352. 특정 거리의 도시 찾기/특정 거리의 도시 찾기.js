const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, K, X] = input.shift().split(" ").map(Number);
const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array(N + 1).fill(false);
const answer = [];

for (let i = 0; i < M; i++) {
  const [src, dest] = input[i].split(" ").map(Number);
  graph[src].push(dest);
}

const bfs = (start) => {
  const queue = [[start, 0]];
  visited[start] = true;

  while (queue.length) {
    const [src, dist] = queue.shift();

    if (dist === K) {
      answer.push(src);
    }

    if (dist < K) {
      for (const dest of graph[src]) {
        if (!visited[dest]) {
          queue.push([dest, dist + 1]);
          visited[dest] = true;
        }
      }
    }
  }
};

bfs(X);

console.log(answer.length === 0 ? -1 : answer.sort((a, b) => a - b).join("\n"));
