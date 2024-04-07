class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }
  isEmpty() {
    return this.rear === this.front;
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const graph = input.map((v) => v.split(" ").map(Number));
const queue = new Queue();
const dx = [-1, 0, 1, 0];
const dy = [0, 1, 0, -1];
let maxDay = 0;

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 1) {
      queue.enqueue([i, j, 0]);
    }
  }
}

while (!queue.isEmpty()) {
  const [x, y, day] = queue.dequeue();
  maxDay = Math.max(maxDay, day);

  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];

    if (nx < M && ny < N && nx >= 0 && ny >= 0 && graph[nx][ny] === 0) {
      queue.enqueue([nx, ny, day + 1]);
      graph[nx][ny] = 1;
    }
  }
}

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0) {
      maxDay = -1;
      break;
    }
  }
}

console.log(maxDay);
