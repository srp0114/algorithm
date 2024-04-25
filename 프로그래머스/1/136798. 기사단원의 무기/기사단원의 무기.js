function solution(number, limit, power) {
    let result = 0;
    
    for(let i = 1; i <= number; i++) {
        let count = 0;
        
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if (i%j === 0) {
                i / j === j ? count += 1 : count += 2;
            }
        }
        
        count > limit ? result += power : result += count;
    }
    
    return result;
}