function solution(participant, completion) {
    const map = new Map();
    
    for(const name of participant) {
        map.has(name) ? map.set(name, map.get(name) + 1) : map.set(name, 1)
    }
    
    for(const goal of completion) {
        if(map.has(goal)) {
            map.set(goal, map.get(goal) - 1);
            if(map.get(goal) <= 0) {
                map.delete(goal);
            }
        }
    }
    
    return map.keys().next().value;
}
