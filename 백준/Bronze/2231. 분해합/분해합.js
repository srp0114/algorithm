const num = +require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

let min = Infinity;

for (let i = 1; i < num; i++) {
  const n = i.toString().split("").map(Number);

  let sum = n.reduce((acc, val) => {
    return acc + val;
  }, 0);
  sum += i;

  if (sum === num && sum < min) {
    min = i;
  }
}

console.log(min === Infinity ? 0 : min);
