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
    
     targets.forEach((value) => {
        let sum = 0;
        for (let ch of value) {
            if (!map.has(ch)) {
                sum = -1; 
                break;
            }
            sum += map.get(ch);
        }
        answer.push(sum);
    });
    return answer;
}