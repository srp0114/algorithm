const num = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let count = 0;

for (let i = 1; i <= num && i < 100; i++) {
  count++;
}

if (num >= 100) {
  for (let n = 100; n <= num; n++) {
    const num = n.toString().split("").map(Number);
    const d1 = num[1] - num[0];
    const d2 = num[2] - num[1];

    if (d1 === d2) {
      count++;
    }
  }
}

console.log(count);
