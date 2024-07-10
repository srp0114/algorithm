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
  const seq = Array.from({ length: M }, () => 0);
  let result = "";

  function dfs(depth) {
    if (depth === M) {
      return (result += `${seq.join(" ")}\n`);
    }

    for (let i = 1; i <= N; i++) {
      seq[depth] = i;
      dfs(depth + 1);
    }
  }

  dfs(0);
  console.log(result);

  process.exit();
});
