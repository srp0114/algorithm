// 일곱 난쟁이 - 2309
const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);

const short = filepath
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

const totalHeight = short.reduce((sum, height) => (sum += height), 0);
let dwarf; // undefined

for (let i = 0; i < 8; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (totalHeight === 100 + short[i] + short[j]) {
      dwarf = short.filter((v) => v !== short[i] && v !== short[j]);
      break;
    }
  }
  if (dwarf) break; // undefined 아닌 경우
}

console.log(dwarf.sort((a, b) => a - b).join("\n"));
