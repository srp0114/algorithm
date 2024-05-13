const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const input = filepath.toString().trim().split("\n");
const [N, M] = input.shift().split(" ").map(Number);
const board = input.map((v) => v.split(""));
const answer = [];

const white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const checkW = (x, y) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[x + i][y + j] !== white[i][j]) {
        count++;
      }
    }
  }
  return count;
};

const checkB = (x, y) => {
  let count = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      if (board[x + i][y + j] !== black[i][j]) {
        count++;
      }
    }
  }
  return count;
};

for (let x = 0; x < N - 7; x++) {
  for (let y = 0; y < M - 7; y++) {
    answer.push(checkW(x, y));
    answer.push(checkB(x, y));
  }
}

console.log(Math.min(...answer));
