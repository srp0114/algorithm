 function solution(progresses, speeds) {
    const day = progresses.map((v, i) => Math.ceil((100 - v) / speeds[i]));
    let max = day[0];
    let count = 0;
    let result = [];
    
    day.forEach((left, idx) => {
        if(left > max) {
            result.push(count)
            max = left;
            count = 1;
        } else count += 1;
        
        if(idx === day.length -1) result.push(count);        
    })
    
    return result;
}
