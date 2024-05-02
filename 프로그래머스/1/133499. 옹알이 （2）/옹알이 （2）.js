function solution(babbling) {
    let speaking = 0;
    const speak = ["aya", "ye", "woo", "ma"];
    
    for(let i = 0; i < babbling.length; i++) {
        let babb = babbling[i];
        
        for(let j = 0; j < speak.length; j++) {
            if(babb.includes(speak[j].repeat(2))) {
                break;
            }
            babb = babb.split(speak[j]).join(" ");
        }
        
        if(babb.split(" ").join("").length === 0) {
            speaking++;
        } 
    }
    return speaking;
}
