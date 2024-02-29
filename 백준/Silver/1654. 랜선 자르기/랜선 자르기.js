function cutLAN(array, findValue) {
  let left = 0;
  let right = Math.max(...array);
  let mid = Math.floor((left + right) / 2);

  while (left <= right) {
    let divideLAN = array.reduce((acc, cur) => {
      let cut = Math.floor(cur / mid);
      return (acc += cut);
    }, 0);

    if (divideLAN < findValue) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
    mid = Math.floor((left + right) / 2);
  }
  return mid;
}

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");
  
const [K, N] = input.shift().split(" ").map(Number);
const LAN = input.map((v) => Number(v)).sort((a, b) => a - b);

console.log(cutLAN(LAN, N));