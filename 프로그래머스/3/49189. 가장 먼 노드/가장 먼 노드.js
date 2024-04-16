function solution(n, edge) {
    const graph = Array.from({length: n + 1}, () => []);
    let visited = Array.from({length: n + 1}, () => 0);
    let count = 0;
    
    for(const [v, e] of edge) {
       graph[v].push(e);
       graph[e].push(v);
    }
    
    const queue = [1];
    visited[1] = true;
    
    while(queue.length) {
        const src = queue.shift();
        
        for(const dest of graph[src]) {
            if(!visited[dest]) {
                queue.push(dest);
                visited[dest] = visited[src] +1;
                count++;
            }
        }
    }
    
    const max = Math.max(...visited);
    return visited.filter(item => item === max).length;
}
