function binarySearch(trees, height) {
  let left = 0;
  let right = Math.max(...trees);
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let cutTrees = trees.reduce((acc, tree) => {
      return acc + (tree > mid ? tree - mid : 0);
    }, 0);

    if (cutTrees < height) {
      right = mid - 1;
    } else {
      result = mid;
      left = mid + 1;
    }
  }

  return result;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
const Trees = input
  .shift()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(binarySearch(Trees, M));
