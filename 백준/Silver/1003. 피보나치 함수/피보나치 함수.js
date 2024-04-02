const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const numList = input.map(Number);

const fibonacci = (n) => {
  let zeroCount = [1, 0];
  let oneCount = [0, 1];

  for (let i = 2; i <= n; i++) {
    zeroCount.push(zeroCount[i - 1] + zeroCount[i - 2]);
    oneCount.push(oneCount[i - 1] + oneCount[i - 2]);
  }

  return [zeroCount[n], oneCount[n]];
};

const answer = [];
for (const num of numList) {
  answer.push(fibonacci(num).join(" "));
}

console.log(answer.join("\n"));
