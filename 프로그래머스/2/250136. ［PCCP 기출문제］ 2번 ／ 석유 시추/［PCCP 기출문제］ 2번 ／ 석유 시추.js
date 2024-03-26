function solution(land) {
    const N = land.length;
    const M = land[0].length;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let queue = [[0, 0]]; 
    let oilMap = new Map();

    for(let i=0; i<M; i++) {
        for(let j=0; j<N; j++) {
            let tempCount = 0;
            let set = new Set();
            
            if(land[j][i] === 1) {
                queue = [[j, i]]  
                while(queue.length) {
                    let [y, x] = queue.shift();
                    if(land[y][x] === 1) {
                        land[y][x] = 0;
                        tempCount++;
                        if (!set.has(x)) set.add(x);

                        for(let m = 0; m < 4; m++) {
                            let nx = x + dx[m];
                            let ny = y + dy[m];
                            if(nx >= 0 && nx < M && ny >= 0 && ny < N && land[ny][nx] === 1){
                                queue.push([ny, nx]);
                            }
                        }
                    } 
                }
            }

            if (tempCount !== 0) {
                for (let idx of set) {
                  oilMap.set(idx, oilMap.has(idx) ? oilMap.get(idx) + tempCount : tempCount);
                }
            }
        }
    }
    
    const answer = Math.max(...oilMap.values());
    
    return answer;
}