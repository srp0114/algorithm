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

const [N, E] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 0; i < E; i++) {
  const [u, v, e] = input[i + 1].split(" ").map(Number);
  graph[u].push([v, e]);
  graph[v].push([u, e]);
}

const [v1, v2] = input[E + 1].split(" ").map(Number);

function dijkstra(start) {
  const distance = Array.from({ length: N + 1 }).fill(Infinity);
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
      }
    }
  }
  return distance;
}

const startDist = dijkstra(1);
const v1Dist = dijkstra(v1);
const v2Dist = dijkstra(v2);

let way1 = startDist[v1] + v1Dist[v2] + v2Dist[N];
let way2 = startDist[v2] + v2Dist[v1] + v1Dist[N];

const answer = Math.min(way1, way2);

console.log(answer === Infinity ? -1 : answer);
