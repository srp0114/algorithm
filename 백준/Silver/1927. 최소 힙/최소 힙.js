const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const count = input.shift();
const answer = [];
const map = input.map((v) => Number(v));

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
        if (
          rightIndex < this.heap.length &&
          this.heap[rightIndex] < this.heap[leftIndex]
        ) {
          const temp = this.heap[currentIndex];
          this.heap[currentIndex] = this.heap[rightIndex];
          this.heap[rightIndex] = temp;
          currentIndex = rightIndex;
        } else if (leftIndex < this.heap.length) {
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

for (const value of map) {
  if (value === 0) {
    answer.push(heap.pop());
  } else {
    heap.push(value);
  }
}
console.log(answer.join("\n"));
