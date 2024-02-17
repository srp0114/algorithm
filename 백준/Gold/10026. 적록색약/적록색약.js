
const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./BFSDFS/input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
let visited = Array.from(Array(N), () => Array(N).fill(0));
let map = input.map((v) => v.split(""));

const ds = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

const bfs = (x, y) => {
  const queue = [[x, y]];
  visited[x][y] = 1;

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let xPos = x + ds[i][0];
        let yPos = y + ds[i][1];
        if (
          xPos >= 0 &&
          yPos >= 0 &&
          xPos < N &&
          yPos < N &&
          !visited[xPos][yPos] &&
          map[x][y] === map[xPos][yPos]
        ) {
          queue.push([xPos, yPos]);
          visited[xPos][yPos] = 1;
        }
      }
    }
  }
};

// 영역 수를 세고 방문 배열을 초기화하는 공통 로직을 함수로 분리
function countAndReset(isColorBlind = false) {
  if (isColorBlind) {
    map = map.map((row) => row.map((color) => (color === "G" ? "R" : color)));
  }

  let count = 0;
  visited = visited.map((v) => v.fill(false)); // 방문 배열 초기화

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        bfs(i, j);
        count++;
      }
    }
  }

  return count;
}

const colorCount = countAndReset();
const colorBlindCount = countAndReset(true);

console.log(colorCount, colorBlindCount);
