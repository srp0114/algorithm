function solution(m, n, startX, startY, balls) {
    const answer = [];
    const d = [[2*m - startX, startY], [-startX, startY], 
               [startX, 2*n - startY], [startX, -startY]];
    
    for(const ball of balls) {
        let maxValue = Infinity;

        let [ballX, ballY] = ball;
        
        for(let i=0; i<4; i++) {
            let [x, y] = d[i];
            if(x === ballX) {
                const maxY = Math.max(startY, y);
                const minY = Math.min(startY, y);
                if(minY < ballY && ballY < maxY)
                    continue;
            }
            if(y === ballY) {
                const maxX = Math.max(startX, x);
                const minX = Math.min(startX, x);
                if(minX < ballX && ballX < maxX)
                    continue;
            }
            
            const calc = (x-ballX) ** 2 + (y-ballY) ** 2;             
            maxValue = Math.min(maxValue, calc);
        }
            answer.push(maxValue);
    }
    
    return answer;   
}