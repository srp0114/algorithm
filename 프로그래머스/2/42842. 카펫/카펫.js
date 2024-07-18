function solution(brown, yellow) {
    const find = Math.floor((brown - 4) / 2);
    
    for(let k = 1; k <= find / 2; k++) {
        if(k * (find - k) === yellow) {
            return [find - k + 2, k + 2]
        }        
    }
}