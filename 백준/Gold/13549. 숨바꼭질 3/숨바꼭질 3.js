const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map(Number);

const queue = [];
const visited = Array.from({ length: 100001 }).fill(0);

queue.push([N, 0]);
visited[N] = 1;

while (queue.length) {
  const [position, time] = queue.shift();

  if (position === K) {
    console.log(time);
    break;
  }

  for (const move of [position * 2, position - 1, position + 1]) {
    if (visited[move] === 0 && move <= 100000 && move >= 0) {
      if (move === position * 2) {
        queue.unshift([move, time]);
      } else {
        queue.push([move, time + 1]);
      }
      visited[move] = 1;
    }
  }
}
