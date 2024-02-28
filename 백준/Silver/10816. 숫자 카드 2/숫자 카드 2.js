const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const M = Number(input[2]);
const MyCard = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const FindCard = input[3].split(" ").map(Number);
let answer = [];
const map = new Map();

for (const cardNum of MyCard) {
  if (map.has(cardNum)) {
    map.set(cardNum, map.get(cardNum) + 1);
  } else {
    map.set(cardNum, 1);
  }
}

for (const matchNum of FindCard) {
  if (map.has(matchNum)) {
    answer.push(map.get(matchNum));
  } else {
    answer.push(0);
  }
}

console.log(answer.join(" "));
