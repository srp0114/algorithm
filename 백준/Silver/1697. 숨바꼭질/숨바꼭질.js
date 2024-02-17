const input = require("fs")
  .readFileSync(
    process.platform === "linux" ? "/dev/stdin" : "./input.txt"
  )
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);

// 정점 방문 여부 확인을 위한 배열
const visited = Array.from({ length: 100001 }, () => 0);
let answer = 0;

const bfs = () => {
  const queue = [N];
  visited[queue] = 1;
  let dist = 0;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let root = queue.shift();
      if (root === K) return dist;

      for (let move of [root - 1, root + 1, root * 2]) {
        if (move >= 0 && move <= 100000 && visited[move] === 0) {
          visited[move] = 1;
          queue.push(move);
        }
      }
    }
    dist++;
  }
};

answer = bfs();
console.log(answer);
