class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);
    while (parentIndex >= 0 && this.heap[parentIndex][1] > value[1]) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
    } else if (this.heap.length === 0) {
      return 0;
    }

    const returnValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    let currentIndex = 0;
    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      let smallest = currentIndex;

      if (
        leftIndex < this.heap.length &&
        this.heap[smallest][1] > this.heap[leftIndex][1]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
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

const [V, E] = input[0].split(" ").map(Number);
const K = Number(input[1]);
const graph = Array.from({ length: V + 1 }, () => []);
let distance = Array.from({ length: V + 1 }).fill(Infinity);

for (let i = 0; i < E; i++) {
  const [from, to, dist] = input[i + 2].split(" ").map(Number);
  graph[from].push([to, dist]);
}

const minHeap = new MinHeap();
minHeap.push([K, 0]);
distance[K] = 0;

while (minHeap.size()) {
  const [curNode, dist] = minHeap.pop();

  if (distance[curNode] < dist) {
    continue;
  }

  for (const v of graph[curNode]) {
    const node = v[0];
    const cost = dist + v[1];

    if (cost < distance[node] || distance[node] === Infinity) {
      minHeap.push([node, cost]);
      distance[node] = cost;
    }
  }
}

const result = distance.slice(1).map((v) => (v === Infinity ? "INF" : v));
console.log(result.join("\n"));
