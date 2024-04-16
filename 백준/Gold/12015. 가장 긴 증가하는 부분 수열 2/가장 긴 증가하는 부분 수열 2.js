const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(v => v.split(' ').map(Number))
const [N] = input[0];
const arr = input[1];


function binarySearch(left, right, target) {
  let mid;
  while (left < right) {
    mid = Math.floor((left + right) / 2);

    if (lis[mid] < target) {
      left = mid + 1;
    } else {
      right = mid
    }
  }
  return right;
}

let lis = [];

let j = 0;
lis[0] = arr[0];
let i = 1;

while (i < N) {

  if (lis[j] < arr[i]) {
    lis[++j] = arr[i];
  } else {
    let idx = binarySearch(0, j, arr[i]);
    lis[idx] = arr[i]
  }
  i++;
}
console.log(lis.length)