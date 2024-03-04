const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = input.shift().split(" ").map(Number);
const map = input.map((line) => line.split("").map(Number));
const check = Array.from({ length: N }, () => Array(M).fill(Infinity));
const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];
const queue = [[0, 0]];
check[0][0] = 0;

while (queue.length) {
  const [x, y] = queue.shift();

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < M && ny >= 0 && ny < N) {
      const time = check[y][x] + map[ny][nx];
      if (time < check[ny][nx]) {
        check[ny][nx] = time;
        queue.push([nx, ny]);
      }
    }
  }
}

console.log(check[N - 1][M - 1]);
