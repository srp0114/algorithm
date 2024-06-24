function solution(n, lost, reserve) {
    let count = n - lost.length;
    let realLost=lost.filter((l)=>!reserve.includes(l));
    let realReserve=reserve.filter((r)=>!lost.includes(r));
    count += lost.length - realLost.length;
    
    realLost.sort((a, b) => a - b);
    
    
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