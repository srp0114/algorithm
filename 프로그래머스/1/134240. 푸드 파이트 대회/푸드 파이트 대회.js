function solution(food) {
    let result = [];
    
    for(let i = 1; i < food.length; i++) {
        if(food[i] % 2 !== 0 ) {
            food[i] = food[i] - 1;
        }
        
        for(let j = 0; j < food[i] / 2; j++) {
            result.push(i);
        }
    }
        
    return result.join("") + "0" + result.reverse().join("")
}