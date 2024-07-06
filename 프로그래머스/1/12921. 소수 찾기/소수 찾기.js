function solution(n) {
  let answer = [];
  
  function isPrime (n) {
    for(let num of answer) {
      if(num > Math.sqrt(n)) return true
      if(Number.isInteger(n/num)) return false
    }
    return true
  }
  
  for(let i = 2; i <= n; i++) {
      if(!i%2) continue
      if(isPrime(i)) answer.push(i)
  }
  
  return answer.length;
}