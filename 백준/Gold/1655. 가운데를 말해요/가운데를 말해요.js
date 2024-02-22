const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const count = input.shift();

class MaxHeap {
  constructor() {
    this.heap = [null]; // null 요소 가지고 있기때문에 배열의 길이는 1
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2); // 0인 경우 root

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      // value 값 계속 비교를 위해 currnet, parentIndex 값 업데이트
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // right > left
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // left > right
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }
}

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
    return this.heap.length;
  }

  pop() {
    if (this.heap.length <= 1) {
      return 0;
    } else if (this.heap.length === 2) {
      return this.heap.pop();
    } else {
      const returnValue = this.heap[1];
      this.heap[1] = this.heap.pop();

      let currentIndex = 1;

      while (true) {
        let leftIndex = 2 * currentIndex;
        let rightIndex = 2 * currentIndex + 1;
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
  }

  swap(before, after) {
    const temp = this.heap[before];
    this.heap[before] = this.heap[after];
    this.heap[after] = temp;
  }
}

const maxHeap = new MaxHeap();
const minHeap = new MinHeap();
let answer = [];

input.forEach((value) => {
  if (maxHeap.heap.length === 1 || maxHeap.heap[1] >= value) {
    maxHeap.push(value);
  } else {
    minHeap.push(value);
  }

  // maxHeap에 중간값 존재하기에 비교할때 minHeap + 1
  if (maxHeap.heap.length > minHeap.heap.length + 1) {
    minHeap.push(maxHeap.pop());
  } else if (minHeap.heap.length > maxHeap.heap.length) {
    maxHeap.push(minHeap.pop());
  }

  answer.push(maxHeap.heap[1]);
});

console.log(answer.join(" "));
