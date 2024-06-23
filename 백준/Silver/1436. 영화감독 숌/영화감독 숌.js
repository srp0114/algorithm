// 1436 - 영화감독 솝
const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const input = +filepath.toString().trim().split("\n");

const arr = Array.from({ length: input });
arr[0] = 666;

for (let i = 1; i < input; i++) {
  let nextMovie = arr[i - 1] + 1;

  while (arr[i] === undefined) {
    let checkNum = nextMovie.toString().includes("666");
    if (checkNum) {
      arr[i] = nextMovie;
    } else {
      nextMovie += 1;
    }
  }
}

console.log(arr[input - 1]);
