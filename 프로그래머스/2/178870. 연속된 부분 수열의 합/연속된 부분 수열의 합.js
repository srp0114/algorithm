function solution(sequence, k) {
    var answer = [];
    let sum = sequence[0];
    let [left, right] = [0, 0];
    let minLength = Infinity;
    
    while (right < sequence.length) {
        if (sum > k) {
            sum -= sequence[left];
            left++;
        } else if (sum < k) {
            right++;
            sum += sequence[right];
        } else {            
            if(right - left < minLength) {
                minLength = right - left;
                answer = [left, right];
            }
            sum -= sequence[left];
            left++;
        }
    }
    
    return answer;
}

