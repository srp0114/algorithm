function solution(k, tangerine) {
    const map = new Map();
    let kindCount = 0;
    const kindSort = [];
    
    tangerine.map(v => map.set(v, map.get(v) + 1 || 1));
   
    for (let k of map.values()) {
      kindSort.push(k);
    }
    
    kindSort.sort((a, b) => b - a);
    
    kindSort.map((v) => {
        if(k <= 0) return;
        kindCount++;
        k -= v;
    })
    
    return kindCount;
}
