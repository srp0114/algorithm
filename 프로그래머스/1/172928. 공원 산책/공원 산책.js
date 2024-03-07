function solution(park, routes) {
    const W = park[0].length;
    const H = park.length;
    
    const map = park.map((v) => v.split(""))
    const directions = {
        E : [0, 1],
        W : [0, -1],
        S : [1, 0],
        N : [-1, 0]
    }
    
    let move = [0, 0];

    for (let i = 0; i < W ; i++) {
        for (let j = 0; j < H; j++) {
            if (map[i][j] === "S") {
                move = [i, j];
                break;
            }
        }
    }
    
    routes.forEach((v) => {
        const [way, distance] = v.split(" ")
        let dist = Number(distance)
        
        let [dx, dy] = move;
        let step = 0;
        
        while(step < dist) {
           dx += directions[way][0];
           dy += directions[way][1];
            
            if (dx < 0 || W <= dy || dy < 0 || H <= dx || map[dx][dy] === "X") 
                break;
            step++;
        }
        
        if(step === dist)
            move = [dx, dy]  
    })
                
    return move;
}