const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];

rl.on("line", function (line) {
  input.push(line.trim());
});

rl.on("close", function () {
  const [N, M] = input[0].split(" ").map(Number);
  const seq = Array.from({ length: M + 1 }, () => 0);
  let str = "";

  function dfs(k, index) {
    if (k === M) {
      let arr = [];
      for (let i = 0; i < M; i++) {
        arr.push(seq[i]);
      }
      return (str += arr.join(" ") + "\n");
    }

    for (let i = index; i <= N; i++) {
      seq[k] = i;
      dfs(k + 1, i);
    }
  }

  dfs(0, 1);
  console.log(str);

  process.exit();
});
