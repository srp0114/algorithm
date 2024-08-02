function solution(n, words) {
    const map = new Map();
    let answer = [0, 0];
    
    words.map((v, i) => {
        if(!map.has(v)) map.set(v, i);
    });
        
    for(let i = 1; i < words.length; i++) {
        let num = (i % n) + 1;
        let cnt = Math.floor(i / n) + 1;
        
        if(words[i-1].at(-1) !== words[i].at(0)) {
            answer = [num, cnt];
            break;
        }
        
        if(map.get(words[i]) !== i) {
            answer = [num, cnt];
            break;
        }
    }
    
    return answer;
}