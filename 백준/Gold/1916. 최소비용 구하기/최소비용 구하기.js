class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.size() - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (parentIndex >= 0 && this.heap[parentIndex][1] > value[1]) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.size() === 1) {
      return this.heap.pop();
    } else if (this.size() === 0) {
      return 0;
    }

    const returnValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;

    while (true) {
      let leftIndex = currentIndex * 2 + 1;
      let rightIndex = currentIndex * 2 + 2;
      let smallest = currentIndex;

      if (
        leftIndex < this.size() &&
        this.heap[smallest][1] > this.heap[leftIndex][1]
      ) {
        smallest = leftIndex;
      }

      if (
        rightIndex < this.size() &&
        this.heap[smallest][1] > this.heap[rightIndex][1]
      ) {
        smallest = rightIndex;
      }

      if (smallest !== currentIndex) {
        this.swap(smallest, currentIndex);
        currentIndex = smallest;
      } else {
        break;
      }
    }
    return returnValue;
  }

  swap(before, after) {
    [this.heap[before], this.heap[after]] = [
      this.heap[after],
      this.heap[before],
    ];
  }

  size() {
    return this.heap.length;
  }
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0]; // 도시 = 정점
const M = +input[1]; // 버스 = 간선

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < M; i++) {
  const [u, v, e] = input[i + 2].split(" ").map(Number);
  graph[u].push([v, e]);
}

let distance = Array.from({ length: N + 1 }).fill(Infinity);
let visited = Array.from({ length: N + 1 }).fill(0);

const [start, end] = input[M + 2].split(" ").map(Number);

const minHeap = new MinHeap();
minHeap.push([start, 0]);
distance[start] = 0;

while (minHeap.size()) {
  const [curNode, dist] = minHeap.pop();

  if (distance[curNode] < dist) continue;

  for (const v of graph[curNode]) {
    const node = v[0];
    const cost = dist + v[1];

    if (cost < distance[node] || distance[node] === Infinity) {
      minHeap.push([node, cost]);
      distance[node] = cost;
    }
  }
}

console.log(distance[end]);