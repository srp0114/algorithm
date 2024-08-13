function solution(numbers) {
  const num = {};
  let result = "";

  numbers.map((v) => {
    const firstDigit = v.toString()[0];
    num[firstDigit] = num[firstDigit] || [];
    num[firstDigit].push(v);
  });

  for (let i = 9; i >= 0; i--) {
    if (num[i] !== undefined) {
      if (num[i].length > 1) {
        num[i].sort((a, b) => {
          const strA = a.toString();
          const strB = b.toString();
          return (strB + strA) - (strA + strB);
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

