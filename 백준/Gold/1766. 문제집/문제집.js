class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];

    if (this.heap.length <= 1) {
      return 0;
    } else if (this.heap.length === 2) {
      return this.heap.pop();
    } else {
      this.heap[1] = this.heap.pop();

      let currentIndex = 1;
      let leftIndex = 2;
      let rightIndex = 3;

      while (
        (leftIndex < this.heap.length &&
          this.heap[currentIndex] > this.heap[leftIndex]) ||
        (rightIndex < this.heap.length &&
          this.heap[currentIndex] > this.heap[rightIndex])
      ) {
        if (this.heap[rightIndex] < this.heap[leftIndex]) {
          const temp = this.heap[currentIndex];
          this.heap[currentIndex] = this.heap[rightIndex];
          this.heap[rightIndex] = temp;
          currentIndex = rightIndex;
        } else {
          const temp = this.heap[currentIndex];
          this.heap[currentIndex] = this.heap[leftIndex];
          this.heap[leftIndex] = temp;
          currentIndex = leftIndex;
        }
        leftIndex = 2 * currentIndex;
        rightIndex = 2 * currentIndex + 1;
      }
    }
    return returnValue;
  }
}

const heap = new MinHeap();

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const count = input.shift();
const [total, condition] = count.split(" ").map(Number);
const graph = Array.from({ length: Number(total) + 1 }, () => []);
const indegree = Array.from({ length: Number(total) + 1 }).fill(0);
const result = [];

input.forEach((value) => {
  const [A, B] = value.split(" ").map(Number);
  graph[A].push(B);
  indegree[B]++;
});

const minHeap = new MinHeap();

for (let i = 1; i <= total; i++) {
  if (indegree[i] === 0) {
    minHeap.push(i);
  }
}

while (minHeap.heap.length > 1) {
  const now = minHeap.pop();
  result.push(now);

  graph[now].forEach((next) => {
    indegree[next]--;
    if (indegree[next] === 0) {
      minHeap.push(next);
    }
  });
}

console.log(result.join(" "));