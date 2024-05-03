function solution(a, b, n) {
    let getCoke = 0;
    
    while(n >= a) {
        const coke = Math.floor(n / a) * b;
        n = n - (Math.floor(coke / b) * a) + coke;
        getCoke += coke;
    }
    
    return getCoke;
}