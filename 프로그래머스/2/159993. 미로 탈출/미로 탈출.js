function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let queue = [];
    let start = [], lever= [];
    let visited = Array.from({ length: N }, () => Array(M).fill(false));
    
    function bfs (start, count, flag) {
        queue.push([start[0], start[1], count, flag]);
        visited[start[0]][start[1]] = true;
        
        while(queue.length > 0) {
            let [x, y, count, flag] = queue.shift();
            
            if(maps[x][y] === "L") {
                flag = true;
                visited = Array.from({ length: N }, () => Array(M).fill(false));
                visited[x][y] = true;
                queue = [];
            }
            
            if(flag && maps[x][y] === "E") return count;

            for(let k = 0; k < 4; k++) {
                let nx = x + dx[k];
                let ny = y + dy[k];
                
                if(nx < 0 || ny < 0 || nx >= N || ny >= M || maps[nx][ny] === "X" || visited[nx][ny]) continue;
                
                queue.push([nx, ny, count+1, flag]);
                visited[nx][ny] = true;
            }
        }
        return -1;
    }
    
    for(let i = 0; i < N; i++) {
        for(let j = 0; j < M; j++) {
            if(maps[i][j] === 'S') {
                start = [i, j];
            }
        }
    }      

    return bfs(start, 0, false);
}