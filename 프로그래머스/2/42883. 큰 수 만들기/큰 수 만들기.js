// 큰 수가 나오면 이전에 나온 값을 다 삭제한다
// 스택 바닥에서부터 큰 수 -> 작은 수로 나열
function solution(number, k) {
    const stack = [];
    let count = 0;
    
    for (const item of number) {
        // push전 이전 값들과 item 비교
        while(stack[stack.length - 1] < item && count < k) {
            stack.pop();
            count += 1;
        } 
        stack.push(item);
    } 
    
    // 987654인 경우
    while(count < k) {
        stack.pop();
        count += 1;
    }   
    
    return stack.join("")
}