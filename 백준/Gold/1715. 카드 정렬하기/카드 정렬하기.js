const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const total = input.shift();

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (parentIndex >= 0 && this.heap[parentIndex] > value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }

  pop() {
    if (this.heap.length === 1) {
      return this.heap.pop();
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

  // 바꾸기 위한 함수
  swap(before, after) {
    const temp = this.heap[before];
    this.heap[before] = this.heap[after];
    this.heap[after] = temp;
  }
}

const minHeap = new MinHeap();
let answer = 0;

for (const value of input) {
  minHeap.push(value);
}

while (minHeap.heap.length > 1) {
  let first = minHeap.pop();
  let second = minHeap.pop();
  let sum = first + second;
  minHeap.push(sum);
  answer += sum;
}

console.log(answer);
