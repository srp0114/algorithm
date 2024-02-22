const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const count = input.shift();
const answer = [];

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
      // heap에 null만 있는 경우
      return 0;
    } else if (this.heap.length === 2) {
      // null + root만 존재하는 경우
      // 마지막 값 리턴
      return this.heap.pop();
    } else {
      // heap의 길이가 2 이상인 경우
      const returnValue = this.heap[1];
      this.heap[1] = this.heap.pop();

      let currentIndex = 1; // null로 heap 생성했기때문에 1부터 시작.

      while (true) {
        let leftIndex = 2 * currentIndex;
        let rightIndex = 2 * currentIndex + 1;
        let smallest = currentIndex;
        if (
          leftIndex < this.heap.length &&
          this.heap[smallest] > this.heap[leftIndex]
        ) {
          // length 범위에 leftIndex가 들어가고, 값이 root보다 큰 경우
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

  // 바꾸기 위한 함수
  swap(before, after) {
    const temp = this.heap[before];
    this.heap[before] = this.heap[after];
    this.heap[after] = temp;
  }
}

const minHeap = new MinHeap();

for (const value of input) {
  if (value === 0) {
    answer.push(minHeap.pop());
  } else {
    minHeap.push(value);
  }
}

console.log(answer.join("\n"));
