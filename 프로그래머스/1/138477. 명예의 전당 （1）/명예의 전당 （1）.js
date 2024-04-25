function solution(k, score) {
    let answer = [];
    let top = [];
    
    for(let i = 0; i < score.length; i++) {
        if(i + 1 > k) {
            let min = Math.min(...top); 
            if(min < score[i]) {
                top.push(score[i]);        
                top.sort((a, b) => b - a);
                top.pop();
            }
        }  else {
            top.push(score[i]);
            top.sort((a, b) => b - a);
        }    
        answer.push(top[top.length -1]);
    }
    return answer;
}