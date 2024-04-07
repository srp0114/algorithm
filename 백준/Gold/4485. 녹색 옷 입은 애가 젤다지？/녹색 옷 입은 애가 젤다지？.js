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

let n;
let pnum = 1;
let index = 0;

const dijkstra = (n, graph) => {
  const distance = Array.from({ length: n }, () => Array(n).fill(Infinity));
  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  const minHeap = new MinHeap();
  minHeap.push([0, 0, graph[0][0]]);

  while (minHeap.size() > 0) {
    const [x, y, cost] = minHeap.pop();

    if (distance[x][y] < cost) continue;

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      const nextCost = cost + graph[nx][ny];

      if (nextCost < distance[nx][ny]) {
        distance[nx][ny] = nextCost;
        minHeap.push([nx, ny, nextCost]);
      }
    }
  }

  return distance[n - 1][n - 1];
};

while ((n = +input[index++])) {
  const graph = Array.from({ length: n }, () =>
    input.slice(index++, index).toString().split(" ").map(Number)
  );

  console.log(`Problem ${pnum++}: ${dijkstra(n, graph)}`);
}
