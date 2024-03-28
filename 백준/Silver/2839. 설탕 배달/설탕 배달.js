const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

const sugar = Number(input);
let bag = -1;
let five = Math.floor(sugar / 5);

while (five >= 0) {
  const remain = sugar - five * 5;
  if (remain % 3 === 0) {
    bag = remain / 3 + five;
    break;
  } else {
    five -= 1;
  }
}

console.log(bag);