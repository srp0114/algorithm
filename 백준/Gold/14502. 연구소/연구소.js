const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((v) => v.split(" ").map(Number));
const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
let answer = 0;

const bfs = (array) => {
  let queue = [];
  let count = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (array[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && array[nx][ny] === 0) {
        array[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (array[i][j] === 0) {
        count++;
      }
    }
  }
  return count;
};

const dfs = (count) => {
  if (count === 3) {
    let array = graph.map((v) => [...v]);
    let safe = bfs(array);
    answer = Math.max(safe, answer);
    return;
  }
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) {
        graph[i][j] = 1;
        dfs(count + 1);
        graph[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(answer);
