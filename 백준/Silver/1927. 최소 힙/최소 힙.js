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
    if (this.heap.length <= 1) {
      return 0;
    }
    const returnValue = this.heap[1];
    if (this.heap.length === 2) {
      return this.heap.pop();
    }
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;

    while (true) {
      let leftIndex = 2 * currentIndex;
      let rightIndex = 2 * currentIndex + 1;
      let smallest = currentIndex;

      if (
        leftIndex < this.heap.length &&
        this.heap[leftIndex] < this.heap[smallest]
      ) {
        smallest = leftIndex;
      }

      if (
        rightIndex < this.heap.length &&
        this.heap[rightIndex] < this.heap[smallest]
      ) {
        smallest = rightIndex;
      }

      if (smallest !== currentIndex) {
        [this.heap[currentIndex], this.heap[smallest]] = [
          this.heap[smallest],
          this.heap[currentIndex],
        ];
        currentIndex = smallest;
      } else {
        break;
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
