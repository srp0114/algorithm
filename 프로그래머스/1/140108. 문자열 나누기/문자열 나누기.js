function solution(s) {
    const string = s.split("");
    let x = 0;
    let y = 0;
    let i = 0;
    let answer = [];
    
    while(string.length) {
        if(string[i] === string[0]) {
            x++;
        } else { 
            y++;
        }    
        i++;
        
        if(x === y) {
            answer.push(string.splice(0, i));
            x = 0;
            y = 0;
            i = 0;

        }
    }
    
    return answer.length;
}