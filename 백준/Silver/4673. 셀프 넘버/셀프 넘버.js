const allN = Array.from({ length: 10001 }, () => false);
const printN = [];

for (let n = 1; n <= 10000; n++) {
  const splitN = n.toString().split("").map(Number);
  let sumN = 0;

  for (let i = 0; i < splitN.length; i++) {
    sumN += splitN[i];
  }

  sumN += n;
  allN[sumN] = true;
}

for (let i = 1; i < allN.length; i++) {
  if (allN[i] === false) {
    printN.push(i);
  }
}

console.log(printN.join("\n"));
