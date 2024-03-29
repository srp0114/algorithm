const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const M = Number(input.shift());

const map = input.map((value) => value.split(" ").map(Number));
const graph = Array.from({ length: N + 1 }, () => []);
let visited = Array.from({ length: N + 1 }, () => false);
let count = 0;

for (const [from, to] of map) {
  graph[from].push(to);
  graph[to].push(from);
}

const queue = [1];
visited[1] = 1;

while (queue.length) {
  const src = queue.shift();
  for (const dest of graph[src]) {
    if (!visited[dest]) {
      queue.push(dest);
      visited[dest] = true;
      count++;
    }
  }
}

console.log(count);
