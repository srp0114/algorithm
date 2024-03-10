function solution(t, p) {
    const pNum = Number(p)
    const pLength = p.length;
    let answer = 0;

    for(let i=0; i <= (t.length - pLength); i++) {
        let cutNum = parseInt(t.substr(i, pLength));
         if(cutNum <= pNum) {
            answer++;
        }
    }
    
    return answer;
}