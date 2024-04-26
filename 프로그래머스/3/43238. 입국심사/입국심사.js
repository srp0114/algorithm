// 제한사항 확인해보면 1,000,000,000 명이므로 선형시간도 안돼 => 무조건 로그시간이기에 이진탐색
// times - 선형 로그 시간
// 결정문제 = 이진탐색 = parametric search
// 시간을 이용해 각 심사관이 심사할 수 있는 인원을 더함
// 즉, 시간을 이분탐색 하는 것

function solution(n, times) {
    times.sort((a, b) => a - b);
    let left = 1;
    let right = times[times.length - 1] * n;
    
    while(left <= right) {
        const mid = Math.floor((left + right) / 2);
    
        const sum = times.reduce((acc, time) => {
            return acc + Math.floor(mid / time);
        }, 0)
        
        if(sum < n) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}