const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((v) => v.split("").map(Number));
const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const queue = [];
queue.push([0, 0, 1]);
graph[0][0] = 0;

while (queue.length) {
  let [x, y, count] = queue.shift();

  if (x === N - 1 && y === M - 1) {
    console.log(count);
    break;
  }

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 1) {
      graph[nx][ny] = 0;
      queue.push([nx, ny, count + 1]);
    }
  }
}
