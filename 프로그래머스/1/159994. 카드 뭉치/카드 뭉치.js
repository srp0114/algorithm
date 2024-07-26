function solution(cards1, cards2, goal) {
    let one = 0, two = 0;
    
    for(let i = 0; i < goal.length; i++) {
        if(goal[i] === cards1[one]) one++;
        else if(goal[i] === cards2[two]) two++; 
        else return "No";
    } 
    
    return "Yes";
}
