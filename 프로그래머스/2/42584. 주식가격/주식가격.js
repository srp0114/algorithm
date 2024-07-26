function solution(prices) {
    let result = new Array(prices.length).fill(0);
    
    for(let i = 0; i<prices.length; i++) {    
        for(let j = i+1; j<prices.length; j++) {
            result[i]++;
            if(prices[j] < prices[i]) break;
        }
    }
    
    return result;
}