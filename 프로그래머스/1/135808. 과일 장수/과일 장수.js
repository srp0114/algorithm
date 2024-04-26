function solution(k, m, score) {
    score.sort((a, b) => b - a);

    let box = [];
    let result = 0;
    
    for(let i = 0; i < score.length; i += m) {
        const apple = score.slice(i, m + i);
        if(apple.length === m) {
            box.push(apple);
        }
    }
        
    for(const a of box) {
        const min = Math.min(...a);
        result += (min * a.length);
    }
    
    return result;
}