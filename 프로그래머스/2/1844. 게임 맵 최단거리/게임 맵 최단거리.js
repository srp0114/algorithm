function solution(maps) {
    const n = maps.length - 1;
    const m = maps[0].length - 1;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let min = [];
    
    let queue = [[0, 0, 1]];
    maps[0][0] = 1;
  
    while(queue.length) {
        let [x, y, count] = queue.shift();
        for(let i = 0; i<4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if(nx >= 0 && ny >= 0 && nx <= n && ny <= m && maps[nx][ny] === 1) { 
                queue.push([nx, ny, count+1]);
                maps[nx][ny] = 0;
                
                if(nx === n && ny === m) {
                    min.push(count + 1);
                }
            }
        }
    }
    
    return min.length === 0 ? -1 : Math.min(...min);
}