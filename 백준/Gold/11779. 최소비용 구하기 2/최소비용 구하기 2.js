class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (parentIndex >= 0 && this.heap[parentIndex] > value) {
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
        this.heap[smallest] > this.heap[leftIndex]
      ) {
        smallest = leftIndex;
      }
      if (
        rightIndex < this.heap.length &&
        this.heap[smallest] > this.heap[rightIndex]
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

const N = +input[0];
const M = +input[1];
const graph = Array.from({ length: N + 1 }, () => []);
let distance = Array.from({ length: N + 1 }).fill(Infinity);
const previousNode = Array.from({ length: N + 1 }, () => null);

for (let i = 2; i < M + 2; i++) {
  const [u, v, w] = input[i].split(" ").map(Number);
  graph[u].push([v, w]);
}

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

    if (cost < distance[node]) {
      minHeap.push([node, cost]);
      distance[node] = cost;
      previousNode[node] = curNode;
    }
  }
}

const path = [];
let currentNode = end;

while (currentNode !== start) {
  path.push(currentNode);
  currentNode = previousNode[currentNode];
}

path.push(start);

console.log(distance[end]);
console.log(path.length);
console.log(path.reverse().join(" "));
