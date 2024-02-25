const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

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
    const temp = this.heap[before];
    this.heap[before] = this.heap[after];
    this.heap[after] = temp;
  }

  size() {
    return this.heap.length;
  }
}

let input = [];

let N = 0;
let count = -1;
const minHeap = new MinHeap();

rl.on("line", function (line) {
  if (count === -1) {
    count = parseInt(line);
    N = count;
    return;
  }

  line.split(" ").map((v) => {
    minHeap.push(parseInt(v));
    if (minHeap.size() > N) {
      minHeap.pop();
    }
  });
}).on("close", function () {
  console.log(minHeap.pop());
  process.exit();
});
