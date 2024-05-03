function solution(N, road, K) {
    const graph = Array.from({length: N + 1}, () => []);
    const distance = Array.from({length: N + 1}, () => Infinity);
    const queue = [];
    
    for(const v of road) {
        const [from, to, dist] = v;
        graph[from].push([to, dist]);
        graph[to].push([from, dist]);
    }
    
    queue.push([1, 0]);
    distance[1] = 0;
    
    while(queue.length) {
        const [curNode, dist] = queue.pop();
        
        for(const edge of graph[curNode]) {
            const node = edge[0];
            const cost = edge[1] + dist;
            
            if(cost < distance[node]) {
                distance[node] = cost;
                queue.push([node, cost]);
            }
        }
    }
    
    return distance.filter((v) => v <= K).length;
}