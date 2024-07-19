function solution(clothes) {
    const map = new Map();
    let count = 1;
    
    clothes.forEach((v) => {
        let [name, type] = [v[0], v[1]];
        map.set(v[1], map.get(v[1]) + 1 || 1);
    })
   
    map.forEach((v) => {
        count *= (v + 1);
    })
    
    return count - 1;
}