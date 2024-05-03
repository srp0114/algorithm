function solution(number) {
    let sum = Infinity;
    let three = 0;
    
    for(let i = 0; i<number.length; i++) {
        for(let j = i+1; j < number.length; j++) {
            for(k = j + 1; k <number.length; k++) {
                sum = number[i] + number[j] + number[k];
                if(sum === 0) {
                    three++;
                }
            }
        }
    }
    
    return three;
}