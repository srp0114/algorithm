class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor((currentIndex - 1) / 2);

    while (this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor((currentIndex - 1) / 2);
    }
  }
  pop() {
    const lastIdx = this.heap.length - 1;
    let idx = 0;
    this.swap(0, lastIdx); // 0번이 루트노드
    let value = this.heap.pop();

    while (idx < lastIdx) {
      let leftChildIdx = idx * 2 + 1;
      let rightChildIdx = idx * 2 + 2;

      // 왼쪽자식 인덱스가 더 크다는 뜻은 자식노드가 없다는 뜻
      if (leftChildIdx >= lastIdx) {
        break;
      } else if (rightChildIdx >= lastIdx) {
        // 왼쪽 자식만 있는경우 자식과 비교해서 크면 스왑
        if (this.heap[idx] < this.heap[leftChildIdx]) {
          this.swap(idx, leftChildIdx);
          idx = leftChildIdx;
        } else {
          break;
        }
      } else {
        // 둘다 있는경우 중 두 자식이 루트보다 다 큰경우
        if (
          this.heap[leftChildIdx] > this.heap[idx] &&
          this.heap[rightChildIdx] > this.heap[idx]
        ) {
          // 큰값이랑 스왑
          if (this.heap[leftChildIdx] > this.heap[rightChildIdx]) {
            this.swap(idx, leftChildIdx);
            idx = leftChildIdx;
          } else {
            this.swap(idx, rightChildIdx);
            idx = rightChildIdx;
          }
        } else if (this.heap[leftChildIdx] > this.heap[idx]) {
          // 왼쪽 자식만 루트보다 클 경우
          this.swap(leftChildIdx, idx);
          idx = leftChildIdx;
        } else if (this.heap[rightChildIdx] > this.heap[idx]) {
          // 오른쪽 자식
          this.swap(rightChildIdx, idx);
          idx = rightChildIdx;
        } else {
          // 둘다 작을경우 안바꿈
          break;
        }
      }
    }
    return value;
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

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const maxHeap = new MaxHeap();
const [N, K] = input.shift();
let jewels = input.splice(0, N).sort((a, b) => a[0] - b[0]);
let bags = input.map((v) => v[0]).sort((a, b) => a - b);
let result = 0;
let jewelIndex = 0;

for (let i = 0; i < K; i++) {
  while (jewelIndex < N && jewels[jewelIndex][0] <= bags[i]) {
    maxHeap.push(jewels[jewelIndex][1]);
    jewelIndex++;
  }
  if (maxHeap.size()) {
    result += maxHeap.pop();
  }
}

console.log(result);
