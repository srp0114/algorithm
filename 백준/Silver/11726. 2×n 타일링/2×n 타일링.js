const input = parseInt(
  require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .toString()
);

const map = Array.from({ length: input }, () => 0);
map[0] = 0;
map[1] = 1;
map[2] = 2;

for (let i = 3; i <= input; i++) {
  map[i] = (map[i - 1] + map[i - 2]) % 10007;
}

console.log(map[input]);
