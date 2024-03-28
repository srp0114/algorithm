const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const sugar = parseInt(input);
let bag = -1;

if (sugar % 5 === 0) {
  bag = sugar / 5;
} else {
  let numFive = Math.floor(sugar / 5);
  for (let i = numFive; i >= 0; i--) {
    let remain = sugar - i * 5;
    if (remain % 3 === 0) {
      bag = i + remain / 3;
      break;
    }
  }
}

console.log(bag);