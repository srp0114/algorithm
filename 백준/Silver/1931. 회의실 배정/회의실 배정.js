// 회의실 배정 - 1931
const fs = require("fs");
const filepath = fs.readFileSync(
  process.platform === "linux" ? "/dev/stdin" : "./input.txt"
);
const input = filepath.toString().trim().split("\n");
const N = +input.shift();
const meeting = [];

for (let i = 0; i < N; i++) {
  let times = input[i].split(" ").map(Number);
  meeting.push(times);
}
meeting.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

let [start, end] = meeting[0];
let count = 1;

for (let i = 1; i < meeting.length; i++) {
  const [nextStart, nextEnd] = meeting[i];

  if (end <= nextStart) {
    count += 1;
    end = nextEnd;
  }
}

console.log(count);
