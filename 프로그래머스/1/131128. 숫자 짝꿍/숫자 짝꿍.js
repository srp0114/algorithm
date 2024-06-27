function solution(X, Y) {
    const map = new Map();
    const arr = [];
    
    for(let i = 0; i < Y.length ; i++) {
        if(map.has(Y[i])) {
            const n = map.get(Y[i]);
            map.set(Y[i], n+1);
        } else {
            map.set(Y[i], 1);
        }
    }
        
    for(let j = 0; j < X.length; j++) {
        if(map.has(X[j])) {
            const cnt = map.get(X[j]);
            if(cnt === 1) {
                map.delete(X[j]);
            }
            else { 
                map.set(X[j], cnt - 1);
            }
            arr.push(X[j]);
        }
    }
    
    arr.sort((a, b) => b - a);
    
    if(arr[0] === '0') return '0';
    return arr.length === 0 ? '-1' : arr.join("");
}