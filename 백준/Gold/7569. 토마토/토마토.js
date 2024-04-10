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

const [N, M, H] = input.shift().split(" ").map(Number);

const graph = Array.from(Array(H), () =>
  Array.from(Array(N), () => Array.from(Array(M).fill(0)))
);

for (let i = 0; i < H; i++) {
  for (let j = 0; j < M; j++) {
    graph[i][j] = input.shift().split(" ").map(Number);
  }
}

const queue = new Queue();

const dx = [-1, 1, 0, 0, 0, 0];
const dy = [0, 0, -1, 1, 0, 0];
const dz = [0, 0, 0, 0, -1, 1];

let tomato = 0;
let maxDay = 0;

for (let z = 0; z < H; z++) {
  for (let y = 0; y < M; y++) {
    for (let x = 0; x < N; x++) {
      if (graph[z][y][x] === 1) {
        queue.enqueue([z, y, x, 0]);
      }
      if (graph[z][y][x] === 0) {
        tomato++;
      }
    }
  }
}

while (!queue.isEmpty()) {
  const [z, y, x, day] = queue.dequeue();
  maxDay = Math.max(maxDay, day);

  for (let i = 0; i < 6; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    let nz = z + dz[i];

    if (
      nx < N &&
      ny < M &&
      nz < H &&
      nx >= 0 &&
      ny >= 0 &&
      nz >= 0 &&
      graph[nz][ny][nx] === 0
    ) {
      queue.enqueue([nz, ny, nx, day + 1]);
      graph[nz][ny][nx] = 1;
      tomato--;
    }
  }
}

console.log(tomato ? -1 : maxDay);
