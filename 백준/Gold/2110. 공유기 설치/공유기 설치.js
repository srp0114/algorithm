function settingRouter(array, findValue) {
  let left = 1;
  let right = Math.max(...array);
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    let router = 1;
    previousHouse = array[0];
    for (const house of array) {
      if (house >= previousHouse + mid) {
        router++;
        previousHouse = house;
      }
    }

    if (router < findValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }

    mid = Math.floor((left + right) / 2);
  }
  return mid;
}

const [A, ...B] = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = A.split(" ").map(Number);
const house = B.map(Number).sort((a, b) => a - b);
console.log(settingRouter(house, C));
