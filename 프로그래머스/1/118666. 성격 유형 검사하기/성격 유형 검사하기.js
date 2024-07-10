function solution(survey, choices) {
    const map = new Map();
    let yourtype = "";
    const type = ["RT", "CF", "JM", "AN"]
    
    type.forEach(([a, b]) => {
        map.set(a, 0);
        map.set(b, 0);
    })
    
    for(let i = 0; i < survey.length; i++) {
        const [disagree, agree] = survey[i].split("");
        const score = choices[i] - 4;
        
        if(score >= 0) {
            map.set(agree, map.get(agree) + score);
        } else {
            map.set(disagree, map.get(disagree) + Math.abs(score));
        }
    }
    
    type.forEach(([a, b]) => {
        yourtype += map.get(b) > map.get(a) ? b : a 
    })
    
    return yourtype;
}