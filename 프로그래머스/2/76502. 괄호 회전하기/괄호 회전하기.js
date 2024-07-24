function solution(s) {
    const bracket = { '(': ')', '[': ']', '{': '}' };
    let str = [...s];
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        let stack = [];
        let flag = true;
        
        for(let char of str) {
            if(char === "(" || char === "[" || char === "{") stack.push(char);
            else {
                let top = stack.pop();
                if(!top || bracket[top] !== char) flag = false;
            }
        }
        
        if(!stack.length && flag) count += 1;
        str.push(str.shift());
    }
    return count;
}