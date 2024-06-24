function solution(n, lost, reserve) {
    let realLost = lost.filter((l) => !reserve.includes(l)).sort((a, b) => a - b);
    let realReserve = reserve.filter((r) => !lost.includes(r));
    let count = n - realLost.length;
        
    realLost.map((v) => {
        if(realReserve.includes(v-1)) {
            realReserve.splice(realReserve.indexOf(v-1), 1);
            count++;
        } else if(realReserve.includes(v+1)) {
            realReserve.splice(realReserve.indexOf(v+1), 1);
            count++;
        }   
    })
    return count;    
}