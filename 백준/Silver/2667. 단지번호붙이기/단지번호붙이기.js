const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const graph = input.map((v) => v.split("").map(Number));
const dx = [0, 1, 0, -1];
const dy = [1, 0, -1, 0];
let building = [];

const bfs = (x, y) => {
  let count = 0;
  const queue = [[x, y]];
  graph[x][y] = 0;

  while (queue.length) {
    const [cx, cy] = queue.shift();
    count++;
    for (let i = 0; i < 4; i++) {
      let nx = cx + dx[i];
      let ny = cy + dy[i];

      if (nx < N && ny < N && nx >= 0 && ny >= 0 && graph[nx][ny] === 1) {
        graph[nx][ny] = 0;
        queue.push([nx, ny]);
      }
    }
  }
  return count;
};

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) {
      building.push(bfs(i, j));
    }
  }
}

console.log(building.length + "\n" + building.sort((a, b) => a - b).join("\n"));
