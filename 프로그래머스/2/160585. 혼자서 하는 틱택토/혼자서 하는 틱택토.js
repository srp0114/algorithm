function solution(board) {
    let answer = 1;
    const map = board.map((value) => value.split(""));
    
    let oCount = 0;
    let xCount = 0;
    let oBingo = false;
    let xBingo = false;
    
    map.map((row, i) => {
        row.map((cell, j) => {
            if(cell === "O") oCount++;
            else if(cell === "X") xCount++;
        })
        
        if (map[i].every(cell => cell === 'O') || map.every(row => row[i] === 'O')) oBingo = true;
        if (map[i].every(cell => cell === 'X') || map.every(row => row[i] === 'X')) xBingo = true;
    })
    
    if ((map[0][0] === 'O' && map[1][1] === 'O' && map[2][2] === 'O') ||
        (map[0][2] === 'O' && map[1][1] === 'O' && map[2][0] === 'O')) {
        oBingo = true;
    }
    
    if ((map[0][0] === 'X' && map[1][1] === 'X' && map[2][2] === 'X') ||
        (map[0][2] === 'X' && map[1][1] === 'X' && map[2][0] === 'X')) {
        xBingo = true;
    }
    
    if (xCount > oCount || oCount > xCount + 1) answer = 0;
    if (oBingo && xBingo) answer = 0;
    if (oBingo && oCount !== xCount + 1) answer = 0;
    if (xBingo && oCount !== xCount) answer = 0;
    
    return answer;
}