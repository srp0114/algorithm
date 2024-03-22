function solution(friends, gifts) {
    const nameMap = new Map();
    const N = friends.length;
    
    const giftTable = Array.from({length : N}, () => Array(N).fill(0));
    
    friends.forEach((name, index) => {
        nameMap.set(name, index);
    })
    
    const giftRank = new Array(N).fill(0);
    const nextMonth = new Array(N).fill(0);
    
    gifts.forEach((value) => {
        let [from, to] = value.split(" ");
        giftTable[nameMap.get(from)][nameMap.get(to)]++
    })

    for (let i = 0; i < N; i++) {        
        for(let j = 0; j < N; j++) {
            giftRank[i] += giftTable[i][j] - giftTable[j][i];
        }
    }
    
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            const giftFromTo = giftTable[i][j] - giftTable[j][i];
            
            if (giftFromTo > 0) {
                nextMonth[i]++;
            } else if (giftFromTo < 0) {
                nextMonth[j]++;
            } else { 
                if (giftRank[i] > giftRank[j]) {
                    nextMonth[i]++;
                } else if (giftRank[i] < giftRank[j]) {
                    nextMonth[j]++;
                }
            }
        }
    }

    return Math.max(...nextMonth)
}


