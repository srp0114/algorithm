function solution(answers) {
    const math1 = [1, 2, 3, 4, 5]; 
    const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
    const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let high = [];

    const score = answers.reduce((acc, val, idx) => {
        if(math1[idx%math1.length] === val) acc[0] += 1;
        if(math2[idx%math2.length] === val) acc[1] += 1;
        if(math3[idx%math3.length] === val) acc[2] += 1; 
        
        return acc;
    }, [0,0,0])

    let max = Math.max(...score);

    for(let i = 0; i < 3; i++){
        if(score[i] >= max) high.push(i+1);
    }

    return high;
}