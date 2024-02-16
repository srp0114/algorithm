// 배추흰지렁이 몇개 둬야할지
// 배추들 간의 연결을 확인해야해
// 심은 양배추 2차원 배열로 표현
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const count = Number(input.shift());
const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function bfs(startX, startY) {
  const queue = [[startX, startY]];
  while (queue.length) {
    const [x, y] = queue.shift();
    if (!field[x][y]) continue;
    else field[x][y] = 0;
    for (let i = 0; i < 4; i++) {
      const xPos = x + ds[i][0];
      const yPos = y + ds[i][1];

      if (xPos < 0 || yPos < 0 || xPos >= M || yPos >= N) continue;
      if (field[xPos][yPos]) {
        queue.push([xPos, yPos]);
      }
    }
  }
}

for (let i = 0; i < count; i++) {
  var [M, N, K] = input.shift().split(" ").map(Number);
  var field = Array.from(Array(M), () => new Array(N).fill(0));

  for (let j = 0; j < K; j++) {
    const [x, y] = input.shift().split(" ").map(Number);
    field[x][y] = 1;
  }
  let worm = 0;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (field[i][j]) {
        bfs(i, j);
        worm++;
      }
    }
  }

  console.log(worm);
}