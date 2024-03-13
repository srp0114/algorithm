function solution(keymap, targets) {
    var answer = [];    
    const map = new Map();
    
    keymap.forEach((value, index) => {
        let character = value.split("");
        
        character.forEach((ch, idx) => {
            let check = map.get(ch)
            if(!map.has(ch) || map.get(ch) > idx + 1) {
                map.set(ch, idx + 1);
            }
        })
    })
    
     targets.forEach(target => {
        let sum = 0;
        let ch = target.split("");
         
         ch.map((val) => {
            if (!map.has(val)) {
                sum = -1; 
                console.log(sum)
            }
            sum += map.get(val);  
         })
         
        answer.push(sum);
    });
    
    return answer;
}