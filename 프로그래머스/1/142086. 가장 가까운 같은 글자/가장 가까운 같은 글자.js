function solution(s) {
    const map = new Map();
    const string = s.split("")
    let stack = [];
    let answer = [];
    for(let i = 0; i<string.length; i++) {
        let index = stack.lastIndexOf(string[i]);
        if(index === -1) {
            answer.push(-1);
        } else {
            answer.push(i - stack.lastIndexOf(string[i]));
        }
        stack.push(string[i]);
    }
    return answer;
}
