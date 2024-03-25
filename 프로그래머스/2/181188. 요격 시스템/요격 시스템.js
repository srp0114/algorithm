function solution(targets) {
    const sortedTargets = targets.sort((a, b) => b[0] - a[0]);

    let checkPoint = sortedTargets[0][0];
    
    let answer = 1;
    
    for(const target of sortedTargets) {
        let [start, end] = target;
        if(end <= checkPoint) {
            checkPoint = start;
            answer++;
        }
    }
    return answer;
}