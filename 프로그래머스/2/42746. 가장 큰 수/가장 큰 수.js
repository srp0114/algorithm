function solution(numbers) {
  const num = {};
  let result = "";

  numbers.map((v) => {
    const firstNum = v.toString()[0];
    num[firstNum] = num[firstNum] || [];
    num[firstNum].push(v);
  });

  for (let i = 9; i >= 0; i--) {
    if (num[i] !== undefined) {
      if (num[i].length > 1) {
        num[i].sort((a, b) => {
          let strA = a.toString();
          let strB = b.toString();
          return (strB + strA).localeCompare(strA + strB);
        });
      }
      result += num[i].join("");
    }
  }

  if (result[0] === "0") {
    return "0";
  }

  return result;
}

