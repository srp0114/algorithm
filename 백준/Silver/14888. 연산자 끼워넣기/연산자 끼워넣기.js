const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = +input[0];
const num = input[1].split(" ").map(Number);
const operator = input[2].split(" ").map(Number);

let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;

const calculator = [
  (op1, op2) => op1 + op2,
  (op1, op2) => op1 - op2,
  (op1, op2) => op1 * op2,
  (op1, op2) => ~~(op1 / op2),
];

const dfs = (depth, sum) => {
  if (depth === N) {
    if (sum > max) max = sum;
    if (sum < min) min = sum;
    return;
  }

  for (let i = 0; i < operator.length; i++) {
    if (operator[i] === 0) continue;
    operator[i]--;
    dfs(depth + 1, calculator[i](sum, num[depth]));
    operator[i]++;
  }
};

dfs(1, num[0]);
console.log(`${max}\n${min}`);
