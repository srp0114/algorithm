const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);

let N = +filepath.toString().trim().split("\n");
let board = new Array(N).fill(0);
let count = 0;

const canNotMove = (row) => {
  for (let i = 0; i < row; i++) {
    if (
      board[row] === board[i] ||
      Math.abs(row - i) === Math.abs(board[row] - board[i])
    )
      return false;
  }
  return true;
};

const dfs = (row) => {
  if (row === N) {
    count += 1;
    return;
  }

  for (let i = 0; i < N; i++) {
    board[row] = i;
    if (canNotMove(row)) {
      dfs(row + 1);
    }
  }
};

dfs(0);

console.log(count);
